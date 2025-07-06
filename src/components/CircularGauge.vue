<template>
    <div class="gauge-container">
        <svg viewBox="0 0 200 200" class="gauge">
            <!-- Cercle de fond -->
            <circle class="track outer" cx="100" cy="100" r="85" stroke-width="20" />
            <circle class="track inner" cx="100" cy="100" r="65" stroke-width="20" />

            <!-- Cercle d'avancement extérieur -->
            <circle class="progress outer" :stroke-dasharray="outerCircumference" :stroke-dashoffset="outerOffset"
                cx="100" cy="100" r="85" stroke-width="20" transform="rotate(90 100 100)" />
            <!-- Cercle d'avancement intérieur -->
            <circle class="progress inner" :stroke-dasharray="innerCircumference" :stroke-dashoffset="innerOffset"
                cx="100" cy="100" r="65" stroke-width="20" transform="rotate(90 100 100)" />

            <!-- Texte au centre -->
            <text x="100" y="110" text-anchor="middle" font-size="24" fill="#333" font-weight="bold">
                {{ percentage }}%
            </text>

            <!-- Dégradés -->
            <defs>
                <!-- Dégradé extérieur : violet clair → violet foncé -->
                <linearGradient id="outerGradient" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(90 100 100)">
                    <stop offset="0%" stop-color="#9a9aff" />
                    <stop offset="100%" stop-color="#6f00ff" />
                </linearGradient>

                <!-- Dégradé intérieur : jaune → rouge -->
                <linearGradient id="innerGradient" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(90 100 100)">
                    <stop offset="0%" stop-color="#ffcd4b" />
                    <stop offset="100%" stop-color="#ff6b6b" />
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    percentage: {
        type: Number,
        required: true
    }, // 0 à 100
    outerPercentage: {
        type: Number,
        required: true,
        validator: val => val >= 0 && val <= 100
    },
    innerPercentage: {
        type: Number,
        required: true,
        validator: val => val >= 0 && val <= 100
    }
})


const outerRadius = 85
const innerRadius = 65

const outerCircumference = 2 * Math.PI * outerRadius
const innerCircumference = 2 * Math.PI * innerRadius

const outerOffset = computed(() =>
    outerCircumference * (1 - props.outerPercentage / 100)
)
const innerOffset = computed(() =>
    innerCircumference * (1 - props.innerPercentage / 100)
)
</script>

<style scoped>
.gauge-container {
    width: 70px;
    height: 70px;
    position: absolute;
    bottom: 0px;
    right: 0;
    margin: 20px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
}

.gauge {
    /* transform: rotate(90deg); */
}


.track {
    fill: none;
    stroke: #eee;
}

.progress {
    fill: none;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease;
}

.outer.progress {
    stroke: url(#outerGradient);
}

.inner.progress {
    stroke: url(#innerGradient);
}
</style>
