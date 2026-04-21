<script setup lang="ts">
import { usePreferencesStore } from '~/stores/preferences'
import type { Theme } from '~/stores/preferences'

const store = usePreferencesStore()

function choose(theme: Theme) {
  store.setTheme(theme)
  if (theme === 'minimal') store.setDarkMode(false)
  store.markPromptSeen()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="prompt">
      <div
        v-if="!store.promptSeen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <div class="bg-[#0d1117] border border-[#30363d] rounded-xl max-w-lg w-full p-8 shadow-2xl">
          <!-- Terminal titlebar -->
          <div class="flex items-center gap-2 mb-6">
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div class="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span class="ml-2 text-xs text-[#8b949e] font-mono">portfolio — select-theme</span>
          </div>

          <p class="font-mono text-[#8b949e] text-xs mb-2">$ ./configure --theme</p>
          <h2 class="font-mono text-[#e6edf3] text-lg font-bold mb-1">Choose your experience</h2>
          <p class="text-[#8b949e] text-sm font-mono mb-8">
            You can switch anytime using the toggle in the header.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Terminal option -->
            <button
              @click="choose('terminal')"
              class="group flex flex-col gap-3 p-5 border border-[#30363d] rounded-lg text-left hover:border-[#58a6ff] hover:bg-[#58a6ff]/5 transition-all"
            >
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#58a6ff]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
                </svg>
                <span class="font-mono font-bold text-[#e6edf3] text-sm">Terminal</span>
              </div>
              <div class="bg-[#161b22] rounded p-3 font-mono text-xs">
                <span class="text-[#3fb950]">const</span>
                <span class="text-[#e6edf3]"> engineer </span>
                <span class="text-[#58a6ff]">=</span>
                <span class="text-[#e6edf3]"> { ... }</span>
              </div>
              <p class="text-[#8b949e] text-xs font-mono">Dark, code-first aesthetic with monospace typography.</p>
            </button>

            <!-- Minimal option -->
            <button
              @click="choose('minimal')"
              class="group flex flex-col gap-3 p-5 border border-[#30363d] rounded-lg text-left hover:border-[#3b82f6] hover:bg-[#3b82f6]/5 transition-all"
            >
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
                <span class="font-bold text-[#e6edf3] text-sm" style="font-family: 'Space Grotesk', sans-serif;">Minimal Pro</span>
              </div>
              <div class="bg-[#161b22] rounded p-3">
                <div class="h-2 w-24 bg-[#e2e8f0]/20 rounded mb-2" />
                <div class="h-1.5 w-full bg-[#e2e8f0]/10 rounded mb-1" />
                <div class="h-1.5 w-3/4 bg-[#e2e8f0]/10 rounded" />
              </div>
              <p class="text-[#8b949e] text-xs font-mono">Clean, professional layout with light &amp; dark mode.</p>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.prompt-enter-active,
.prompt-leave-active {
  transition: opacity 0.3s ease;
}
.prompt-enter-from,
.prompt-leave-to {
  opacity: 0;
}
</style>
