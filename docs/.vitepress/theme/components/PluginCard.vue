<template>
  <div class="plugins-grid">
    <a
      v-for="p in plugins"
      :key="p.name"
      :href="p.url"
      target="_blank"
      class="ql-card plugin-card ql-reveal"
      :style="{ transitionDelay: p.delay }"
    >
      <div
        class="p-icon"
        :style="{ background: `linear-gradient(135deg,${p.c1},${p.c2})` }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-html="p.icon"
        />
      </div>
      <div class="p-body">
        <div class="p-name">{{ p.name }}</div>
        <div class="p-author">by {{ p.author }}</div>
        <p class="p-desc">{{ p.desc }}</p>
        <div class="p-exts">
          <span
            v-for="e in p.exts"
            :key="e"
            class="ext-tag"
            :style="{ background: p.c1 + '18', color: p.c1 }"
            >{{ e }}</span
          >
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const plugins = [
  {
    name: "QL-Office",
    author: "QL-Win",
    desc: "Native Office document previews without opening Word, Excel or PowerPoint.",
    c1: "#16a34a",
    c2: "#22c55e",
    exts: [".docx", ".xlsx", ".pptx"],
    url: "https://github.com/QL-Win/QuickLook.Plugin.Office",
    delay: ".05s",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  },
  {
    name: "QL-ePub",
    author: "QL-Win",
    desc: "Preview ePub ebooks with rendered HTML and a table of contents navigator.",
    c1: "#f97316",
    c2: "#fb923c",
    exts: [".epub"],
    url: "https://github.com/QL-Win/QuickLook.Plugin.EPub",
    delay: ".1s",
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  },
  {
    name: "QL-3D / GLTF",
    author: "QL-Win",
    desc: "Interactive 3D model viewer with rotation and zoom using Three.js.",
    c1: "#2563eb",
    c2: "#60a5fa",
    exts: [".stl", ".obj", ".gltf"],
    url: "https://github.com/QL-Win/QuickLook.Plugin.GLTFViewer",
    delay: ".15s",
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
  },
  {
    name: "QL-Markdown",
    author: "QL-Win",
    desc: "Render Markdown as beautiful GitHub-flavoured HTML with table and code support.",
    c1: "#a855f7",
    c2: "#c084fc",
    exts: [".md", ".mdx"],
    url: "https://github.com/QL-Win/QuickLook.Plugin.MarkdownViewer",
    delay: ".2s",
    icon: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  },
  {
    name: "QL-AppxPackage",
    author: "QL-Win",
    desc: "Preview Windows app package metadata, icons and manifests for .msix / .appx.",
    c1: "#ec4899",
    c2: "#f472b6",
    exts: [".appx", ".msix"],
    url: "https://github.com/QL-Win/QuickLook.Plugin.AppxPackage",
    delay: ".25s",
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  },
  {
    name: "QL-BATPreview",
    author: "Community",
    desc: "Uses the bat CLI tool for rich syntax-highlighted script and config file previews.",
    c1: "#14b8a6",
    c2: "#2dd4bf",
    exts: [".sh", ".bat", ".ps1"],
    url: "https://github.com/QL-Win/QuickLook",
    delay: ".3s",
    icon: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
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
    { threshold: 0.08 },
  );
  document.querySelectorAll(".ql-reveal").forEach((el) => obs.observe(el));
});
</script>

<style scoped>
.plugins-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1.25rem 0;
}
@media (min-width: 540px) {
  .plugins-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.plugin-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  text-decoration: none;
  color: inherit;
}
.plugin-card:hover {
  text-decoration: none;
  color: inherit;
}
.p-icon {
  width: 44px;
  height: 44px;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.p-name {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.1rem;
}
.p-author {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.5rem;
}
.p-desc {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 0.625rem;
}
.p-exts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}
.ext-tag {
  font-size: 0.68rem;
  font-family: "JetBrains Mono", monospace;
  padding: 0.15rem 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
}
</style>
