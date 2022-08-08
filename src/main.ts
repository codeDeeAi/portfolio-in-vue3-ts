import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import VueSplide from '@splidejs/vue-splide';

import 'animate.css';
import './assets/main.css'
import './assets/tailwind.css'

import '@splidejs/vue-splide/css';
// import '@splidejs/vue-splide/css/skyblue';
// import '@splidejs/vue-splide/css/sea-green';
// import '@splidejs/vue-splide/css/core';

import 'flowbite';

import messages  from './lang/index';
import { usePreferencesStore } from './stores/preferences'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const i18n = createI18n({
    locale: usePreferencesStore().getCurLang, // set locale
    fallbackLocale: 'en', // set fallback locale
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    messages
});

app.use(i18n);

app.use( VueSplide );

app.mount('#app')
