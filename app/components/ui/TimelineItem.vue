<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import type { Experience } from '~/data/experience'

defineProps<{ experience: Experience; isLast?: boolean }>()

const store = usePreferencesStore()
</script>

<template>
  <div class="relative flex gap-6 md:gap-8">
    <!-- Timeline line & dot -->
    <div class="flex flex-col items-center shrink-0">
      <div
        :class="[
          'w-3 h-3 rounded-full mt-1.5 shrink-0 z-10',
          experience.current
            ? 'bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]'
            : 'bg-[var(--border-color)] border-2 border-[var(--bg-secondary)]',
        ]"
      />
      <div v-if="!isLast" class="w-px flex-1 mt-1 bg-[var(--border-color)] min-h-[2rem]" />
    </div>

    <!-- Content -->
    <div class="pb-10 flex-1 min-w-0">
      <!-- Terminal variant -->
      <div
        v-if="store.isTerminal"
        :class="[
          'border rounded-lg p-5 transition-colors',
          experience.current
            ? 'border-[var(--accent)] bg-[var(--bg-card)]'
            : 'border-[var(--border-color)] bg-[var(--bg-card)]',
        ]"
      >
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 class="font-mono font-bold text-[var(--text-primary)] text-sm">
              <span class="text-[var(--accent-green)]">{{ experience.role }}</span>
            </h3>
            <p class="text-[var(--accent)] font-mono text-xs mt-0.5">@ {{ experience.company }}</p>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[var(--text-muted)] font-mono text-xs block">{{ experience.period }}</span>
            <span class="text-[var(--text-muted)] font-mono text-xs">{{ experience.location }}</span>
          </div>
        </div>

        <!-- Metrics -->
        <div v-if="experience.metrics?.length" class="flex flex-wrap gap-2 mb-3">
          <div
            v-for="metric in experience.metrics"
            :key="metric.label"
            class="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--accent-subtle)] border border-[var(--accent)] rounded text-xs font-mono"
          >
            <span class="text-[var(--accent)] font-bold">{{ metric.value }}</span>
            <span class="text-[var(--text-secondary)]">{{ metric.label }}</span>
          </div>
        </div>

        <ul class="space-y-1.5">
          <li
            v-for="(item, i) in experience.highlights"
            :key="i"
            class="flex gap-2 text-xs font-mono text-[var(--text-secondary)] leading-relaxed"
          >
            <span class="text-[var(--accent-green)] shrink-0 mt-0.5">›</span>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="flex flex-wrap gap-1.5 mt-4 items-center justify-between">
          <div class="flex flex-wrap gap-1.5">
            <TechBadge v-for="tech in experience.stack" :key="tech" :name="tech" />
          </div>
          <a v-if="experience.website" :href="experience.website" target="_blank" rel="noopener noreferrer"
             class="flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            visit site
          </a>
        </div>
      </div>

      <!-- Minimal variant -->
      <div v-else class="pb-2">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 class="font-bold text-[var(--text-primary)] text-base" style="font-family: 'Space Grotesk', sans-serif;">
              {{ experience.role }}
            </h3>
            <p class="text-[var(--accent)] font-semibold text-sm mt-0.5">{{ experience.company }}</p>
            <p class="text-[var(--text-muted)] text-xs mt-0.5">{{ experience.location }}</p>
          </div>
          <span
            :class="[
              'text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-0.5',
              experience.current
                ? 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
            ]"
          >
            {{ experience.period }}
          </span>
        </div>

        <!-- Metrics -->
        <div v-if="experience.metrics?.length" class="flex flex-wrap gap-2 mb-4">
          <div
            v-for="metric in experience.metrics"
            :key="metric.label"
            class="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg"
          >
            <span class="text-[var(--accent)] font-bold text-sm">{{ metric.value }}</span>
            <span class="text-[var(--text-secondary)] text-xs">{{ metric.label }}</span>
          </div>
        </div>

        <ul class="space-y-2 mb-4">
          <li
            v-for="(item, i) in experience.highlights"
            :key="i"
            class="flex gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"
          >
            <span class="text-[var(--accent)] shrink-0 mt-1 text-xs">●</span>
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="flex flex-wrap gap-1.5 items-center justify-between">
          <div class="flex flex-wrap gap-1.5">
            <TechBadge v-for="tech in experience.stack" :key="tech" :name="tech" />
          </div>
          <a v-if="experience.website" :href="experience.website" target="_blank" rel="noopener noreferrer"
             class="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Visit site
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
