<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePreferencesStore } from '~/stores/preferences'
import { personal } from '~/data/personal'

const store = usePreferencesStore()

// Typewriter for terminal theme
const lines = [
  { text: '~/portfolio $ whoami', type: 'command' },
  { text: '{', type: 'bracket' },
  { text: '  name:       "Adeola Bada",', type: 'prop', key: 'name', val: '"Adeola Bada"' },
  { text: '  role:       "Senior Backend Engineer",', type: 'prop', key: 'role', val: '"Senior Backend Engineer"' },
  { text: '  stack:      ["PHP", "Laravel", "Node.js", "TypeScript"],', type: 'prop', key: 'stack', val: '["PHP", "Laravel", "Node.js", "TypeScript"]' },
  { text: '  experience: "5+ years",', type: 'prop', key: 'experience', val: '"5+ years"' },
  { text: '  location:   "Nigeria 🌍",', type: 'prop', key: 'location', val: '"Nigeria 🌍"' },
  { text: '  learning:   "Rust",', type: 'prop', key: 'learning', val: '"Rust"' },
  { text: '  available:  true', type: 'prop', key: 'available', val: 'true' },
  { text: '}', type: 'bracket' },
]

const visibleLines = ref(0)
const showCursor = ref(true)
let interval: ReturnType<typeof setInterval>
let cursorInterval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    if (visibleLines.value < lines.length) {
      visibleLines.value++
    } else {
      clearInterval(interval)
    }
  }, 120)
  cursorInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

onUnmounted(() => {
  clearInterval(interval)
  clearInterval(cursorInterval)
})
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center pt-14"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">

      <!-- ─── TERMINAL HERO ─────────────────────────────────────────────── -->
      <div v-if="store.isTerminal" class="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        <div class="flex-1 min-w-0">
          <!-- Available badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--accent-green)] rounded text-xs font-mono text-[var(--accent-green)] mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
            available for new opportunities
          </div>

          <!-- Terminal window -->
          <div class="terminal-window mb-8">
            <div class="terminal-titlebar">
              <div class="terminal-dot bg-[#ff5f56]" />
              <div class="terminal-dot bg-[#ffbd2e]" />
              <div class="terminal-dot bg-[#27c93f]" />
              <span class="ml-2 text-xs text-[var(--text-muted)] font-mono">adeola@portfolio ~ zsh</span>
            </div>
            <div class="terminal-body">
              <div
                v-for="(line, i) in lines.slice(0, visibleLines)"
                :key="i"
                class="leading-7"
              >
                <span v-if="line.type === 'command'" class="text-[var(--accent-green)]">{{ line.text }}</span>
                <span v-else-if="line.type === 'bracket'" class="text-[var(--text-secondary)]">{{ line.text }}</span>
                <span v-else>
                  <span class="text-[var(--text-secondary)] pl-4">  </span>
                  <span class="text-[var(--accent)]">{{ line.key }}</span>
                  <span class="text-[var(--text-secondary)]">:</span>
                  <span class="text-[var(--text-muted)]">       </span>
                  <span
                    :class="[
                      line.key === 'available' ? 'text-[var(--accent-green)]' : 'text-orange-300',
                    ]"
                  >{{ line.val }}</span>
                  <span v-if="line.key !== 'available'" class="text-[var(--text-secondary)]">,</span>
                </span>
              </div>
              <!-- Cursor on last line -->
              <span
                v-if="visibleLines < lines.length"
                :class="['inline-block w-2 h-4 bg-[var(--accent)] align-middle', showCursor ? 'opacity-100' : 'opacity-0']"
              />
              <div v-if="visibleLines >= lines.length" class="mt-2">
                <span class="text-[var(--accent-green)]">$ </span>
                <span :class="['inline-block w-2 h-4 bg-[var(--accent)] align-middle', showCursor ? 'opacity-100' : 'opacity-0']" />
              </div>
            </div>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-3 mb-8">
            <a :href="personal.resumeUrl" target="_blank" rel="noopener noreferrer" class="terminal-btn">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
              $ cat resume.pdf
            </a>
            <a href="#contact" @click.prevent="$el.ownerDocument.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})" class="terminal-btn">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              $ ./contact.sh
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-4">
            <div v-for="stat in personal.stats" :key="stat.label" class="flex items-center gap-2">
              <span class="text-[var(--accent)] font-mono font-bold text-sm">{{ stat.value }}</span>
              <span class="text-[var(--text-muted)] font-mono text-xs">{{ stat.label }}</span>
              <span class="text-[var(--border-color)] font-mono">|</span>
            </div>
          </div>
        </div>

        <!-- Social links - vertical -->
        <div class="hidden lg:flex flex-col items-center gap-4">
          <div class="w-px h-16 bg-[var(--border-color)]" />
          <a
            v-for="social in personal.socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            :title="social.name"
          >
            <svg v-if="social.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <svg v-else-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <svg v-else-if="social.icon === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <div class="w-px h-16 bg-[var(--border-color)]" />
        </div>
      </div>

      <!-- ─── MINIMAL HERO ──────────────────────────────────────────────── -->
      <div v-else class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1">
          <!-- Available badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-semibold mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
            Available for new opportunities
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight mb-4"
              style="font-family: 'Space Grotesk', sans-serif;">
            Adeola<br />
            <span class="text-[var(--accent)]">Bada</span>
          </h1>

          <p class="text-xl font-semibold text-[var(--text-secondary)] mb-4"
             style="font-family: 'Space Grotesk', sans-serif;">
            Senior Backend Engineer
          </p>

          <p class="text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
            Building the backend infrastructure that powers products at scale — APIs, distributed systems, and the code behind the curtain.
          </p>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3 mb-10">
            <a :href="personal.resumeUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
              View Resume
            </a>
            <a href="#contact" @click.prevent="$el.ownerDocument.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})" class="btn-outline">
              Get in Touch
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-6 pt-6 border-t border-[var(--border-color)]">
            <div v-for="stat in personal.stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-[var(--text-primary)]"
                   style="font-family: 'Space Grotesk', sans-serif;">{{ stat.value }}</div>
              <div class="text-xs text-[var(--text-muted)] mt-0.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Photo -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative">
            <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-[var(--border-color)] shadow-xl">
              <img
                :src="personal.photo"
                alt="Adeola Bada"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Accent decoration -->
            <div class="absolute -bottom-3 -right-3 w-64 sm:w-80 h-64 sm:h-80 rounded-2xl border-2 border-[var(--accent)] opacity-30 -z-10" />
            <div class="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-[var(--accent-subtle)] -z-10" />

            <!-- Social icons bottom -->
            <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full px-4 py-2 shadow-lg">
              <a
                v-for="social in personal.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <svg v-if="social.icon === 'github'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <svg v-else-if="social.icon === 'linkedin'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg v-else-if="social.icon === 'twitter'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
