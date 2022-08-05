<script setup lang="ts">
import { computed, ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

// Interface
type ToolInterface = { link: String, name: String }[];
// Data
const open = ref(false)

// Props
const props = defineProps({
    title: String,
    data: Array as () => ToolInterface
});

</script>
<template>
    <!-- Display Button -->
    <button type="button" @click="open = true" class="font-bold btn-primary py-4">{{ title }}</button>
    <!-- Display Button Ends -->

    <!-- Main Modal -->
    <TransitionRoot v-if="open" as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative text-left overflow-hidden shadow-xl transform transition-all sm:my-8 md:max-w-lg w-full
                            border-2 border-black dark:border-white
                            bg-white dark:bg-black
                            text-black dark:text-white
                            ">
                            <div class=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="">
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle as="h3" class="text-lg leading-6 font-medium ">
                                            {{ title }} </DialogTitle>
                                        <div class="mt-2 overflow-auto">
                                            <ul class="grid grid-cols-3">
                                                <li v-for="(tool, index) in data" :key="index" class="text-center group">
                                                        <div
                                                            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 cursor-pointer">
                                                            <img :src="`/svg/${tool.link}`" :alt="`${tool.name}`"
                                                                class="w-12 h-12 sm:w-12 sm:h-12 ">
                                                        </div>
                                                        <h6 class="mb-2 font-bold leading-5 capitalize">
                                                            {{ tool.name }}</h6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button"
                                    class="mt-3 w-full inline-flex justify-center btn-primary border shadow-sm px-4 py-2 text-base font-medium sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    @click="open = false" ref="cancelButtonRef">Cancel</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <!-- Main Modal Ends -->
</template>




