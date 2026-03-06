---
layout: home

hero:
  name: "QuickLook"
  text: "macOS Quick Look for Windows"
  tagline: "Preview any file instantly by pressing Space — no app opens, no waiting. Lightning-fast file previews for images, videos, documents, code and more."
  image:
    src: /logo.webp
    alt: QuickLook
  actions:
    - theme: brand
      text: Download
      link: https://github.com/QL-Win/QuickLook/releases
    - theme: alt
      text: Get Started
      link: /guide/introduction

features:
  - icon: ⚡
    title: Instant Preview
    details: Previews open in milliseconds. No application launch, no wait time — just press Space and see your file.
  - icon: 🗂️
    title: 50+ Formats
    details: Images, video, audio, PDFs, source code, Office docs, archives and more — all supported natively.
  - icon: 🧩
    title: Plugin Ecosystem
    details: Extend with community-built plugins for 3D models, ePub, Office documents and beyond.
  - icon: 🌙
    title: Light & Dark Theme
    details: Follows your Windows system theme automatically. Crisp rendering on HiDPI and 4K displays.
  - icon: ⌨️
    title: Keyboard First
    details: Navigate, zoom, full-screen and open files — entirely from the keyboard with customisable hotkeys.
  - icon: 🔓
    title: Free & Open Source
    details: GPL-3.0 licensed. No ads, no telemetry, no subscriptions. Community-driven since 2017.
---

<HomeHero />

<script setup>
import { onMounted } from 'vue'
import { useRelease } from './.vitepress/theme/composables/useRelease'

const { fetchRelease, downloadLatestMsi, release } = useRelease()

onMounted(async () => {
  // Pre-fetch release info in background
  await fetchRelease()

  // Find the "Download Free" hero action button and hijack its click
  const btn = document.querySelector('.VPHero .VPButton.brand')
  if (!btn) return

  // Update label with version if available
  if (release.value?.tag) {
    btn.textContent = 'Download'
  }

  btn.addEventListener('click', async (e) => {
    e.preventDefault()
    const original = btn.textContent
    btn.textContent = 'Downloading...'
    await downloadLatestMsi()
    btn.textContent = original
  })
})
</script>