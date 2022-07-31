<template>
    <div class="flex justify-end gap-2">
        <button v-for="(lang, index) in allowedLanguages" key="index" type="button"
            @click="usePreferencesStore().setCurLang(lang.short)"
            class="flex justify-center border 
            border-blue-600 hover:bg-blue-600 hover:text-white 
            font-medium rounded-lg text-sm p-1  dark:border-blue-500 
            dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" :class="{
                'text-white bg-blue-600': usePreferencesStore().getCurLang === lang.short,
                'text-sky-700': usePreferencesStore().getCurLang !== lang.short
            }">
            <span class="m-auto">{{ lang.short }}</span>
            <span class="sr-only">{{ `Select ${lang.name} language` }}}</span>
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { usePreferencesStore } from '@/stores/preferences'

// Interface
interface AllowedLanguage {
    name: string;
    short: string;
}
// Data
const allowedLanguages = ref<AllowedLanguage[]>([
    { name: 'English', short: 'en' },
    { name: 'Yoruba', short: 'yor' },
    { name: 'Arabic', short: 'ar' },
    { name: 'Dutch', short: 'nl' },
]);

</script>

<!-- // Initialize translator
var translator = new Translator({
    persist: false,
    languages: ['en', 'ar', 'yor'],
    defaultLanguage: 'en',
    detectLanguage: true,
    filesLocation: '/i18n',
});

translator.load(getCurrentLanguage()); // getCurrentLanguage() is gotten from lang.js

// Note: To translate html add  this -> data-i18n="" to html attribute -->