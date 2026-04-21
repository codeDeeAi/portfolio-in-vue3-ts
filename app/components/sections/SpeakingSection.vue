<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import { speakingEngagements } from '~/data/speaking'

const store = usePreferencesStore()
</script>

<template>
  <section id="speaking" class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Speaking"
        subtitle="Public talks, panels & community engagements"
      />

      <div class="space-y-6">
        <div
          v-for="talk in speakingEngagements"
          :key="talk.id"
          :class="[
            'rounded-lg border p-6 transition-all',
            store.isTerminal
              ? 'border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]'
              : 'border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm hover:shadow-md hover:border-[var(--accent)]',
          ]"
        >
          <div class="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-between mb-4">
            <div class="flex-1">
              <!-- Terminal header -->
              <template v-if="store.isTerminal">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-[var(--accent-green)] font-mono text-xs">▶</span>
                  <h3 class="font-mono font-bold text-[var(--text-primary)] text-sm">{{ talk.topic }}</h3>
                </div>
                <p class="font-mono text-[var(--accent)] text-xs">{{ talk.organisation }}</p>
                <p class="font-mono text-[var(--text-muted)] text-xs mt-0.5">
                  {{ talk.role }} · {{ talk.date }} · {{ talk.location }}
                </p>
              </template>
              <!-- Minimal header -->
              <template v-else>
                <h3 class="font-bold text-[var(--text-primary)] text-base mb-1"
                    style="font-family: 'Space Grotesk', sans-serif;">
                  {{ talk.topic }}
                </h3>
                <p class="text-[var(--accent)] font-semibold text-sm">{{ talk.organisation }}</p>
                <p class="text-[var(--text-muted)] text-xs mt-0.5">
                  {{ talk.role }} · {{ talk.date }} · {{ talk.location }}
                </p>
              </template>
            </div>

            <!-- Format badge + recording link -->
            <div class="flex flex-col sm:items-end gap-2 shrink-0">
              <span
                :class="[
                  'text-[10px] font-semibold px-2.5 py-1 rounded-full w-fit',
                  store.isTerminal
                    ? 'font-mono border border-[var(--accent)] text-[var(--accent)]'
                    : 'bg-[var(--accent-subtle)] text-[var(--accent)]',
                ]"
              >
                {{ talk.format }}
              </span>
              <a
                v-if="talk.recordingUrl"
                :href="talk.recordingUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'flex items-center gap-1.5 text-xs font-semibold transition-colors',
                  store.isTerminal
                    ? 'font-mono text-[var(--accent-green)] hover:underline'
                    : 'text-red-500 hover:text-red-600',
                ]"
              >
                <!-- YouTube play icon -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span v-if="store.isTerminal">$ watch_recording</span>
                <span v-else>Watch Recording</span>
              </a>
            </div>
          </div>

          <p :class="['leading-relaxed', store.isTerminal ? 'font-mono text-xs text-[var(--text-secondary)]' : 'text-sm text-[var(--text-secondary)]']">
            <span v-if="store.isTerminal" class="text-[var(--text-muted)]">// </span>{{ talk.description }}
          </p>
        </div>
      </div>

      <!-- More engagements note -->
      <p :class="['mt-6 text-xs', store.isTerminal ? 'font-mono text-[var(--text-muted)]' : 'text-[var(--text-muted)]']">
        <span v-if="store.isTerminal">// Additional speaking engagements — stay tuned.</span>
        <span v-else>More speaking engagements coming soon.</span>
      </p>
    </div>
  </section>
</template>
