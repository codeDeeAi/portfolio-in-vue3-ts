<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'

defineProps<{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()

const store = usePreferencesStore()
</script>

<template>
  <div :class="['mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-left']">
    <!-- Terminal variant -->
    <div v-if="store.isTerminal" class="space-y-2">
      <div class="flex items-center gap-2" :class="align === 'center' ? 'justify-center' : ''">
        <span class="text-[var(--accent-green)] font-mono text-sm">##</span>
        <h2 class="text-2xl md:text-3xl font-bold font-mono text-[var(--text-primary)]">
          {{ title }}
        </h2>
      </div>
      <p v-if="subtitle" class="text-[var(--text-secondary)] font-mono text-sm">
        <span class="text-[var(--text-muted)]">// </span>{{ subtitle }}
      </p>
      <div class="w-12 h-px bg-[var(--accent)]" :class="align === 'center' ? 'mx-auto' : ''" />
    </div>

    <!-- Minimal variant -->
    <div v-else class="space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
          style="font-family: 'Space Grotesk', sans-serif;">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl"
         :class="align === 'center' ? 'mx-auto' : ''">
        {{ subtitle }}
      </p>
      <div class="flex items-center gap-2" :class="align === 'center' ? 'justify-center' : ''">
        <div class="w-8 h-1 rounded-full bg-[var(--accent)]" />
        <div class="w-2 h-1 rounded-full bg-[var(--accent-subtle)]" />
      </div>
    </div>
  </div>
</template>
