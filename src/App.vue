<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import PreLoader from './components/PreLoader.vue'
import FloatingMenu from './components/utils/FloatingMenu.vue'
import { usePreferencesStore } from './stores/preferences'

// Data
const isLoaded = ref<Boolean>(false);


  // Children Refs
  const floatingMenu = ref();

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
};
/**
 * Closes the menu popup
 * @returns {void}
 */
const closePopup = (): void => {
  floatingMenu.value.closePopup();
};

/**
 * 
 */
const loadCurrentMode = () => {
  let root = document.documentElement;
  if (usePreferencesStore().getDarkMode && !root.classList.contains('dark')) {
    root.classList.add('dark'); // Persist dark mode 
  }
  if (usePreferencesStore().getCurLang === 'ar') {
    root.dir = 'rtl';
  } else {
    root.dir = 'ltr';
  }
}

// ## On created
usePreferencesStore().setPreloaderState(false);
toggleLoader();
loadCurrentMode();
</script>

<template>
  <div
    class="h-screen w-screen overflow-hidden relative bg-white text-black flex justify-center content dark:bg-black dark:text-white">
    <!-- Loader -->
    <PreLoader v-if="!isLoaded" />
    <!-- Loader Ends -->
    <router-view v-slot="{ Component }" class="h-full w-full scroll-smooth mx-auto px-4" @click="closePopup()">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FloatingMenu ref="floatingMenu" class="absolute bottom-10 sm:bottom-6 md:bottom-4 right-9 sm:right-3 md:right-4 lg:right-5 z-40" />
  </div>
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
  background: #d1d5db;
  border-radius: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
