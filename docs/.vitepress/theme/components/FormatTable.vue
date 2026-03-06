<template>
  <div class="fmt-grid">
    <div
      v-for="(cat, i) in cats"
      :key="i"
      class="ql-card fmt-card ql-reveal"
      :style="{ transitionDelay: i * 0.06 + 's' }"
    >
      <div class="fmt-head">
        <div
          class="fmt-icon"
          :style="{ background: `linear-gradient(135deg,${cat.c1},${cat.c2})` }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="cat.icon"
          />
        </div>
        <div class="fmt-name">{{ cat.name }}</div>
      </div>
      <div class="fmt-exts">
        <code v-for="e in cat.exts" :key="e">{{ e }}</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const cats = [
  {
    name: "Images",
    c1: "#2563eb",
    c2: "#60a5fa",
    exts: ["jpg", "png", "gif", "webp", "bmp", "heic", "svg", "tiff", "ico"],
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  },
  {
    name: "Video",
    c1: "#7c3aed",
    c2: "#a855f7",
    exts: ["mp4", "mkv", "avi", "mov", "wmv", "webm", "flv", "m4v"],
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  },
  {
    name: "Audio",
    c1: "#be185d",
    c2: "#ec4899",
    exts: ["mp3", "flac", "ogg", "wav", "aac", "m4a", "wma", "opus"],
    icon: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  },
  {
    name: "Documents",
    c1: "#dc2626",
    c2: "#ef4444",
    exts: ["pdf", "txt", "log", "csv", "rtf", "nfo"],
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  },
  {
    name: "Code",
    c1: "#15803d",
    c2: "#22c55e",
    exts: [
      "js",
      "ts",
      "py",
      "rs",
      "go",
      "cs",
      "cpp",
      "java",
      "rb",
      "php",
      "swift",
    ],
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  },
  {
    name: "Archives",
    c1: "#d97706",
    c2: "#f59e0b",
    exts: ["zip", "tar", "gz", "7z", "rar", "cab"],
    icon: '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/>',
  },
  {
    name: "Fonts",
    c1: "#4f46e5",
    c2: "#6366f1",
    exts: ["ttf", "otf", "woff", "woff2"],
    icon: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
  },
  {
    name: "Web",
    c1: "#0369a1",
    c2: "#0ea5e9",
    exts: ["html", "css", "scss", "svg", "json", "xml", "yaml"],
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
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
.fmt-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.875rem;
  margin: 1.25rem 0;
}
@media (min-width: 640px) {
  .fmt-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 900px) {
  .fmt-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.fmt-card {
  padding: 1.125rem;
}
.fmt-head {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.75rem;
}
.fmt-icon {
  width: 34px;
  height: 34px;
  border-radius: 0.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fmt-name {
  font-weight: 700;
  font-size: 0.875rem;
}
.fmt-exts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.fmt-exts code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.68rem;
  background: var(--vp-code-bg);
  color: var(--vp-code-color);
  padding: 0.1rem 0.4rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(37, 99, 235, 0.12);
}
</style>
