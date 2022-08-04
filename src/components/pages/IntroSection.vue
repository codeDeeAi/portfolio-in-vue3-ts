<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';

</script>
<template>
    <header class="h-screen bg-white text-black flex justify-center dark:bg-black dark:text-white">
        <div class="m-auto w-5/6 lg:w-4/6 space-y-14 md:space-y-16">
            <h3 class="font-semibold animate__animated  transition-all duration-75"
                :class="{ 'animate__fadeInLeft': usePreferencesStore().getPreloaderState == true }"> <span
                    class="border-2 p-3 border-black dark:border-white">Adeola Bada</span> </h3>

            <h1 class="text-center font-bold text-5xl lg:text-7xl animate__animated  transition-all duration-150"
                :class="{ 'animate__zoomIn': usePreferencesStore().getPreloaderState == true }">Fullstack Web Developer
            </h1>

            <p class="text-center text-lg lg:text-xl leading-relaxed animate__animated  transition-all duration-300"
                :class="{ 'animate__fadeInRight animate__delay-1s': usePreferencesStore().getPreloaderState == true }">
                {{ $t('hero_section.desc') }}
            </p>
            <div class="grid md:grid-cols-2 space-y-4 animate__animated  transition-all ease-in-out"
                :class="{ 'animate__fadeInUp animate__delay-2s': usePreferencesStore().getPreloaderState == true }">
                <div class="flex justify-center md:justify-start space-x-2">
                    <button class="relative inline-flex justify-center overflow-hidden p-2 rounded-lg shadow-sm border border-black dark:border-white
                        dark:bg-white my-auto">
                        <img src="/svg/github-svgrepo-com.svg" class="w-6 m-auto" alt="">
                    </button>
                    <button class="relative inline-flex justify-center overflow-hidden p-2 rounded-lg shadow-sm border border-black dark:border-white
                        dark:bg-white my-auto">
                        <img src="/svg/icons8-linkedin-2.gif" class="w-6 m-auto" alt="">
                    </button>
                    <button class="relative inline-flex justify-center overflow-hidden p-2 rounded-lg shadow-sm border border-black dark:border-white
                        dark:bg-white my-auto">
                        <img src="/svg/icons8-twitter.svg" class="w-6 m-auto" alt="">
                    </button>
                </div>
                <div class="flex justify-center md:justify-end">
                    <button class="relative inline-flex items-center my-auto justify-center overflow-hidden text-sm font-medium 
                        capitalize px-5 py-2.5 
                        border-2 btn-primary">
                        {{ $t('hero_section.resume') }}
                    </button>
                </div>
            </div>
        </div>
    </header>
    <header class="h-screen bg-gray-50">
        Building digital solutions with code.
        I am a { Fullstack Developer } whose interest lies in building efficient, fast and scalable modern web
        applications
    </header>
</template>
<style scoped>
</style>