<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferences';
import SocialList from '../components/utils/SocialList.vue';
import NameRouter from '../components/utils/NameRouter.vue';
import { ref } from 'vue';
import FormValidation from '../components/utils/FormValidation.vue';

// Data
const formData = ref<{ name: string, email: string, message: string }>({
    name: '',
    email: '',
    message: ''
});
const errors = ref<{ name: string, value: string }>({
    name: '',
    value: ''
});

/**
 * Updates error
 * @param {string} name - field name
 * @param {string} error - error
 * @return {void}
 */
const updateError = (name: string, error: string): void => {
    errors.value = {
        name: name,
        value: error
    };

    return;
};

/**
 * Sends email
 * @return {void}
 */
const sendMail = (): void => {
    // Reset Errors
    updateError('', '');

    // Email regex
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (!formData.value.name) {
        updateError('name', 'Name is required !');
        return;
    } else if (!formData.value.email) {
        updateError('email', 'Email is required !');
        return;
    } else if (!regex.test(formData.value.email)) {
        updateError('email', 'A valid email address is required !');
        return;
    } else if (!formData.value.message) {
        updateError('message', 'Message is required !');
        return;
    } else {
        let formSubmit = document.getElementById('submit-contact-form');
        formSubmit?.click();
    }
};

</script>
<template>
    <div class="flex justify-center content overflow-auto">
        <div class="m-auto w-5/6 lg:w-4/6 space-y-8 sm:space-y-14 md:space-y-16">
            <NameRouter />

            <h1 class="text-center font-bold text-4xl sm:text-5xl lg:text-7xl animate__animated  transition-all duration-150 capitalize"
                :class="{ 'animate__zoomIn': usePreferencesStore().getPreloaderState == true }">{{
                        $t("menu.items.contact me")
                }}
            </h1>

            <!-- Form -->
            <form name="contact" id="contact-form" method="POST" data-netlify="true" class="w-full max-w-2xl mx-auto">

                <div class="mt-6">
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="w-full">
                            <label class="block mb-2 font-medium capitalize">{{ $t("contact_section.name") }}</label>
                            <input
                                class="block w-full px-4 py-2 border-2 border-black text-black bg-white dark:border-white dark:text-white dark:bg-black"
                                type="text" v-model="formData.name" name="name">
                            <FormValidation name="name" :errorBag="errors" />
                        </div>

                        <div class="w-full mt-4 md:mt-0">
                            <label class="block mb-2 font-medium capitalize">{{ $t("contact_section.email") }}</label>

                            <input name="email"
                                class="block w-full px-4 py-2 border-2 border-black text-black bg-white dark:border-white dark:text-white dark:bg-black"
                                type="email" v-model="formData.email">
                            <FormValidation name="email" :errorBag="errors" />
                        </div>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 font-medium capitalize">{{ $t("contact_section.message") }}</label>

                        <textarea name="message"
                            class="block w-full h-40 px-4 py-2 border-2 border-black text-black bg-white dark:border-white dark:text-white dark:bg-black"
                            v-model="formData.message"></textarea>
                        <FormValidation name="message" :errorBag="errors" />
                    </div>
                    <button type="submit" id="submit-contact-form" class="hidden"></button>
                    <div class="flex justify-center mt-6">
                        <button type="button" @click="sendMail()" class="relative inline-flex items-center my-auto justify-center overflow-hidden text-sm font-medium 
                        capitalize px-5 py-2.5 
                        border-2 btn-primary">Send
                            Message</button>
                    </div>
                </div>
            </form>
            <!-- Form Ends -->

            <div class="grid md:grid-cols-2 space-y-4 animate__animated  transition-all ease-in-out"
                :class="{ 'animate__fadeInUp animate__delay-2s': usePreferencesStore().getPreloaderState == true }">
                <div class="flex justify-center md:justify-start space-x-2">
                    <SocialList />
                </div>
                <div class="flex justify-center md:justify-end">
                    <a href="https://docs.google.com/document/d/1okaqsmiuCgyqf4zxqJ1wNJG4i71-njDJLHzOD_70N4E/edit?usp=sharing"
                        target="_blank" class="relative inline-flex items-center my-auto justify-center overflow-hidden text-sm font-medium 
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