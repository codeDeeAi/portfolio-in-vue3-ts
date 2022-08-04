<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { Switch } from '@headlessui/vue'
import { usePreferencesStore } from '@/stores/preferences'

const enabled = ref<Boolean>(false);

// Methods
const loadCurrentMode = () => {
    enabled.value = usePreferencesStore().getDarkMode
    if (usePreferencesStore().getDarkMode) return document.documentElement.classList.add('dark');
    return document.documentElement.classList.remove('dark');
}

// Watch
watch(enabled, () => {
    usePreferencesStore().setDarkMode(enabled.value);
    loadCurrentMode();
});

// Created
loadCurrentMode();
</script>

<template>
    <button type="button" @click="enabled = !enabled"
        class="text-gray-900 bg-white border border-black hover:bg-black hover:text-white font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:border-black dark:hover:bg-black dark:hover:border-white dark:hover:text-white">
        <span v-if="!enabled" class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </span>
        <span v-if="enabled" class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg></span>
    </button>
</template>


