<template>
  <div class="feature-grid">
    <div
      class="ql-card feat-card ql-reveal"
      v-for="(f, i) in features"
      :key="i"
      :style="{ transitionDelay: i * 0.07 + 's' }"
    >
      <div
        class="feat-icon"
        :style="{ background: `linear-gradient(135deg,${f.c1},${f.c2})` }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-html="f.icon"
        />
      </div>
      <h3 class="feat-title">{{ f.title }}</h3>
      <p class="feat-desc">{{ f.desc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const features = [
  {
    title: "Instant Preview",
    desc: "Opens in milliseconds. No launch overhead, no spinners. Just Space and see.",
    c1: "#1d4ed8",
    c2: "#3b82f6",
    icon: '<bolt/><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  },
  {
    title: "50+ File Formats",
    desc: "Images, video, audio, PDF, code, archives and more — all handled natively.",
    c1: "#7c3aed",
    c2: "#a855f7",
    icon: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  },
  {
    title: "Syntax Highlighting",
    desc: "Source code previewed with full syntax highlighting for 100+ languages.",
    c1: "#059669",
    c2: "#10b981",
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  },
  {
    title: "Plugin Ecosystem",
    desc: "Extend with community plugins for 3D models, ePub, Office docs and more.",
    c1: "#d97706",
    c2: "#f59e0b",
    icon: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/>',
  },
  {
    title: "HiDPI & 4K Ready",
    desc: "Sharp rendering across 4K, HiDPI and multi-monitor setups with per-display DPI.",
    c1: "#0369a1",
    c2: "#0ea5e9",
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  },
  {
    title: "Keyboard First",
    desc: "Fully operable from the keyboard. Remap any shortcut from the Settings panel.",
    c1: "#be185d",
    c2: "#ec4899",
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 10h8"/><path d="M8 14h4"/>',
  },
];
onMounted(() => {
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
.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}
@media (min-width: 540px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.feat-card {
  padding: 1.5rem;
}
.feat-icon {
  width: 48px;
  height: 48px;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.22);
}
.feat-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}
.feat-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin: 0;
}
</style>
