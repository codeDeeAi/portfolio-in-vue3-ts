<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'

const store = usePreferencesStore()
</script>

<template>
  <div class="flex items-center gap-1 p-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]">
    <button
      :class="[
        'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200',
        store.isTerminal
          ? 'bg-[var(--accent)] text-white shadow-sm'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
      ]"
      @click="store.setTheme('terminal')"
      title="Terminal theme"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
      <span class="hidden sm:inline font-mono">Terminal</span>
    </button>

    <button
      :class="[
        'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200',
        store.isMinimal
          ? 'bg-[var(--accent)] text-white shadow-sm'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
      ]"
      @click="store.setTheme('minimal')"
      title="Minimal theme"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
      <span class="hidden sm:inline">Minimal</span>
    </button>
  </div>
</template>
