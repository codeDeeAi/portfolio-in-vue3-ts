<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePreferencesStore } from '~/stores/preferences'
import { projects } from '~/data/projects'

const store = usePreferencesStore()

const categories = ['all', 'production', 'backend', 'fullstack', 'framework', 'cli'] as const
type Cat = typeof categories[number]

const activeFilter = ref<Cat>('all')

const featured = computed(() => projects.filter((p) => p.featured))
const filtered = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value)
)
</script>

<template>
  <section id="projects" class="py-20 md:py-28 bg-[var(--bg-secondary)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Projects" subtitle="Open-source, side projects & production systems" />

      <!-- Featured -->
      <div class="mb-16">
        <p :class="['text-xs font-semibold uppercase tracking-widest mb-6', store.isTerminal ? 'font-mono text-[var(--accent-green)]' : 'text-[var(--accent)]']">
          {{ store.isTerminal ? '// featured' : 'Featured' }}
        </p>
        <div class="grid md:grid-cols-3 gap-6">
          <ProjectCard v-for="project in featured" :key="project.id" :project="project" />
        </div>
      </div>

      <!-- All projects with filter -->
      <div>
        <p :class="['text-xs font-semibold uppercase tracking-widest mb-5', store.isTerminal ? 'font-mono text-[var(--accent-green)]' : 'text-[var(--accent)]']">
          {{ store.isTerminal ? '// all projects' : 'All Projects' }}
        </p>

        <!-- Filter tabs -->
        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeFilter = cat"
            :class="[
              'px-3 py-1.5 text-xs font-medium rounded transition-all capitalize',
              activeFilter === cat
                ? store.isTerminal
                  ? 'border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] font-mono'
                  : 'bg-[var(--accent)] text-white'
                : store.isTerminal
                  ? 'border border-[var(--border-color)] text-[var(--text-muted)] font-mono hover:border-[var(--accent)] hover:text-[var(--accent)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
            ]"
          >
            {{ store.isTerminal ? `./${cat}` : cat }}
          </button>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
