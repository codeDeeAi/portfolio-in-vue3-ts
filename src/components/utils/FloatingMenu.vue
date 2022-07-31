<template>
    <div class="grid justify-items-end space-y-8">
        <!-- Content -->
        <div v-if="showTray" class="transition-all ease-in-out">

            <ul class="list-none capitalize mr-2 space-y-2">
                <li v-for="(item, index) in menuItems" :key="index" class="flex transition-all ease-in-out justify-end hover:border-b-2 md:hover:border-b-4 border-sky-400
                hover:text-sky-400">
                    <a class="font-semibold text-2xl capitalize" href="javascript:void(0)" > 
                    
                    {{ $t(`menu.items.${item.name}`) }} </a>
                </li>
            </ul>
            <ul class="list-none capitalize mr-2 space-y-4 mt-6">
                <li class="flex transition-all ease-in-out justify-end mt-4">
                    <DarkModeToggle />
                </li>
                <li class="flex transition-all ease-in-out justify-end">
                    <LangToggle />
                </li>
            </ul>


            <!-- <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Green to blue
                </span>
            </button> -->
        </div>
        <!-- Content Ends -->

        <!-- Floating Btn -->
        <button @click="showTray = !showTray"
            class="relative rounded-full border w-12 h-12 md:w-16 md:h-16 shadow-sm shadow-green-800">
            <span class="flex justify-center">
                <svg v-if="!showTray" class="w-4/6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>

                <svg v-if="showTray" class="w-4/6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </span>
        </button>
        <!-- Floating Btn Ends -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DarkModeToggle from './DarkModeToggle.vue';
import LangToggle from './LangToggle.vue';

// Interfaces
interface MenuItem {
    name: string;
};
// Data
const showTray = ref<Boolean>(false);
const menuItems = ref<MenuItem[]>([
    { name: 'home' },
    { name: 'projects' },
    { name: 'tools' },
    { name: 'about me' },
]);

// Methods

</script>