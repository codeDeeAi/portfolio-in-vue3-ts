<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';
import SocialList from '../components/utils/SocialList.vue';
import NameRouter from '../components/utils/NameRouter.vue';

</script>
<template>
    <div class="flex justify-center content overflow-auto">
        <div class="m-auto w-5/6 lg:w-4/6 space-y-8 sm:space-y-14 md:space-y-16">
           <NameRouter />

            <h1 class="text-center font-bold text-4xl sm:text-5xl lg:text-7xl animate__animated  transition-all duration-150 capitalize"
                :class="{ 'animate__zoomIn': usePreferencesStore().getPreloaderState == true }">{{ $t("menu.items.about me") }}
            </h1>

            <p class="text-center text-base sm:text-lg lg:text-xl leading-relaxed animate__animated  transition-all duration-300"
                :class="{ 'animate__fadeInRight animate__delay-1s': usePreferencesStore().getPreloaderState == true }">
                {{ $t('about_me.desc') }}

            </p>
            <div class="grid md:grid-cols-2 space-y-4 animate__animated  transition-all ease-in-out"
                :class="{ 'animate__fadeInUp animate__delay-2s': usePreferencesStore().getPreloaderState == true }">
                <div class="flex justify-center md:justify-start space-x-2">
                    <SocialList />
                </div>
                <div class="flex justify-center md:justify-end">
                    <a href="https://docs.google.com/document/d/1okaqsmiuCgyqf4zxqJ1wNJG4i71-njDJLHzOD_70N4E/edit?usp=sharing" target="_blank" class="relative inline-flex items-center my-auto justify-center overflow-hidden text-sm font-medium 
                        capitalize px-5 py-2.5 
                        border-2 btn-primary">
                        {{ $t('hero_section.resume') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>