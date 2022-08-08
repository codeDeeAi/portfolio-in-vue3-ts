<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';
import { ref } from 'vue';
import ToolsModal from '../components/utils/ToolsModal.vue';
import NameRouter from '../components/utils/NameRouter.vue';
import ProjectCard from '../components/utils/ProjectCard.vue';
// Data
const data = ref([
]);

</script>
<template>
    <div class="flex justify-center content overflow-auto">
        <div class="m-auto w-5/6 lg:w-4/6 space-y-8 sm:space-y-14 md:space-y-16">
            <NameRouter />

            <h1 class="text-center font-bold text-4xl sm:text-5xl lg:text-7xl animate__animated  transition-all duration-150 capitalize"
                :class="{ 'animate__zoomIn': usePreferencesStore().getPreloaderState == true }">{{
                        $t("menu.items.projects")
                }}
            </h1>

            <!-- Controls -->
            <!-- <div class="flex justify-end gap-3">
                <button type="button" class="btn-primary px-4 py-2 border-2 border-black dark:border-white capitalize">
                    {{ $t("projects_section.controls.next") }}
                </button>
                <button type="button" class="btn-primary px-4 py-2 border-2 border-black dark:border-white capitalize">
                    {{ $t("projects_section.controls.previous") }}
                </button>
            </div> -->

            <!-- Project Cards -->
            <div class="not-prose relative p-3 border border-black dark:border-white overflow-hidden">
            <p class="text-xs sm:text-sm md:text-base flex gap-2">
                <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {{ $t("projects_section.scroll_desc") }} </p>
                <div class=" "
                    style="background-position: 10px 10px;"></div>
                <div class="relative overflow-auto">
                    <div class="bg-stripes-pink w-6 absolute left-0 top-0 bottom-0 rounded-l-lg"></div>
                    <div class="w-full flex gap-8 snap-x scroll-pl-6 overflow-x-auto py-6">
                          <ProjectCard />
                          <ProjectCard />
                          <ProjectCard />
                        <div class="snap-start shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)]">
                           <!-- Control card -->
                        </div>
                    </div>
                </div>
                <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>