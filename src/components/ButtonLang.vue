<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const langSelector: any = document.querySelector('.lang');
    langSelector.onclick = (ev: Event) => {
        ev.preventDefault();
        console.log('Change Lang');
    };
});
</script>

<template>
    <a href="#"> <img src="@/assets/img/lang.png" class="lang" /> </a>
</template>

<style scoped>
.lang {
    width: 20px;
    height: 20px;
    position: absolute;
    left: calc(100% - 105px);
    top: 10px;
    z-index: 5;
    color: #333;
}
</style>
