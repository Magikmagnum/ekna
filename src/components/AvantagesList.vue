<template>
    <ul class="singl__wrapper">
        <li class="singl" v-for="(item, index) in avantages" :key="index">
            <img :src="checkIcon" alt="Check" />
            <div>
                <p>{{ item }}</p>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue'

// Props
defineProps({
    avantages: {
        type: Array,
        required: true,
    },
})

// Image import (recommandé avec Vite pour assets locaux)
const checkIcon = new URL('@/assets/images/check.png', import.meta.url).href
</script>

<style scoped>
.singl__wrapper {
    margin: 22px 0px;
}

.singl {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 18px;
}

p {
    margin-bottom: 0px !important;
}
</style>