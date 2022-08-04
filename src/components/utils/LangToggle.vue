<template>
    <div class="flex justify-end gap-2">
        <button v-for="(lang, index) in allowedLanguages" key="index" type="button"
            @click="usePreferencesStore().setCurLang(lang.short)" class="flex justify-center border 
            border-black dark:border-white hover:bg-black hover:text-white 
            font-medium rounded-lg text-sm p-1  
             dark:hover:text-white dark:focus:ring-white" :class="{
                 'text-white bg-black dark:text-black dark:hover:text-black dark:bg-white dark:border-black': usePreferencesStore().getCurLang === lang.short,
                 'text-black dark:text-white dark:hover:bg-white dark:hover:text-black': usePreferencesStore().getCurLang !== lang.short
             }">
            <span class="m-auto">{{ lang.short }}</span>
            <span class="sr-only">{{ `Select ${lang.name} language` }}}</span>
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { usePreferencesStore } from '@/stores/preferences';
// Interface
interface AllowedLanguage {
    name: string;
    short: "en" | "ar" | "nl" | "yor";
}
// Data
const allowedLanguages = ref<AllowedLanguage[]>([
    { name: 'English', short: 'en' },
    { name: 'Yoruba', short: 'yor' },
    { name: 'Arabic', short: 'ar' },
    { name: 'Dutch', short: 'nl' },
]);

</script>