<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import { personal } from '~/data/personal'

const store = usePreferencesStore()

const facts = [
  { icon: '🎓', label: 'Background', value: 'BEng Civil Engineering → Software' },
  { icon: '📍', label: 'Location', value: 'Nigeria' },
  { icon: '🦀', label: 'Learning', value: 'Rust + MSc in Information Technology' },
  { icon: '🎮', label: 'Outside work', value: 'Gaming, nature & family' },
]
</script>

<template>
  <section id="about" class="py-20 md:py-28 bg-[var(--bg-secondary)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title="About Me" subtitle="The engineer behind the code" />

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Bio text -->
        <div class="space-y-4">
          <!-- Terminal variant -->
          <template v-if="store.isTerminal">
            <div class="terminal-window">
              <div class="terminal-titlebar">
                <div class="terminal-dot bg-[#ff5f56]" />
                <div class="terminal-dot bg-[#ffbd2e]" />
                <div class="terminal-dot bg-[#27c93f]" />
                <span class="ml-2 text-xs text-[var(--text-muted)] font-mono">about.md</span>
              </div>
              <div class="terminal-body space-y-4">
                <p v-for="(para, i) in personal.bio.split('\n\n')" :key="i"
                   class="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {{ para.trim() }}
                </p>
              </div>
            </div>
          </template>

          <!-- Minimal variant -->
          <template v-else>
            <p v-for="(para, i) in personal.bio.split('\n\n')" :key="i"
               class="text-[var(--text-secondary)] text-base leading-relaxed">
              {{ para.trim() }}
            </p>
          </template>

          <!-- CTA -->
          <div class="pt-4">
            <a :href="personal.resumeUrl" target="_blank" rel="noopener noreferrer"
               :class="store.isTerminal ? 'terminal-btn' : 'btn-primary'">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
              {{ store.isTerminal ? '$ open resume.pdf' : 'Download Resume' }}
            </a>
          </div>
        </div>

        <!-- Facts grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="fact in facts"
            :key="fact.label"
            :class="[
              'p-5 rounded-lg border transition-colors',
              store.isTerminal
                ? 'border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]'
                : 'border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] shadow-sm',
            ]"
          >
            <div class="text-2xl mb-2">{{ fact.icon }}</div>
            <div :class="['text-xs font-semibold uppercase tracking-wider mb-1', store.isTerminal ? 'text-[var(--text-muted)] font-mono' : 'text-[var(--text-muted)]']">
              {{ fact.label }}
            </div>
            <div :class="['text-sm font-medium text-[var(--text-primary)]', store.isTerminal ? 'font-mono' : '']">
              {{ fact.value }}
            </div>
          </div>

          <!-- Photo in about section (terminal mode only) -->
          <div
            v-if="store.isTerminal"
            class="sm:col-span-2 border border-[var(--border-color)] rounded-lg overflow-hidden"
          >
            <img :src="personal.photo" alt="Adeola Bada" class="w-full h-48 object-cover object-top" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
