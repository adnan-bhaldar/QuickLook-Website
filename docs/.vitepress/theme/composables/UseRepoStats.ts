import { ref } from 'vue'

const GITHUB_API = 'https://api.github.com/repos/QL-Win/QuickLook'

export interface FormattedStat {
  endVal: number    // value passed to CountUp  e.g. 22.5
  suffix: string    // suffix passed to CountUp e.g. 'k'
  decimals: number  // decimal places           e.g. 1
  display: string   // static fallback          e.g. '22.5k'
}

export interface RepoStats {
  stars: number
  forks: number
  starsFormatted: FormattedStat
  forksFormatted: FormattedStat
  openIssues: number
  watchers: number
}

// Shared state — fetched once, reused across all components
const stats = ref<RepoStats | null>(null)
const loading = ref(false)
const error = ref('')

function formatCount(n: number): FormattedStat {
  if (n >= 1000) {
    const val      = Math.round(n / 100) / 10   // 22514 → 22.5
    const decimals = val % 1 === 0 ? 0 : 1
    return { endVal: val, suffix: 'k', decimals, display: `${val}k` }
  }
  return { endVal: n, suffix: '', decimals: 0, display: String(n) }
}

async function fetchRepoStats(): Promise<RepoStats | null> {
  if (stats.value) return stats.value
  if (loading.value) return null

  loading.value = true
  error.value = ''

  try {
    const res = await fetch(GITHUB_API)
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)

    const data = await res.json()

    stats.value = {
      stars:          data.stargazers_count ?? 0,
      forks:          data.forks_count ?? 0,
      starsFormatted: formatCount(data.stargazers_count ?? 0),
      forksFormatted: formatCount(data.forks_count ?? 0),
      openIssues:     data.open_issues_count ?? 0,
      watchers:       data.watchers_count ?? 0,
    }

    return stats.value
  } catch (e: any) {
    error.value = e.message
    return null
  } finally {
    loading.value = false
  }
}

export function useRepoStats() {
  return {
    stats,
    loading,
    error,
    fetchRepoStats,
  }
}