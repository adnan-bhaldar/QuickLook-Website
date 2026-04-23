<script setup>
import { ref, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const isMounted = ref(false)

onMounted(() => {
    // Sets to true only after the browser has fully loaded the JS
    isMounted.value = true
})
</script>

<template>
    <div :class="{ 'mounted': isMounted }" class="layout-wrapper">
        <Layout />
    </div>
</template>

<style scoped>
.layout-wrapper {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}

.mounted {
    opacity: 1;
}
</style>