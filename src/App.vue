<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PreLoader from './components/PreLoader.vue'

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
  <!-- Loader -->
  <PreLoader v-if="!isLoaded" />
  <!-- Loader Ends -->
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
