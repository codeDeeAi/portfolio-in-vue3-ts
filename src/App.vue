<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PreLoader from './components/PreLoader.vue'
import FloatingMenu from './components/utils/FloatingMenu.vue'
import Main from './components/pages/Main.vue'

// Data
const isLoaded = ref<Boolean>(false);

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
toggleLoader();
</script>

<template>
  <section class="h-screen w-screen overflow-hidden relative dark:bg-stone-500">
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
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
</style>
