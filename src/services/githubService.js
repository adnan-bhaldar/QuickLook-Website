/**
 * GitHub API Service
 * Handles fetching release information from the QuickLook repository
 */

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'QL-Win';
const REPO_NAME = 'QuickLook';

/**
 * Fetches the latest release information from GitHub
 * @returns {Promise<Object>} Release data including version, assets, and metadata
 */
export async function fetchLatestRelease() {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        return {
            version: data.tag_name.replace(/^v/, ''), // Remove 'v' prefix if present
            tagName: data.tag_name,
            publishedAt: data.published_at,
            body: data.body,
            assets: data.assets.map(asset => ({
                name: asset.name,
                url: asset.browser_download_url,
                size: asset.size,
                downloadCount: asset.download_count,
                contentType: asset.content_type,
            })),
        };
    } catch (error) {
        console.error('Error fetching GitHub release:', error);
        throw error;
    }
}

/**
 * Extracts the primary installer from release assets
 * Prioritizes .msi files, then .exe files
 * @param {Array} assets - Array of release assets
 * @returns {Object|null} Primary installer asset or null if not found
 */
export function getPrimaryInstaller(assets) {
    if (!assets || assets.length === 0) return null;

    // Prioritize MSI installer
    const msiInstaller = assets.find(asset =>
        asset.name.toLowerCase().endsWith('.msi')
    );

    if (msiInstaller) return msiInstaller;

    // Fallback to EXE installer
    const exeInstaller = assets.find(asset =>
        asset.name.toLowerCase().endsWith('.exe')
    );

    return exeInstaller || null;
}

/**
 * Formats file size to human-readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted size string (e.g., "12.5 MB")
 */
export function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Formats date to relative time (e.g., "2 days ago")
 * @param {string} dateString - ISO date string
 * @returns {string} Relative time string
 */
export function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(diffInSeconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
        }
    }

    return 'just now';
}