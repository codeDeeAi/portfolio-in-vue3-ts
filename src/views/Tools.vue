<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';
import { ref } from 'vue';
import ToolsModal from '../components/utils/ToolsModal.vue';
import NameRouter from '../components/utils/NameRouter.vue';

// Data
const data = ref([
    {
        name: "Frontend", icons: [
            {
                link: "html5-svgrepo-com.svg",
                name: "HTML",
            },
            {
                link: "css3-svgrepo-com.svg",
                name: "CSS",
            },
            {
                link: "javascript-svgrepo-com.svg",
                name: "JavaScript",
            },
            {
                link: "typescript.svg",
                name: "TypeScript",
            },
            {
                link: "vue-9-logo-svgrepo-com.svg",
                name: "Vue Js",
            },
            {
                link: "nuxtjs-svgrepo-com.svg",
                name: "Nuxt Js",
            },
            {
                link: "bootstrap-fill-svgrepo-com.svg",
                name: "Bootstrap",
            },
            {
                link: "tailwind-svgrepo-com.svg",
                name: "Tailwind CSS",
            },
        ]
    },
    {
        name: "Backend", icons: [
            {
                link: "php-svgrepo-com.svg",
                name: "Php",
            },
            {
                link: "laravel-svgrepo-com (1).svg",
                name: "Laravel",
            },
            {
                link: "node-js.svg",
                name: "Node Js",
            },
            {
                link: "expressjs.svg",
                name: "Express Js",
            },
            {
                link: "sql-svgrepo-com.svg",
                name: "Sql",
            },
            {
                link: "mongodb.svg",
                name: "Mongo DB",
            },
        ]
    },
    {
        name: "Version Control", icons: [
            {
                link: "git-svgrepo-com.svg",
                name: "Git",
            },
            {
                link: "github-svgrepo-com.svg",
                name: "Github",
            },
            {
                link: "bitbucket-svgrepo-com.svg",
                name: "Bitbucket",
            },
        ]
    },
    {
        name: "Project Management", icons: [
            {
                link: "jira-svgrepo-com.svg",
                name: "Jira",
            },
            {
                link: "slack.svg",
                name: "Slack",
            },
        ]
    },
    // {
    //     name: "IDE and Others", icons: [

    //         {
    //             link: "vscode-svgrepo-com.svg",
    //             name: "Vscode",
    //         },
    //     ]
    // }
]);

</script>
<template>
    <div class="flex justify-center content overflow-auto">
        <div class="m-auto w-5/6 lg:w-4/6 space-y-8 sm:space-y-14 md:space-y-16">
            <NameRouter />

            <h1 class="text-center font-bold text-4xl sm:text-5xl lg:text-7xl animate__animated  transition-all duration-150 capitalize"
                :class="{ 'animate__zoomIn': usePreferencesStore().getPreloaderState == true }">{{
                        $t("menu.items.tools")
                }}
            </h1>

            <div class="grid text-center text-lg sm:text-xl lg:text-3xl space-y-6 leading-relaxed animate__animated  transition-all duration-300"
                :class="{ 'animate__fadeInRight animate__delay-1s': usePreferencesStore().getPreloaderState == true }">
                <ToolsModal v-for="(tool, index) in data" :key="index" :title="tool.name" :data="tool.icons" />
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>