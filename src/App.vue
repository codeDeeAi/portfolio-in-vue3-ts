<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import PreLoader from './components/PreLoader.vue'
import FloatingMenu from './components/utils/FloatingMenu.vue'
import Main from './components/pages/Main.vue'
import { usePreferencesStore } from './stores/preferences'

// Data
const isLoaded = ref<Boolean>(false);

// Watcher
watch(isLoaded, (value) => {
  usePreferencesStore().setPreloaderState(value);
})

// ## Methods
/**
 * Toggles page loader off
 * @returns {void}
 */
const toggleLoader = (): void => {
  window.onload = function () {
    return isLoaded.value = true;
  };
}

// ## On created
usePreferencesStore().setPreloaderState(false);
toggleLoader();
</script>

<template>
  <section class="h-screen w-screen overflow-hidden relative">
    <!-- Loader -->
    <PreLoader v-if="!isLoaded" />
    <!-- Loader Ends -->
    <div class="h-full scroll-smooth">
      <Main />
      <!-- <RouterView class="h-full scroll-smooth container mx-auto px-4" /> -->
    </div>
    <FloatingMenu class="absolute bottom-4 right-3 md:right-4 lg:right-5 z-40" />
  </section>
</template>

<style>
#app {
  font-family: 'Comfortaa', 'Roboto', serif;
}

::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  /* background: #FF0000; */
}
</style>
