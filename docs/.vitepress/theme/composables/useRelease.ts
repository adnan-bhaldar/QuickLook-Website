import { ref } from 'vue'

const GITHUB_API = 'https://api.github.com/repos/QL-Win/QuickLook/releases/latest'

export interface Release {
  tag: string
  version: string
  msiUrl: string
  name: string
  publishedAt: string
}

// Shared state — fetched once, reused across all components
const release = ref<Release | null>(null)
const loading = ref(false)
const error = ref('')

async function fetchRelease(): Promise<Release | null> {
  if (release.value) return release.value
  if (loading.value) return null

  loading.value = true
  error.value = ''

  try {
    const res = await fetch(GITHUB_API)
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)

    const data = await res.json()

    const msiAsset =
      data.assets?.find((a: any) =>
        a.name.endsWith('.msi') && !a.name.toLowerCase().includes('arm')
      ) ?? data.assets?.find((a: any) => a.name.endsWith('.msi'))

    if (!msiAsset) throw new Error('No .msi asset in latest release')

    const tag: string = data.tag_name ?? ''
    const version = tag.replace(/^v/, '')

    release.value = {
      tag,
      version,
      msiUrl: msiAsset.browser_download_url,
      name: msiAsset.name,
      publishedAt: data.published_at ?? '',
    }

    return release.value
  } catch (e: any) {
    error.value = e.message
    return null
  } finally {
    loading.value = false
  }
}

function getFallbackUrl(tag?: string): string {
  if (tag) {
    const v = tag.replace(/^v/, '')
    return `https://github.com/QL-Win/QuickLook/releases/download/${tag}/QuickLook-${v}.msi`
  }
  return 'https://github.com/QL-Win/QuickLook/releases/latest'
}

async function downloadLatestMsi(): Promise<void> {
  const r = await fetchRelease()
  const url = r ? r.msiUrl : getFallbackUrl(release.value?.tag)
  window.location.href = url
}

export function useRelease() {
  return {
    release,
    loading,
    error,
    fetchRelease,
    downloadLatestMsi,
  }
}