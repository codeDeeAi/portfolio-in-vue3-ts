<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'

const store = usePreferencesStore()
</script>

<template>
  <button
    v-if="store.isMinimal"
    @click="store.toggleDarkMode()"
    class="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
    :title="store.darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun icon -->
    <svg v-if="store.darkMode" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <!-- Moon icon -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
</template>
