<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { usePreferencesStore } from '~/stores/preferences'
import { personal } from '~/data/personal'

const store = usePreferencesStore()

const { public: { formspreeId } } = useRuntimeConfig()


const placeholders = {
  name: computed(() => store.isTerminal ? '"Your name"' : 'Your name'),
  email: computed(() => store.isTerminal ? '"your@email.com"' : 'your@email.com'),
  message: computed(() => store.isTerminal ? '"Tell me about your project..."' : 'Tell me about your project or opportunity...'),
}

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

async function submit() {
  if (!form.name || !form.email || !form.message) return
  status.value = 'sending'
  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    })
    status.value = res.ok ? 'success' : 'error'
    if (res.ok) {
      form.name = ''
      form.email = ''
      form.message = ''
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="py-20 md:py-28 bg-[var(--bg-secondary)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Contact" subtitle="Let's build something together" align="center" />

      <div class="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <!-- Info column -->
        <div class="space-y-6">
          <p :class="['text-[var(--text-secondary)] leading-relaxed', store.isTerminal ? 'font-mono text-sm' : 'text-base']">
            <template v-if="store.isTerminal">
              <span class="text-[var(--text-muted)]">/*</span><br />
              &nbsp;* Open to senior backend roles, contract work,<br />
              &nbsp;* and interesting system design conversations.<br />
              &nbsp;* Response time: usually within 24 hours.<br />
              <span class="text-[var(--text-muted)]"> */</span>
            </template>
            <template v-else>
              I'm open to senior backend roles, contract/consulting work, and interesting conversations about system design and engineering challenges. I usually respond within 24 hours.
            </template>
          </p>

          <div class="space-y-3">
            <a
              :href="`mailto:${personal.email}`"
              :class="['flex items-center gap-3 group', store.isTerminal ? 'font-mono text-sm' : 'text-sm']"
            >
              <span class="p-2 rounded-lg border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[var(--bg-card)]">
                <svg class="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span class="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">{{ personal.email }}</span>
            </a>

            <a
              v-for="social in personal.socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="['flex items-center gap-3 group', store.isTerminal ? 'font-mono text-sm' : 'text-sm']"
            >
              <span class="p-2 rounded-lg border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors bg-[var(--bg-card)]">
                <svg v-if="social.icon === 'github'" class="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <svg v-else-if="social.icon === 'linkedin'" class="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg v-else-if="social.icon === 'twitter'" class="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.846L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
              <span class="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="submit" class="space-y-4">
          <div v-if="status === 'success'"
               :class="['p-4 rounded-lg border text-sm', store.isTerminal ? 'font-mono border-[var(--accent-green)] text-[var(--accent-green)] bg-[var(--bg-card)]' : 'border-green-200 text-green-700 bg-green-50']">
            {{ store.isTerminal ? '// Message sent successfully. I\'ll respond soon.' : 'Message sent! I\'ll get back to you soon.' }}
          </div>
          <div v-if="status === 'error'"
               :class="['p-4 rounded-lg border text-sm', store.isTerminal ? 'font-mono border-red-500 text-red-400 bg-[var(--bg-card)]' : 'border-red-200 text-red-600 bg-red-50']">
            {{ store.isTerminal ? '// Error: failed to send. Try emailing directly.' : 'Something went wrong. Please email me directly.' }}
          </div>

          <div>
            <label :class="['block text-xs font-medium mb-1.5 text-[var(--text-secondary)]', store.isTerminal ? 'font-mono' : '']">
              {{ store.isTerminal ? 'name:string' : 'Name' }}
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              :placeholder="placeholders.name.value"
              :class="[
                'w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-colors',
                store.isTerminal ? 'font-mono border-[var(--border-color)] focus:border-[var(--accent)]' : 'border-[var(--border-color)] focus:border-[var(--accent)]',
              ]"
            />
          </div>

          <div>
            <label :class="['block text-xs font-medium mb-1.5 text-[var(--text-secondary)]', store.isTerminal ? 'font-mono' : '']">
              {{ store.isTerminal ? 'email:string' : 'Email' }}
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              :placeholder="placeholders.email.value"
              :class="[
                'w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-colors',
                store.isTerminal ? 'font-mono border-[var(--border-color)] focus:border-[var(--accent)]' : 'border-[var(--border-color)] focus:border-[var(--accent)]',
              ]"
            />
          </div>

          <div>
            <label :class="['block text-xs font-medium mb-1.5 text-[var(--text-secondary)]', store.isTerminal ? 'font-mono' : '']">
              {{ store.isTerminal ? 'message:string' : 'Message' }}
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              :placeholder="placeholders.message.value"
              :class="[
                'w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none transition-colors resize-none',
                store.isTerminal ? 'font-mono border-[var(--border-color)] focus:border-[var(--accent)]' : 'border-[var(--border-color)] focus:border-[var(--accent)]',
              ]"
            />
          </div>

          <button
            type="submit"
            :disabled="status === 'sending'"
            :class="[
              'w-full py-2.5 text-sm font-semibold rounded-lg transition-all',
              store.isTerminal
                ? 'font-mono border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-subtle)] disabled:opacity-50'
                : 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] disabled:opacity-50',
            ]"
          >
            {{ status === 'sending'
              ? (store.isTerminal ? '// sending...' : 'Sending...')
              : (store.isTerminal ? '$ ./send_message.sh' : 'Send Message') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
