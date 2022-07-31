import { defineStore } from 'pinia'
// Interfaces
const usePreferencesStore = defineStore({
    id: 'preferences',
    state: () => ({
        darkMode: false as Boolean,
        language: "en" as "en"|"ar"|"yor"| "nl",
    }),
    getters: {
        getDarkMode: (state) => state.darkMode,
        getCurLang: (state) => state.language,
    },
    actions: {
        setDarkMode(value: Boolean) {
          this.darkMode = value
        },
        setCurLang(value: "en"|"ar"|"yor"| "nl") {
          this.language = value;
          location.reload();
        },
    },
    persist: true, 
});

export {
    usePreferencesStore
}
