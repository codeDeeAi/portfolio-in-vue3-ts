<script setup lang="ts">
import { ref } from 'vue'
import { usePreferencesStore } from '~/stores/preferences'
import { personal } from '~/data/personal'

const store = usePreferencesStore()
const mobileOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all',
      store.isTerminal
        ? 'bg-[var(--bg-primary)]/95 border-b border-[var(--border-color)] backdrop-blur-sm'
        : 'bg-[var(--bg-primary)]/90 border-b border-[var(--border-color)] backdrop-blur-md shadow-sm',
    ]"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
      <!-- Logo / name -->
      <a
        href="#hero"
        @click.prevent="scrollTo('#hero')"
        :class="[
          'font-bold text-sm shrink-0 transition-colors',
          store.isTerminal
            ? 'font-mono text-[var(--accent)] hover:text-[var(--accent-hover)]'
            : 'text-[var(--text-primary)] hover:text-[var(--accent)]',
        ]"
      >
        <span v-if="store.isTerminal">~/adeola.bada</span>
        <span v-else>Adeola Bada</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            :class="[
              'px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
              store.isTerminal
                ? 'font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
            ]"
          >
            <span v-if="store.isTerminal">./{{ link.label.toLowerCase() }}</span>
            <span v-else>{{ link.label }}</span>
          </a>
        </li>
      </ul>

      <!-- Controls -->
      <div class="flex items-center gap-2 shrink-0">
        <ThemeToggle />
        <DarkModeToggle />

        <a
          :href="personal.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded transition-all',
            store.isTerminal
              ? 'border border-[var(--accent)] text-[var(--accent)] font-mono hover:bg-[var(--accent-subtle)] hover:shadow-[0_0_8px_var(--accent)]'
              : 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]',
          ]"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>
          </svg>
          <span v-if="store.isTerminal">resume.pdf</span>
          <span v-else>Resume</span>
        </a>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 space-y-1"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click.prevent="scrollTo(link.href)"
        :class="[
          'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
          store.isTerminal
            ? 'font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)]'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
        ]"
      >
        {{ link.label }}
      </a>
      <a
        :href="personal.resumeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="block px-3 py-2 text-sm font-semibold text-[var(--accent)]"
      >
        Resume ↗
      </a>
    </div>
  </header>
</template>
