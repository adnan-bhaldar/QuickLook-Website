<template>
  <div class="install-wrap">
    <div class="tab-bar ql-glass">
      <button
        v-for="t in tabs"
        :key="t.id"
        @click="active = t.id"
        class="tab-btn"
        :class="{ active: active === t.id }"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- Store -->
    <div v-show="active === 'store'" class="ql-card tab-panel">
      <div class="panel-head">
        <div
          class="panel-icon"
          style="background: linear-gradient(135deg, #1d4ed8, #3b82f6)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <div>
          <h3 class="panel-title">Microsoft Store</h3>
          <p class="panel-sub">Recommended — auto-updates included</p>
        </div>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in storeSteps" :key="i">
          <span class="step-n">{{ i + 1 }}</span>
          <div>
            <strong>{{ s.t }}</strong
            ><br /><span v-html="s.d" />
          </div>
        </li>
      </ol>
      <a
        href="https://www.microsoft.com/store/apps/9nv4bs3l1h4s"
        target="_blank"
        class="cta-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Open in Microsoft Store
      </a>
    </div>

    <!-- GitHub -->
    <div v-show="active === 'github'" class="ql-card tab-panel">
      <div class="panel-head">
        <div class="panel-icon" style="background: #1e293b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </div>
        <div>
          <h3 class="panel-title">GitHub Release</h3>
          <p class="panel-sub">
            Direct download —
            <span v-if="release">latest {{ release.tag }}</span>
            <span v-else>portable option available</span>
          </p>
        </div>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in ghSteps" :key="i">
          <span class="step-n">{{ i + 1 }}</span>
          <div>
            <strong>{{ s.t }}</strong
            ><br /><span v-html="s.d" />
          </div>
        </li>
      </ol>
      <button
        @click="handleDownload"
        :disabled="downloading || loading"
        class="cta-link"
      >
        <svg
          v-if="!downloading && !loading"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        {{
          downloading || loading
            ? "Fetching latest..."
            : release
              ? `Download ${release.tag}`
              : "Download from GitHub"
        }}
      </button>
    </div>

    <!-- CLI -->
    <div v-show="active === 'cli'" class="ql-card tab-panel">
      <div class="panel-head">
        <div
          class="panel-icon"
          style="background: linear-gradient(135deg, #334155, #1e293b)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ade80"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </div>
        <div>
          <h3 class="panel-title">Package Managers</h3>
          <p class="panel-sub">For CLI power users</p>
        </div>
      </div>
      <div class="pm-list">
        <div v-for="pm in pms" :key="pm.n" class="pm-block">
          <p class="pm-name">{{ pm.n }}</p>
          <div class="code-wrap ql-glass group">
            <button
              @click="copy(pm.code, pm.n)"
              class="copy-btn"
              :title="copied === pm.n ? 'Copied!' : 'Copy'"
            >
              <svg
                v-if="copied !== pm.n"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path
                  d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
            <pre :style="{ color: pm.color }">{{ pm.code }}</pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toastMsg" class="toast ql-glass">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22c55e"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        {{ toastMsg }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRelease } from "../composables/useRelease";

const { release, loading, fetchRelease, downloadLatestMsi } = useRelease();

const downloading = ref(false);
const active = ref("store");
const copied = ref("");
const toastMsg = ref("");

async function handleDownload() {
  downloading.value = true;
  await downloadLatestMsi();
  downloading.value = false;
}

onMounted(() => {
  fetchRelease();
});

const tabs = [
  { id: "store", label: "Microsoft Store" },
  { id: "github", label: "GitHub" },
  { id: "cli", label: "WinGet / Scoop" },
];
const storeSteps = [
  {
    t: "Open the Microsoft Store",
    d: 'Press <kbd>Win</kbd> and search for "Microsoft Store".',
  },
  {
    t: "Search for QuickLook",
    d: "Look for the app by <strong>Paddy Xu</strong>.",
  },
  { t: "Click Install", d: "QuickLook starts automatically with Windows." },
  { t: "Note on updates", d: "⚠️ Microsoft Store updates may lag behind GitHub releases. For the latest version immediately, use the <strong>GitHub</strong> tab." },
];
const ghSteps = [
  {
    t: "Click Download",
    d: "Hit the button below — it fetches the latest <code>.msi</code> directly from GitHub Releases.",
  },
  {
    t: "Run the installer",
    d: "Double-click the downloaded <code>.msi</code> and follow the wizard.",
  },
  {
    t: "Done",
    d: "QuickLook is installed. Look for its icon in the system tray near the clock.",
  },
];
const pms = [
  { n: "📦 WinGet", color: "#4ade80", code: "winget install QL-Win.QuickLook" },
  {
    n: "🥄 Scoop",
    color: "#facc15",
    code: "scoop bucket add extras\nscoop install quicklook",
  },
  { n: "🍫 Chocolatey", color: "#2dd4bf", code: "choco install quicklook" },
];
let timer: ReturnType<typeof setTimeout>;
function copy(code: string, name: string) {
  navigator.clipboard.writeText(code);
  copied.value = name;
  toastMsg.value = `${name} copied!`;
  clearTimeout(timer);
  timer = setTimeout(() => {
    copied.value = "";
    toastMsg.value = "";
  }, 2200);
}
</script>

<style scoped>
.install-wrap {
  margin: 1.25rem 0;
}
.tab-bar {
  display: flex;
  gap: 0.375rem;
  padding: 0.375rem;
  border-radius: 1rem;
  width: fit-content;
  margin-bottom: 1rem;
}
.tab-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 0.7rem;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}
.tab-btn.active {
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  color: #fff;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
}
.tab-panel {
  padding: 1.75rem;
}
.panel-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.panel-icon {
  width: 52px;
  height: 52px;
  border-radius: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
}
.panel-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
}
.panel-sub {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0;
}
.steps {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.steps li {
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.step-n {
  width: 28px;
  height: 28px;
  border-radius: 0.5rem;
  background: rgba(37, 99, 235, 0.12);
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.8rem;
  flex-shrink: 0;
}
.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  font-family: "Sora", sans-serif;
  padding: 0.65rem 1.5rem;
  border-radius: 0.7rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.cta-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.38);
  color: #fff;
  text-decoration: none;
}
.cta-link:disabled {
  opacity: 0.75;
  cursor: not-allowed;
  transform: none !important;
}
.pm-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.pm-name {
  font-size: 0.82rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--vp-c-text-2);
}
.code-wrap {
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  position: relative;
}
.code-wrap pre {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.82rem;
  margin: 0;
  overflow-x: auto;
  white-space: pre-wrap;
}
.copy-btn {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  padding: 0.35rem;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 0.4rem;
  opacity: 0.5;
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.code-wrap:hover .copy-btn {
  opacity: 1;
}
.copy-btn:hover {
  transform: scale(1.15);
}
.toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 999;
  padding: 0.65rem 1.2rem;
  border-radius: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.spin {
  animation: spinning 0.8s linear infinite;
}
@keyframes spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style> 