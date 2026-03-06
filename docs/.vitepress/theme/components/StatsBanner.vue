<template>
  <div class="stats-wrap">
    <div
      class="ql-card stat ql-reveal"
      v-for="(s, i) in statItems"
      :key="i"
      :style="{ transitionDelay: i * 0.08 + 's' }"
      :ref="
        (el) => {
          if (el) cardRefs[i] = el as HTMLElement;
        }
      "
    >
      <div class="val ql-gradient-text">
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
                if (el) countRefs[i] = el;
              }
            "
          />
          <template #fallback>{{ s.v }}</template>
        </ClientOnly>
        <span v-if="!s.numeric">{{ s.v }}</span>
      </div>
      <div class="lbl">{{ s.l }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import CountUp from "vue-countup-v3";
import { useRepoStats } from "../composables/useRepoStats.ts";

const { stats: repoStats, fetchRepoStats } = useRepoStats();

const cardRefs = ref<HTMLElement[]>([]);
const countRefs = ref<any[]>([]);

const statItems = computed(() => [
  {
    v: repoStats.value?.starsFormatted.display ?? "...",
    raw: repoStats.value?.starsFormatted.endVal ?? 0,
    suffix: repoStats.value?.starsFormatted.suffix ?? "k",
    decimals: repoStats.value?.starsFormatted.decimals ?? 1,
    numeric: true,
    l: "GitHub Stars",
  },
  {
    v: repoStats.value?.forksFormatted.display ?? "...",
    raw: repoStats.value?.forksFormatted.endVal ?? 0,
    suffix: repoStats.value?.forksFormatted.suffix ?? "k",
    decimals: repoStats.value?.forksFormatted.decimals ?? 1,
    numeric: true,
    l: "Forks",
  },
  {
    v: "50+",
    raw: 50,
    suffix: "+",
    decimals: 0,
    numeric: true,
    l: "File Formats",
  },
  {
    v: "Free",
    raw: 0,
    suffix: "",
    decimals: 0,
    numeric: false,
    l: "Always & Forever",
  },
]);

onMounted(async () => {
  await fetchRepoStats();

  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          const idx = cardRefs.value.indexOf(e.target as HTMLElement);
          if (idx !== -1) {
            // small delay so CountUp has mounted before we call start
            setTimeout(() => countRefs.value[idx]?.start?.(), 150);
          }
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.3 },
  );
  cardRefs.value.forEach((el) => el && obs.observe(el));
});
</script>

<style scoped>
.stats-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.875rem;
  margin: 1.5rem 0;
}
@media (min-width: 540px) {
  .stats-wrap {
    grid-template-columns: repeat(4, 1fr);
  }
}
.stat {
  padding: 1.25rem;
  text-align: center;
}
.val {
  font-size: 1.65rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}
.lbl {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-3);
}
</style>
