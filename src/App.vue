<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PreLoader from './components/PreLoader.vue'
import FloatingMenu from './components/utils/FloatingMenu.vue'

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
    <RouterView class="h-full scroll-smooth container mx-auto px-4" />
    <FloatingMenu class="absolute bottom-4 right-3 z-40" />
  </section>
</template>

<style>
#app {
  font-family: 'Comfortaa', 'Roboto', serif;
}
</style>
