<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';

</script>
<template>
    <header class="h-screen bg-white flex justify-center">
        <div class="m-auto w-5/6 lg:w-4/6 space-y-14 md:space-y-16">
            <h3 class="font-semibold animate__animated  transition-all duration-75"
                :class="{ 'animate__fadeInLeft': usePreferencesStore().getPreloaderState == true }"> <span
                    class="border-2 p-3">Adeola Bada</span> </h3>

            <h1 class="text-center font-bold text-5xl lg:text-7xl animate__animated  transition-all duration-150"
                :class="{ 'animate__zoomIn': usePreferencesStore().getPreloaderState == true }">Fullstack Web Developer
            </h1>

            <p class="text-center text-lg lg:text-xl leading-relaxed animate__animated  transition-all duration-300"
                :class="{ 'animate__fadeInRight animate__delay-1s': usePreferencesStore().getPreloaderState == true }">
                Building digital solutions with code.
                I am a { Fullstack Developer } whose interest lies in building efficient, fast and scalable modern web
                applications
            </p>
            <div class="flex sm:justify-items-center md:justify-between animate__animated  transition-all ease-in-out"
                :class="{ 'animate__fadeInUp animate__delay-2s': usePreferencesStore().getPreloaderState == true }">
                <div class="space-x-2">
                    <button
                        class="relative inline-flex justify-center overflow-hidden p-2 rounded-lg shadow-sm border-2">
                        <img src="/svg/github-svgrepo-com.svg" class="w-6 m-auto" alt="">
                    </button>
                    <button
                        class="relative inline-flex justify-center overflow-hidden p-2 rounded-lg shadow-sm border-2">
                        <img src="/svg/github-svgrepo-com.svg" class="w-6 m-auto" alt="">
                    </button>
                    <button
                        class="relative inline-flex justify-center overflow-hidden p-2 rounded-lg shadow-sm border-2">
                        <img src="/svg/github-svgrepo-com.svg" class="w-6 m-auto" alt="">
                    </button>
                </div>
                <div>
                    <button
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span
                            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Green to blue
                        </span>
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