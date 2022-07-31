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
    <div class="flex gap-2">
        <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg></span>
        <Switch v-model="enabled" :class="enabled ? 'bg-gray-500' : 'bg-gray-300'"
            class="relative inline-flex h-7 w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span class="sr-only">Toggle Dark Mode</span>
            <span aria-hidden="true" :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                class="pointer-events-none inline-block h-5 w-5 my-auto transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
        </Switch>
        <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg></span>
    </div>
</template>


