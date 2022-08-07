<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';
import { ref } from 'vue';
import ToolsModal from '../components/utils/ToolsModal.vue';
import NameRouter from '../components/utils/NameRouter.vue';

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

            <!-- <div class="grid text-center text-lg sm:text-xl lg:text-3xl space-y-6 leading-relaxed animate__animated  transition-all duration-300"
                :class="{ 'animate__fadeInRight animate__delay-1s': usePreferencesStore().getPreloaderState == true }">
                <ToolsModal v-for="(tool, index) in data" :key="index" :title="tool.name" :data="tool.icons" />
            </div> -->
        </div>
    </div>
</template>
<style scoped>
</style>