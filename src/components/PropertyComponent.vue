<template>
    <section class="numbers numbers__two section__space__bottom">
        <div class="container">
            <div class="numbers__area wow fadeInUp">
                <div class="row d-flex align-items-center">
                    <!-- Texte gauche -->
                    <div class="col-lg-6">
                        <div class="content column__space">
                            <h5 class="neutral-top">{{ headingSmall }}</h5>
                            <h2>{{ headingLarge }}</h2>
                            <p>{{ description }}</p>
                            <p>
                                <a :href="learnMoreLink">{{ learnMoreLabel }}</a>
                            </p>
                            <a :href="ctaLink" class="button button--effect">{{ ctaLabel }}</a>
                        </div>
                    </div>

                    <!-- Blocs info droite -->
                    <div class="col-lg-6">
                        <div class="row d-flex align-items-start align-items-lg-center">
                            <div class="col-sm-6">
                                <div v-for="(item, index) in leftItems" :key="'left-' + index"
                                    class="numbers__single shadow__effect">
                                    <img :src="item.icon" :alt="item.alt" />
                                    <h5>{{ item.title }}</h5>
                                    <p class="neutral-bottom">{{ item.description }}</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div v-for="(item, index) in rightItems" :key="'right-' + index"
                                    class="numbers__single alt shadow__effect">
                                    <img :src="item.icon" :alt="item.alt" />
                                    <h5>{{ item.title }}</h5>
                                    <p class="neutral-bottom">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface InfoItem {
    icon: string
    alt: string
    title: string
    description: string
}

const props = defineProps<{
    headingSmall: string
    headingLarge: string
    description: string
    learnMoreLink: string
    learnMoreLabel: string
    ctaLink: string
    ctaLabel: string
    leftItems: InfoItem[]
    rightItems: InfoItem[]
}>()
</script>

<style scoped>
.numbers__single {
    margin-bottom: 30px;
    text-align: center;
}
</style>