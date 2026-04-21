<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'

defineProps<{ name: string; icon?: string; level?: string }>()

const store = usePreferencesStore()
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium transition-all',
      store.isTerminal
        ? 'border border-[var(--border-color)] text-[var(--accent)] bg-[var(--bg-card)] font-mono rounded hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)]'
        : 'rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
    ]"
  >
    <img v-if="icon" :src="icon" :alt="name" class="w-3.5 h-3.5 object-contain" />
    <span>{{ store.isTerminal ? name : name }}</span>
  </span>
</template>
