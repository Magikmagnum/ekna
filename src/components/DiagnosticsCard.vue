<template>
    <div class="diagnostic-block">
        <p class="label">DIAGNOSTIC PERFORMANCE ÉNERGÉTIQUE (DPE)</p>
        <div class="bar">
            <div v-for="(step, index) in dpeScale" :key="'dpe-' + index"
                :class="['bar-step', step.color, { active: dpeLetter === step.letter }]">
                <span v-if="dpeLetter === step.letter">{{ step.letter }}</span>
            </div>
            <button class="details-button button--effect button">Voir le détail</button>
        </div>
    </div>

    <div class="diagnostic-block">
        <p class="label">INDICE D’ÉMISSION DE GAZ (GES)</p>
        <div class="bar">
            <div v-for="(step, index) in gesScale" :key="'ges-' + index"
                :class="['bar-step', step.color, { active: gesLetter === step.letter }]">
                <span v-if="gesLetter === step.letter">{{ step.letter }}</span>
            </div>
            <button class="details-button button--effect button">Voir le détail</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    dpe: {
        type: Object,
        required: true,
    },
    ges: {
        type: Object,
        required: true,
    },
})

// Fonction utilitaire pour extraire la lettre active
function extractActiveLetter(diag) {
    if (!diag) return ''
    const lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const active = lettres.find((key) => diag[key] === true)
    return active ? active.toUpperCase() : ''
}

const dpeLetter = computed(() => extractActiveLetter(props.dpe))
const gesLetter = computed(() => extractActiveLetter(props.ges))

const dpeScale = [
    { letter: 'A', color: 'green-a' },
    { letter: 'B', color: 'green-b' },
    { letter: 'C', color: 'green-c' },
    { letter: 'D', color: 'yellow' },
    { letter: 'E', color: 'orange-a' },
    { letter: 'F', color: 'orange-b' },
    { letter: 'G', color: 'red' },
]

const gesScale = [
    { letter: 'A', color: 'blue-a' },
    { letter: 'B', color: 'blue-b' },
    { letter: 'C', color: 'blue-c' },
    { letter: 'D', color: 'gray-a' },
    { letter: 'E', color: 'gray-b' },
    { letter: 'F', color: 'gray-c' },
    { letter: 'G', color: 'black' },
]
</script>

<style scoped>
.diagnostic-card {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    max-width: 100%;
    width: 100%;
}

.title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1e2a78;
    margin-bottom: 1rem;
}

.separator {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin-bottom: 1rem;
}

.label {
    font-size: 0.95rem;
    /* font-weight: 600; */
    margin-bottom: 0.5rem;
    color: #334155;
}

.bar {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.bar-step {
    height: 12px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 0.85rem;
    opacity: 0.6;
    transition: all 0.2s;
}

.bar-step.active {
    opacity: 1;
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #ccc;
}

/* Couleurs DPE */
.green-a {
    background-color: #2ecc71;
}

.green-b {
    background-color: #27ae60;
}

.green-c {
    background-color: #1abc9c;
}

.yellow {
    background-color: #f1c40f;
}

.orange-a {
    background-color: #e67e22;
}

.orange-b {
    background-color: #d35400;
}

.red {
    background-color: #e74c3c;
}

/* Couleurs GES */
.blue-a {
    background-color: #a0d8ef;
}

.blue-b {
    background-color: #74b9ff;
}

.blue-c {
    background-color: #3498db;
}

.gray-a {
    background-color: #7f8c8d;
}

.gray-b {
    background-color: #636e72;
}

.gray-c {
    background-color: #2d3436;
}

.black {
    background-color: #1c1c1c;
}

.details-button {
    margin-left: auto;
    background-color: #ffffff;
    color: #0d266d;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 24px 0px rgba(89, 39, 227, 0.25);
    transition: background-color 0.2s;
    white-space: nowrap;
}

.details-button:hover {
    background-color: #e0e3ff;
}

@media (max-width: 768px) {
    .bar {
        justify-content: flex-start;
    }

    .details-button {
        margin-top: 8px;
    }
}

.diagnostic-block {
    margin-bottom: 24px;
}
</style>