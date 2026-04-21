<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import { skillGroups } from '~/data/skills'

const store = usePreferencesStore()

const levelColors: Record<string, string> = {
  expert: 'var(--accent-green)',
  proficient: 'var(--accent)',
  familiar: 'var(--text-muted)',
}
</script>

<template>
  <section id="stack" class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Tech Stack" subtitle="Tools I build with — and how well I know them" />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="group in skillGroups"
          :key="group.category"
          :class="[
            'p-6 rounded-lg border transition-colors',
            store.isTerminal
              ? 'border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]'
              : 'border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm hover:shadow-md hover:border-[var(--accent)]',
          ]"
        >
          <!-- Category header -->
          <div class="mb-5">
            <h3 :class="['font-bold text-sm mb-1', store.isTerminal ? 'font-mono text-[var(--accent)]' : 'text-[var(--text-primary)]']"
                :style="!store.isTerminal ? 'font-family: Space Grotesk, sans-serif' : ''">
              <span v-if="store.isTerminal" class="text-[var(--text-muted)]">[ </span>
              {{ group.category }}
              <span v-if="store.isTerminal" class="text-[var(--text-muted)]"> ]</span>
            </h3>
            <p :class="['text-xs', store.isTerminal ? 'font-mono text-[var(--text-muted)]' : 'text-[var(--text-muted)]']">
              {{ group.description }}
            </p>
          </div>

          <!-- Skills list -->
          <div class="space-y-2.5">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex items-center justify-between gap-2"
            >
              <div class="flex items-center gap-2">
                <img v-if="skill.icon || skill.iconUrl" :src="skill.icon || skill.iconUrl" :alt="skill.name" class="w-4 h-4 object-contain shrink-0 rounded" />
                <span :class="['text-xs', store.isTerminal ? 'font-mono text-[var(--text-secondary)]' : 'text-[var(--text-secondary)]']">
                  {{ skill.name }}
                </span>
              </div>
              <span
                v-if="skill.level"
                :class="['text-[10px] px-2 py-0.5 rounded capitalize shrink-0', store.isTerminal ? 'font-mono border border-[var(--border-color)]' : 'bg-[var(--bg-secondary)]']"
                :style="{ color: levelColors[skill.level ?? ''] }"
              >
                {{ skill.level }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-[var(--border-color)]">
        <span :class="['text-xs', store.isTerminal ? 'font-mono text-[var(--text-muted)]' : 'text-[var(--text-muted)]']">
          {{ store.isTerminal ? '// proficiency' : 'Proficiency:' }}
        </span>
        <div v-for="(color, level) in levelColors" :key="level" class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full" :style="{ background: color }" />
          <span :class="['text-xs capitalize', store.isTerminal ? 'font-mono text-[var(--text-secondary)]' : 'text-[var(--text-secondary)]']">
            {{ level }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
