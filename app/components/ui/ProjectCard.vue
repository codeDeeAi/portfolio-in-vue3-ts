<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import type { Project } from '~/data/projects'

defineProps<{ project: Project }>()

const store = usePreferencesStore()
</script>

<template>
  <!-- Terminal card -->
  <div
    v-if="store.isTerminal"
    class="group flex flex-col border border-[var(--border-color)] bg-[var(--bg-card)] rounded-lg overflow-hidden transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_0_16px_rgba(88,166,255,0.1)]"
  >
    <div class="relative overflow-hidden h-44">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
    </div>
    <div class="p-5 flex flex-col flex-1 gap-3">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-mono font-bold text-[var(--text-primary)] text-sm">
          <span class="text-[var(--accent-green)]">~/projects/</span>{{ project.title.toLowerCase().replace(/\s+/g, '-') }}
        </h3>
        <div class="flex items-center gap-1.5 shrink-0">
          <span v-if="project.wip" class="text-[10px] px-2 py-0.5 border border-[var(--accent-green)] text-[var(--accent-green)] font-mono rounded animate-pulse">wip</span>
          <span class="text-[10px] px-2 py-0.5 border border-[var(--border-color)] text-[var(--text-muted)] font-mono rounded">{{ project.category }}</span>
        </div>
      </div>
      <p v-if="project.company" class="text-[10px] font-mono text-[var(--accent)] -mt-1">@ {{ project.company }}</p>
      <p class="text-[var(--text-secondary)] text-xs font-mono leading-relaxed line-clamp-3 flex-1">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-1.5">
        <TechBadge v-for="tech in project.stack.slice(0, 5)" :key="tech" :name="tech" />
        <span v-if="project.stack.length > 5" class="text-[var(--text-muted)] text-xs font-mono">
          +{{ project.stack.length - 5 }}
        </span>
      </div>
      <div class="flex items-center gap-3 pt-1">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:underline"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          source
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-green)] hover:underline"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          live demo
        </a>
      </div>
    </div>
  </div>

  <!-- Minimal card -->
  <div
    v-else
    class="group flex flex-col bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--accent)] shadow-[var(--card-shadow,0_1px_3px_rgba(0,0,0,0.08))] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
  >
    <div class="relative overflow-hidden h-44">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div class="absolute top-3 right-3 flex gap-1.5">
        <span v-if="project.wip" class="text-[10px] px-2.5 py-1 bg-[var(--accent-green)] text-white rounded-full font-semibold animate-pulse">WIP</span>
        <span class="text-[10px] px-2.5 py-1 bg-[var(--accent)] text-white rounded-full font-semibold capitalize">{{ project.category }}</span>
      </div>
    </div>
    <div class="p-5 flex flex-col flex-1 gap-3">
      <div>
        <h3 class="font-bold text-[var(--text-primary)] text-base" style="font-family: 'Space Grotesk', sans-serif;">
          {{ project.title }}
        </h3>
        <p v-if="project.company" class="text-xs text-[var(--accent)] mt-0.5">{{ project.company }}</p>
      </div>
      <p class="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 flex-1">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-1.5">
        <TechBadge v-for="tech in project.stack.slice(0, 5)" :key="tech" :name="tech" />
        <span v-if="project.stack.length > 5" class="text-[var(--text-muted)] text-xs">
          +{{ project.stack.length - 5 }} more
        </span>
      </div>
      <div class="flex items-center gap-4 pt-1 border-t border-[var(--border-color)]">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>
