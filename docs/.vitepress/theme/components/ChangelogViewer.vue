<template>
  <div class="changelog-wrap">
    <div v-if="loading" class="cl-loading">
      <svg
        class="spin"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
      <span>Loading changelog...</span>
    </div>

    <div v-else-if="error" class="cl-error ql-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <span
        >Failed to load changelog.
        <a
          href="https://github.com/QL-Win/QuickLook/blob/master/CHANGELOG.md"
          target="_blank"
          >View on GitHub →</a
        ></span
      >
    </div>

    <div v-else class="cl-content vp-doc" v-html="renderedHtml" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = ref(true);
const error = ref(false);
const renderedHtml = ref("");

const RAW_URL =
  "https://raw.githubusercontent.com/QL-Win/QuickLook/master/CHANGELOG.md";

function parseMarkdown(md: string): string {
  return (
    md
      // h2
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      // h3
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      // h1
      .replace(/^# (.+)$/gm, "<h1>$1</h1>")
      // bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // inline code
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      // links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener">$1</a>',
      )
      // unordered list items
      .replace(/^[-*] (.+)$/gm, "<li>$1</li>")
      // wrap consecutive <li> in <ul>
      .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
      // horizontal rules
      .replace(/^---$/gm, "<hr>")
      // paragraphs — lines that aren't already tags
      .replace(/^(?!<[a-z]|$)(.+)$/gm, "<p>$1</p>")
      // clean up empty lines
      .replace(/\n{3,}/g, "\n\n")
  );
}

onMounted(async () => {
  try {
    const res = await fetch(RAW_URL);
    if (!res.ok) throw new Error("Failed to fetch");
    const text = await res.text();
    renderedHtml.value = parseMarkdown(text);
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.changelog-wrap {
  margin: 1.5rem 0;
}

.cl-loading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
  padding: 2rem 0;
}

.cl-error {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.cl-error a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.spin {
  animation: spinning 0.8s linear infinite;
  color: var(--vp-c-brand-1);
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
