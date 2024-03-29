<script setup lang="ts">
import { computed, ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

// Interface
type ToolInterface = { link: String, name: String }[];

// Props
const props = defineProps({
    open: Boolean,
    data: Object
});

</script>
<template>

    <!-- Main Modal -->
    <TransitionRoot v-if="open" as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="$emit('closeModal')">
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
                                            {{ data?.title }} </DialogTitle>
                                        <div class="mt-2 overflow-auto">
                                            <!-- Image -->
                                            <div class="h-60 !w-full">
                                                <img class="rounded-lg shadow-xl bg-white !h-60 !w-full"
                                                    :src="`/images/projects/${data?.image}`">
                                            </div>

                                            <!-- Description -->
                                            <article class="text-lg my-4">
                                                <p class="font-bold text-lg mb-3 capitalize"> {{ $t("projects_section.controls.description") }} :</p>
                                                {{ $t(`projects_section.projects.${data?.id}`) }}
                                            </article>

                                            <!-- Tags -->
                                            <div>
                                                <p class="font-bold text-lg mb-3 capitalize">{{ $t("projects_section.controls.tags") }} :</p>
                                                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    <span v-for="(lang, index) in data?.languages" :key="index"
                                                        class="btn-primary border border-black dark:border-white px-4 py-2 text-center">{{
                                                                lang
                                                        }}</span>
                                                </div>
                                            </div>

                                            <!-- Links -->
                                            <div class="mt-3">
                                                <p class="font-bold text-lg mb-3 capitalize">{{ $t("projects_section.controls.links") }} :</p>
                                                <div class="grid md:grid-cols-2 gap-3">
                                                    <a v-if="data?.web" :href="data?.web" target="_blank"
                                                        class="btn-primary border border-black dark:border-white px-4 py-2 text-center">Web</a>
                                                    <a v-if="data?.git" :href="data?.git" target="_blank"
                                                        class="btn-primary border border-black dark:border-white px-4 py-2 text-center">GitHub</a>
                                                    <button v-if="!data?.git && !data?.web" type="button" target="_blank"
                                                        class="btn-primary border border-black dark:border-white px-4 py-2 text-center capitalize">{{ $t("projects_section.controls.request_demo") }}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button"
                                    class="mt-3 w-full inline-flex justify-center btn-primary border shadow-sm px-4 py-2 text-base font-medium sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm capitalize"
                                    @click="$emit('closeModal')" ref="cancelButtonRef">{{ $t("projects_section.controls.cancel") }}</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <!-- Main Modal Ends -->
</template>




