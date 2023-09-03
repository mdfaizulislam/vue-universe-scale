<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits(['eventHdClick']);

let isHQ: boolean = true;
onMounted(() => {
    const hdToggle: any = document.querySelector('#hdToggle');

    hdToggle.onclick = (ev: Event) => {
        ev.preventDefault();

        console.log('clicking child HD');

        isHQ = !isHQ;

        if (!isHQ) {
            // highLoader.reset();
            // universe.clearHighQualityTextures();
            hdToggle.classList.remove('hd-click');
        } else {
            hdToggle.classList.add('hd-click');

            for (let i = 0; i <= 5; i++) {
                // highLoader.add(`main${i}`, `img/textures/new_items_${i}.json`);
            }
        }
        emit('eventHdClick');
        // universe.setQuality(isHQ);
    };
});
</script>

<template>
    <div class="hd" id="hdToggle">HD</div>
</template>

<style scoped>
.hd {
    margin: 38px auto;
    width: 35px;
    height: 25px;
    position: absolute;
    position: absolute;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    -webkit-text-stroke: 1px #333;
    /* text-stroke: 1.5px #333; */
    color: transparent;
    font-size: 20px;
    font-style: italic;
    /* letter-spacing: -10px; */
    background: linear-gradient(to bottom, transparent 0%, transparent 49%, #333 50%, #333 100%);
    background-size: 100% 205%;
    -webkit-background-clip: text;
    background-clip: text;
    transition: background 0.75s;
    cursor: pointer;
    /* right: 0px; */
    left: calc(100% - 45px);
    top: -30px;
    z-index: 5;
}

.hd-click {
    background-position: 100% 100%;
}

.hd-click:hover {
    background-position: 100% 75%;
}
</style>
