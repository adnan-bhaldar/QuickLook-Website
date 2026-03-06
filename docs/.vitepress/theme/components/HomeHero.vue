<template>
  <div class="ql-home-hero">
    <!-- Stats -->
    <div class="stats-row">
      <div
        class="ql-card stat-card ql-reveal"
        v-for="(s, i) in stats"
        :key="i"
        :style="{ transitionDelay: i * 0.08 + 's' }"
        :ref="
          (el) => {
            if (el) statCardRefs[i] = el as HTMLElement;
          }
        "
      >
        <div class="stat-value ql-gradient-text">
          <ClientOnly>
            <CountUp
              v-if="s.numeric && s.raw > 0"
              :endVal="s.raw"
              :duration="2.2"
              :options="{
                separator: ',',
                suffix: s.suffix,
                decimalPlaces: s.decimals,
              }"
              :ref="
                (el) => {
                  if (el) statCountRefs[i] = el;
                }
              "
            />
            <template #fallback>{{ s.value }}</template>
          </ClientOnly>
          <span v-if="!s.numeric">{{ s.value }}</span>
        </div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>

    <!-- How it works -->
    <div class="how-section">
      <hr class="ql-divider" />
      <div class="how-header">
        <span class="ql-badge">How It Works</span>
        <h2 class="how-title">
          As simple as pressing <span class="ql-gradient-text">Space</span>
        </h2>
      </div>
      <div class="steps-grid">
        <div
          class="ql-card step-card ql-reveal"
          v-for="(step, i) in steps"
          :key="i"
          :style="{ transitionDelay: i * 0.1 + 's' }"
        >
          <div
            class="step-icon"
            :style="{
              background: `linear-gradient(135deg,${step.color1},${step.color2})`,
            }"
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
              v-html="step.icon"
            />
          </div>
          <div class="step-num">{{ String(i + 1).padStart(2, "0") }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Format preview -->
    <div class="formats-section">
      <hr class="ql-divider" />
      <div class="formats-header">
        <span class="ql-badge">Format Support</span>
        <h2 class="formats-title">
          Preview <span class="ql-gradient-text">anything</span>
        </h2>
        <p class="formats-sub">
          50+ formats natively, infinitely more with plugins.
        </p>
      </div>
      <div class="formats-grid">
        <div
          class="ql-glass fmt-chip ql-reveal"
          v-for="(f, i) in formats"
          :key="i"
          :style="{ transitionDelay: i * 0.05 + 's' }"
          :title="f.name"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="f.color"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="f.icon"
          />
          <span class="fmt-name">{{ f.name }}</span>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-section">
      <hr class="ql-divider" />
      <div class="ql-card cta-card ql-reveal">
        <div class="cta-orb orb1"></div>
        <div class="cta-orb orb2"></div>
        <div class="cta-inner">
          <h2 class="cta-title">
            Ready to <span class="ql-gradient-text">speed up</span> your
            workflow?
          </h2>
          <p class="cta-sub">
            Join thousands of developers and power users. Free, always.
          </p>
          <div class="cta-btns">
            <button
              @click="handleDownload"
              :disabled="downloading || loading"
              class="btn-primary"
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
                downloading || loading ? "Fetching latest..." : downloadLabel
              }}
            </button>
            <a
              href="https://github.com/QL-Win/QuickLook"
              target="_blank"
              class="btn-ghost"
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
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
              View on GitHub
            </a>
          </div>
          <p v-if="release" class="version-label">
            Latest: {{ release.tag }} · {{ release.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ICountUp as CountUp } from 'vue-countup-v3'
import { useRelease } from "../composables/useRelease";
import { useRepoStats } from "../composables/UseRepoStats";

const { release, loading, fetchRelease, downloadLatestMsi } = useRelease();
const { stats: repoStats, fetchRepoStats } = useRepoStats();

const downloading = ref(false);
const statCardRefs = ref<HTMLElement[]>([]);
const statCountRefs = ref<any[]>([]);

const downloadLabel = computed(() =>
  release.value ? `Download ${release.value.tag}` : "Download Free",
);

async function handleDownload() {
  downloading.value = true;
  await downloadLatestMsi();
  downloading.value = false;
}

const stats = computed(() => [
  {
    value: repoStats.value?.starsFormatted.display ?? "...",
    raw: repoStats.value?.starsFormatted.endVal ?? 0,
    suffix: repoStats.value?.starsFormatted.suffix ?? "k",
    decimals: repoStats.value?.starsFormatted.decimals ?? 1,
    numeric: true,
    label: "GitHub Stars",
  },
  {
    value: repoStats.value?.forksFormatted.display ?? "...",
    raw: repoStats.value?.forksFormatted.endVal ?? 0,
    suffix: repoStats.value?.forksFormatted.suffix ?? "k",
    decimals: repoStats.value?.forksFormatted.decimals ?? 1,
    numeric: true,
    label: "Forks",
  },
  {
    value: "50+",
    raw: 50,
    suffix: "+",
    decimals: 0,
    numeric: true,
    label: "File Formats",
  },
  {
    value: "Free",
    raw: 0,
    suffix: "",
    decimals: 0,
    numeric: false,
    label: "Always & Forever",
  },
]);

const steps = [
  {
    title: "Select a file",
    desc: "Click any file in Windows Explorer — image, video, PDF, code, zip, or anything else.",
    color1: "#1d4ed8",
    color2: "#3b82f6",
    icon: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  },
  {
    title: "Press Space",
    desc: "Hit the Spacebar. QuickLook intercepts it and instantly springs open a live preview.",
    color1: "#2563eb",
    color2: "#60a5fa",
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 10h8"/><path d="M8 14h4"/>',
  },
  {
    title: "Preview & move on",
    desc: "Full-resolution preview appears. Press Space or Esc to close. Zero friction.",
    color1: "#3b82f6",
    color2: "#93c5fd",
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  },
];

const formats = [
  {
    name: "Images",
    color: "#3b82f6",
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  },
  {
    name: "Video",
    color: "#a855f7",
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  },
  {
    name: "Audio",
    color: "#ec4899",
    icon: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  },
  {
    name: "PDF",
    color: "#ef4444",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  },
  {
    name: "Code",
    color: "#22c55e",
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  },
  {
    name: "Archives",
    color: "#f59e0b",
    icon: '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/>',
  },
  {
    name: "Markdown",
    color: "#14b8a6",
    icon: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  },
  {
    name: "Fonts",
    color: "#6366f1",
    icon: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  },
  {
    name: "3D Models",
    color: "#0ea5e9",
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
  },
  {
    name: "Office",
    color: "#16a34a",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  },
  {
    name: "ePub",
    color: "#d97706",
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  },
  {
    name: "Plugins+",
    color: "#8b5cf6",
    icon: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',
  },
];

onMounted(async () => {
  fetchRelease();
  await fetchRepoStats();

  // Start countup when stat cards scroll into view
  const statObs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          const idx = statCardRefs.value.indexOf(e.target as HTMLElement);
          if (idx !== -1)
            setTimeout(() => statCountRefs.value[idx]?.start?.(), 150);
          statObs.unobserve(e.target);
        }
      }),
    { threshold: 0.3 },
  );
  statCardRefs.value.forEach((el) => el && statObs.observe(el));

  // General reveal observer
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.1 },
  );
  document.querySelectorAll(".ql-reveal").forEach((el) => obs.observe(el));
});
</script>

