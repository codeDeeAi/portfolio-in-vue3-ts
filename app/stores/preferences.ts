import { defineStore } from 'pinia'

export type Theme = 'terminal' | 'minimal'

const STORAGE_KEY = 'portfolio-prefs'

function loadFromStorage(): { theme: Theme; darkMode: boolean; promptSeen: boolean } {
  if (import.meta.server) return { theme: 'terminal', darkMode: true, promptSeen: false }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { theme: 'terminal', darkMode: true, promptSeen: false }
}

export const usePreferencesStore = defineStore('preferences', {
  state: () => {
    const saved = loadFromStorage()
    return {
      theme: saved.theme as Theme,
      darkMode: saved.darkMode,
      promptSeen: saved.promptSeen,
    }
  },

  getters: {
    isTerminal: (state) => state.theme === 'terminal',
    isMinimal: (state) => state.theme === 'minimal',
    isDark: (state) => state.theme === 'terminal' || state.darkMode,
  },

  actions: {
    save() {
      if (import.meta.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          theme: this.theme,
          darkMode: this.darkMode,
          promptSeen: this.promptSeen,
        }))
      }
    },

    setTheme(theme: Theme) {
      this.theme = theme
      this.save()
      this.applyToDOM()
    },

    toggleTheme() {
      this.theme = this.theme === 'terminal' ? 'minimal' : 'terminal'
      this.save()
      this.applyToDOM()
    },

    toggleDarkMode() {
      if (this.theme === 'terminal') return
      this.darkMode = !this.darkMode
      this.save()
      this.applyToDOM()
    },

    setDarkMode(value: boolean) {
      this.darkMode = value
      this.save()
      this.applyToDOM()
    },

    markPromptSeen() {
      this.promptSeen = true
      this.save()
    },

    applyToDOM() {
      if (import.meta.client) {
        const root = document.documentElement
        root.classList.remove('theme-terminal', 'theme-minimal', 'dark')
        root.classList.add(`theme-${this.theme}`)
        if (this.theme === 'minimal' && this.darkMode) {
          root.classList.add('dark')
        }
      }
    },
  },
})
