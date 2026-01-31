import { useState, useEffect } from 'react';
import { fetchLatestRelease, getPrimaryInstaller } from '../services/githubService';

/**
 * Custom hook to fetch and manage GitHub release data
 * @returns {Object} Release state including version, data, installer, loading, and error
 */
export function useGitHubRelease() {
    const [state, setState] = useState({
        version: null,
        releaseData: null,
        installer: null,
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;

        async function loadReleaseData() {
            try {
                const data = await fetchLatestRelease();

                if (isMounted) {
                    const primaryInstaller = getPrimaryInstaller(data.assets);

                    setState({
                        version: data.version,
                        releaseData: data,
                        installer: primaryInstaller,
                        isLoading: false,
                        error: null,
                    });
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Failed to load release data:', error);
                    setState(prev => ({
                        ...prev,
                        isLoading: false,
                        error: error.message || 'Failed to fetch release information',
                    }));
                }
            }
        }

        loadReleaseData();

        return () => {
            isMounted = false;
        };
    }, []);

    return state;
}