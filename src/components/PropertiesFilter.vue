<template>
    <div class="properties__filter__wrapper">
        <h6>
            Showing <span>{{ total }}</span> properties
        </h6>

        <div class="grid__wrapper">
            <select class="grid__select" style="display: none;" v-model="sortBy" @change="emitSort">
                <option disabled value="" class="current">Sort By</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
            </select>

            <!-- NICE SELECT SIMULÉ -->
            <div class="nice-select grid__select" :class="{ open: isOpen }" tabindex="0" @click="toggleSelect">
                <span class="current">{{ currentLabel }}</span>
                <ul class="list" v-show="isOpen">
                    <li v-for="option in sortOptions" :key="option.value" class="option"
                        :class="{ selected: sortBy === option.value }" @click.stop="selectOption(option)">
                        {{ option.label }}
                    </li>
                </ul>
            </div>

            <a href="javascript:void(0)" :class="['grid__btn', 'grid__view', { grid__btn__active: view === 'grid' }]"
                @click="changeView('grid')">
                <i class="fa-solid fa-grip"></i>
            </a>

            <a href="javascript:void(0)" :class="['grid__btn', 'grid__list', { grid__btn__active: view === 'list' }]"
                @click="changeView('list')">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
    total: { type: Number, default: 0 },
    modelValue: { type: String, default: 'grid' },
    defaultSort: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'sort'])

const view = ref(props.modelValue)
const sortBy = ref(props.defaultSort)
const isOpen = ref(false)

const sortOptions = [
    { value: '', label: 'Sort By' },
    { value: 'date', label: 'Date' },
    { value: 'price', label: 'Price' },
]

const toggleSelect = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    sortBy.value = option.value
    isOpen.value = false
    emitSort()
}

const emitSort = () => {
    emit('sort', sortBy.value)
}

const changeView = (val) => {
    view.value = val
    emit('update:modelValue', val)
}

const currentLabel = computed(() => {
    return sortOptions.find(opt => opt.value === sortBy.value)?.label || 'Sort By'
})
</script>

<style scoped>
</style>