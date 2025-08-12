<template>
    <div class="property__select__wrapper" ref="wrapperRef">
        <select v-model="internalValue" class="sort__select" style="display: none;">
            <option v-for="opt in options" :key="opt.value" :value="opt.value" :data-display="opt.label">
                {{ opt.label }}
            </option>
        </select>

        <div class="nice-select sort__select" :class="{ open: isOpen }" tabindex="0" @click="toggleDropdown">
            <span class="current">{{ currentLabel }}</span>
            <ul class="list" v-show="isOpen">
                <li v-for="opt in options" :key="opt.value"
                    :class="['option', { selected: opt.value === internalValue, focus: opt.value === internalValue }]"
                    @click.stop="selectOption(opt.value)">
                    {{ opt.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    modelValue: { type: String, default: '' },
    options: {
        type: Array,
        default: () => [
            { value: 'plus_recent', label: 'le plus récent' },
            { value: 'plus_ancien', label: 'le plus ancien' },
            { value: 'loyer_decroissant', label: 'loyer décroissant' },
            { value: 'loyer_croissant', label: 'loyer croissant' }
        ]
    }
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)
const isOpen = ref(false)
const wrapperRef = ref(null) // référence au conteneur

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (value) => {
    internalValue.value = value
    emit('update:modelValue', value)
    isOpen.value = false
}

const currentLabel = computed(() => {
    const opt = props.options.find((o) => o.value === internalValue.value)
    return opt ? opt.label : ''
})

// Synchronisation quand la valeur vient du parent
watch(
    () => props.modelValue,
    (newVal) => {
        internalValue.value = newVal
    }
)

// Gestion du clic en dehors
const onClickOutside = (event) => {
    if (wrapperRef.value && !wrapperRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
@media only screen and (max-width: 575px) {
    .property__filter {
        padding-top: 42px;
    }
}

.property__filter__area form button {
    width: auto;
}

.autocomplete-list {
    position: absolute;
    z-index: 10;
    background: white;
    border: 1px solid #ccc;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 2px;
    list-style: none;
    padding-left: 0;
    border-radius: 4px;
}

.autocomplete-item {
    padding: 8px 12px;
    cursor: pointer;
}

.autocomplete-item:hover {
    background-color: #eee;
}

.property__select__wrapper .nice-select {
    background-color: transparent;
    border: none;
    outline: none;
    height: auto !important;
    line-height: 70px !important;
    padding-left: 30px;
    padding-right: 20px;
    width: 100%;
    border: 1px solid #c3c7e4;
    height: 70px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>
