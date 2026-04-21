<script setup lang="ts">
import { onMounted } from 'vue'
import { usePreferencesStore } from '~/stores/preferences'

const store = usePreferencesStore()

onMounted(() => {
  store.applyToDOM()
})
</script>

<template>
  <div>
    <ThemePrompt />
    <NuxtPage />
  </div>
</template>