<style scoped>
.ql-home-hero {
  padding: 0 0 3rem;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0 0;
}
@media (min-width: 640px) {
  .stats-row {
    grid-template-columns: repeat(4, 1fr);
  }
}
.stat-card {
  padding: 1.25rem 1rem;
  text-align: center;
}
.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}
.stat-label {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.how-section {
  margin-top: 3rem;
}
.how-header {
  margin-bottom: 2rem;
}
.how-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.5rem 0 0;
}
.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 640px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.step-card {
  padding: 1.75rem;
}
.step-icon {
  width: 52px;
  height: 52px;
  border-radius: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.25);
}
.step-num {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.step-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}
.step-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin: 0;
}

.formats-section {
  margin-top: 3rem;
}
.formats-header {
  margin-bottom: 1.75rem;
}
.formats-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0.5rem 0 0.4rem;
}
.formats-sub {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}
.formats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
@media (min-width: 480px) {
  .formats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 768px) {
  .formats-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
.fmt-chip {
  border-radius: 0.875rem;
  padding: 0.875rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  cursor: default;
  transition:
    transform 0.2s cubic-bezier(0.22, 0.68, 0, 1.2),
    box-shadow 0.2s;
  transition-delay: 0s !important;
}
.fmt-chip:hover {
  transform: translateY(-4px) scale(1.06);
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.15);
  transition-delay: 0s !important;
}
.fmt-name {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-align: center;
}

.cta-section {
  margin-top: 3rem;
}
.cta-card {
  padding: 3rem 2rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(55px);
  pointer-events: none;
  animation: floatOrb 7s ease-in-out infinite;
}
.orb1 {
  width: 180px;
  height: 180px;
  background: rgba(59, 130, 246, 0.18);
  top: -40px;
  right: -30px;
}
.orb2 {
  width: 130px;
  height: 130px;
  background: rgba(37, 99, 235, 0.13);
  bottom: -20px;
  left: -20px;
  animation-delay: -3s;
}
@keyframes floatOrb {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}
.cta-inner {
  position: relative;
  z-index: 1;
}
.cta-title {
  font-size: 1.65rem;
  font-weight: 800;
  margin: 0 0 0.75rem;
}
.cta-sub {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1.75rem;
}
.cta-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  color: white;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  padding: 0.75rem 1.75rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border: none;
  cursor: pointer;
}
.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}
.btn-primary:hover::before {
  left: 140%;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.38);
}
.btn-primary:disabled {
  opacity: 0.75;
  cursor: not-allowed;
  transform: none !important;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--ql-glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--ql-glass-border);
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-family: "Sora", sans-serif;
  padding: 0.75rem 1.75rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-size: 0.9rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    background 0.2s;
}
.btn-ghost:hover {
  transform: translateY(-2px);
  background: var(--vp-c-brand-soft);
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
}

.version-label {
  margin-top: 0.875rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  font-family: "JetBrains Mono", monospace;
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
