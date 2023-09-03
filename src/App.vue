<script setup lang="ts">
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    ref
} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ButtonSound from './components/ButtonSound.vue';
import ButtonLang from './components/ButtonLang.vue';
import { useCounterStore } from './stores/counter';
import ButtonHd from './components/ButtonHd.vue';

let showPlayButton = ref(true);

onBeforeMount(() => {
    const userLocale =
        navigator.languages && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language;

    console.log(userLocale); // 👉️ "en-US"

    // 👇️ ["en-US", 'en-GB, "en", "de"]
    console.log(navigator.languages);
});

onMounted(() => {});

onBeforeUpdate(() => {});

onUpdated(() => {});

onBeforeUnmount(() => {});

onUnmounted(() => {});

let hdClick = () => {
    console.log('parent hd clicked');
};

function onPlayClick() {
    console.log('play clicked');
    showPlayButton.value = false;
}
</script>

<template>
    <header>
        <div class="wrapper">
            <div id="buttons">
                <button-lang></button-lang>
                <button-sound></button-sound>
                <button-hd @eventHdClick="hdClick"></button-hd>
                <button @click="onPlayClick" v-if="showPlayButton">Play</button>
            </div>
        </div>

        <div class="startWindow" style="startWindow"></div>
    </header>
    <body></body>
</template>

<style scoped>
.startWindow {
    width: 50%;
    height: 50%;
    background-color: cadetblue;
    position: relative;
    z-index: 10;
}
</style>
