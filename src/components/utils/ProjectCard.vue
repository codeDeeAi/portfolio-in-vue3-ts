<script setup lang="ts">
import { ref } from "vue";
import ProjectModal from "./ProjectModal.vue";
// import projects from "@/data/projects"
// Data
const openModal = ref(false);

// Props
const props = defineProps({
    data: Object
})

// Methods
const truncateDescription = (words: string, length: number): string => {
    let suffix = '...';
    let output = words.length < length ? words : `${words.substring(0, words.substring(0, length - suffix.length).lastIndexOf(' '))}${suffix}`;
    return output;
};

const testString = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order";

</script>
<template>
    <div class="snap-center shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)] w-72 md:w-80">
        <img class="shrink-0  h-40 rounded-lg shadow-xl bg-white"
            :src="`/images/projects/${data?.image}`">
        <div class="my-3">
            <a href="#">
                <h5 class="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight capitalize">{{ data?.title }}</h5>
            </a>
            <p class="mb-3 font-normal">{{ truncateDescription($t(`projects_section.projects.${data?.id}`), 103) }}</p>
            <button type="button" @click="openModal = true"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center btn-primary border">
               {{  $t("projects_section.controls.read_more") }}
            </button>
        </div>
    </div>

    <ProjectModal :open="openModal" @close-modal="openModal = false" :data="data" />
</template>