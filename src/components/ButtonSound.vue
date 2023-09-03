<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';
import { useCounterStore } from './../stores/counter';

onMounted(() => {
    const muteToggle: any = document.querySelector('.speaker');
    muteToggle.onclick = (ev: Event) => {
        ev.preventDefault();
        useCounterStore().setAudio();
        muteToggle.classList.toggle('mute');
    };
});
</script>

<template>
    <div id="muteToggle">
        <a href="#" class="speaker">
            <span></span>
        </a>
    </div>
</template>

<style scoped>
.speaker {
    height: 30px;
    width: 30px;
    text-align: center;
    font-family: arial, sans-sarif;
    position: relative !important;
    overflow: hidden;
    display: inline-block;
}
.speaker span {
    display: block;
    width: 8px;
    height: 8px;
    background: #333;
    margin: 11px 0 0 2px;
}
.speaker span:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent #333 transparent transparent;
    border-width: 10px 14px 10px 15px;
    left: -13px;
    top: 5px;
}
.speaker span:before {
    transform: rotate(45deg);
    border-radius: 0 50px 0 0;
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-style: double;
    border-color: #333;
    border-width: 7px 7px 0 0;
    left: 18px;
    top: 9px;
    transition: all 0.2s ease-out;
}
.speaker:hover span:before {
    transform: scale(0.8) translate(-3px, 0) rotate(42deg);
}
.speaker.mute span:before {
    transform: scale(0.5) translate(-15px, 0) rotate(36deg);
    opacity: 0;
}
#muteToggle {
    width: 30px;
    height: 30px;
    position: absolute;
    left: calc(100% - 75px);
    top: 5px;
    /* z-index: 5; */
}
</style>
