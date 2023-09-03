import { ref, computed, onUpdated } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const musicStatus = ref(true);
    let setAudio = () => {
        musicStatus.value = !musicStatus.value;
        console.log('Music: ' + musicStatus.value);
    };

    return { musicStatus, setAudio };
});
