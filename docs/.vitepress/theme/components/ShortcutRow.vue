<template>
  <div class="shortcuts-grid">
    <div
      v-for="(s, i) in shortcuts"
      :key="i"
      class="ql-glass shortcut-row ql-reveal"
      :style="{ transitionDelay: i * 0.04 + 's' }"
    >
      <span class="action">{{ s.action }}</span>
      <kbd>{{ s.key }}</kbd>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const shortcuts = [
  { action: "Toggle preview", key: "Space" },
  { action: "Close preview", key: "Esc" },
  { action: "Full screen", key: "F11" },
  { action: "Open with default app", key: "Enter" },
  { action: "Zoom in", key: "Scroll Up" },
  { action: "Zoom out", key: "Scroll Down" },
  { action: "Reset zoom", key: "Ctrl 0" },
  { action: "Navigate images", key: "← →" },
  { action: "Next page (PDF)", key: "↓ / PgDn" },
  { action: "Previous page", key: "↑ / PgUp" },
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
.shortcuts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin: 1.25rem 0;
}
@media (min-width: 540px) {
  .shortcuts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.shortcut-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1.125rem;
  border-radius: 0.75rem;
  transition: background 0.15s;
}
.shortcut-row:hover {
  background: var(--vp-c-brand-soft);
}
.action {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style>
