import { createContext, useContext } from 'react';

/**
 * Context for sharing version and release information across the application
 */
export const VersionContext = createContext({
    version: null,
    releaseData: null,
    installer: null,
    isLoading: true,
    error: null,
});

/**
 * Hook to access version context
 * @returns {Object} Version context value
 */
export function useVersion() {
    const context = useContext(VersionContext);

    if (context === undefined) {
        throw new Error('useVersion must be used within a VersionProvider');
    }

    return context;
}