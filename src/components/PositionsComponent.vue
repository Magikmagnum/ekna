<template>
    <section class="open__tab__position section__space__bottom">
        <div class="container">
            <h2 class="neutral-top">Open Positions</h2>
            <div class="d-flex justify-content-center">
                <div class="open__tab">
                    <a v-for="tab in tabs" :key="tab" href="javascript:void(0)"
                        class="button button--effect open__tab__btn" :class="{ active: activeTab === tab }"
                        @click="activeTab = tab">
                        {{ capitalize(tab) }}
                    </a>
                </div>
            </div>
            <div class="open__position__tab__wrapper">
                <div v-for="(job, index) in filteredJobs" :key="index" class="job__single open__job__single">
                    <div class="open__job__inner">
                        <img :src="job.image" :alt="job.title" />
                        <div class="open__job__info">
                            <h5><a :href="job.link">{{ job.title }}</a></h5>
                            <ul>
                                <li>{{ job.department }}</li>
                                <li>{{ job.location }}</li>
                                <li>{{ job.type }}</li>
                            </ul>
                        </div>
                    </div>
                    <a :href="job.link" class="arrw">
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    jobs: {
        type: Array,
        required: true
    },
    tabs: {
        type: Array,
        required: true
    },
    default: {
        type: String,
        default: 'all'
    }
})

const activeTab = ref(props.default)

watch(() => props.default, (newVal) => {
    activeTab.value = newVal
})

const filteredJobs = computed(() =>
    activeTab.value === 'all'
        ? props.jobs
        : props.jobs.filter((job) => job.tags.includes(activeTab.value))
)

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<style scoped>
.open__tab__btn.active {
    background-color: #333;
    color: #fff;
}
</style>