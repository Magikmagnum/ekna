<template>
    <section class="list__overview">
        <div class="container">
            <div class="list__overview__area">
                <div class="row">
                    <div v-for="(item, index) in items" :key="index" class="col-sm-6 col-lg-4">
                        <div class="list__overview__single shadow__effect">
                            <img :src="item.icon" :alt="item.alt" />
                            <h3>
                                <span class="counterFour">{{ item.count }}</span>{{ item.suffix || '' }}
                            </h3>
                            <p class="neutral-bottom">{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface StatItem {
    icon: string
    alt: string
    count: number
    suffix?: string
    title: string
}

const props = defineProps<{
    items: StatItem[]
}>()
</script>

<style scoped>
.list__overview__single {
    margin-bottom: 30px;
    text-align: center;
}

.list__overview__single img {
    margin-bottom: 15px;
}
</style>