<script lang="ts" setup>
import { usePreferencesStore } from '@/stores/preferences';
</script>
<template>
    <h3 class="font-semibold animate__animated  transition-all duration-75"
        :class="{ 'animate__fadeInLeft': usePreferencesStore().getPreloaderState == true }">
        <router-link :to="{ name: 'home' }" class="border-2 p-3 border-black dark:border-white">Adeola Bada
        </router-link>
    </h3>
</template>