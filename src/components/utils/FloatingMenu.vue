<template>
    <div class="grid justify-items-end space-y-8">
        <!-- Content -->
        <div v-if="showTray" class="transition-all ease-in-out p-4 border border-black dark:border-white dark:text-white
        bg-white dark:bg-black">

            <ul class="list-none capitalize mr-2 space-y-2">
                <li v-for="(item, index) in menuItems" :key="index" class="flex transition-all ease-in-out justify-end hover:border-b-2 md:hover:border-b-4 border-black dark:border-white
                " :class="{ 'animate__animated animate__slideInUp': showTray }">
                    <router-link :to="{ name: item.route }" class="font-semibold text-2xl capitalize">

                        {{ $t(`menu.items.${item.name}`) }} </router-link>
                </li>
            </ul>
            <ul class="list-none capitalize mr-2 space-y-4 mt-6">
                <li class="flex transition-all ease-in-out justify-end mt-4"
                    :class="{ 'animate__animated animate__slideInRight': showTray, 'animate__animated animate__slideInLeft': !showTray }">
                    <DarkModeToggle />
                </li>
                <li class="flex transition-all ease-in-out justify-end"
                    :class="{ 'animate__animated animate__slideInRight': showTray, 'animate__animated animate__slideInLeft': !showTray }">
                    <LangToggle />
                </li>
            </ul>
        </div>
        <!-- Content Ends -->

        <!-- Floating Btn -->
        <button @click="showTray = !showTray" class="relative rounded-full border border-black w-12 h-12 md:w-16 md:h-16 shadow-sm shadow-black dark:shadow-white animate-pulse
            bg-white text-black">
            <span class="flex justify-center"
                :class="{ 'animate__animated animate__bounceIn': showTray, 'animate__animated animate__bounceInRight': !showTray }">
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
    route: string;
};
// Data
const showTray = ref<Boolean>(false);
const menuItems = ref<MenuItem[]>([
    { name: 'home', route: 'home' },
    { name: 'projects', route: 'projects' },
    { name: 'tools', route: 'tools' },
    { name: 'about me', route: 'about' },
    { name: 'contact me', route: 'contact' },
]);

// Methods

</script>