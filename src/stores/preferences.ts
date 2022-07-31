import { defineStore } from 'pinia'
// Interfaces
const usePreferencesStore = defineStore({
    id: 'preferences',
    state: () => ({
        darkMode: false as Boolean,
        language: "en" as "en"|"ar"|"yor"| "nl",
        preloaderOff: false as Boolean
    }),
    getters: {
        getDarkMode: (state) => state.darkMode,
        getCurLang: (state) => state.language,
        getPreloaderState: (state) => state.preloaderOff,
    },
    actions: {
        setDarkMode(value: Boolean) {
          this.darkMode = value
        },
        setCurLang(value: "en"|"ar"|"yor"| "nl") {
          this.language = value;
          location.reload();
        },
        setPreloaderState(value: Boolean) {
          this.preloaderOff = value;
        },
    },
    persist: true, 
});

export {
    usePreferencesStore
}
