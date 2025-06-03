<template>
    <section class="featured__properties section__space">
        <div class="container">
            <div class="featured__properties__area wow fadeInUp">
                <div class="title__with__cta">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-8">
                            <h2>Featured Properties</h2>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-start text-lg-end">
                                <a href="properties.html" class="button button--secondary button--effect">
                                    Browse All Properties
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-for="(property, index) in properties" :key="index" class="property__list__wrapper">
                    <CardHorizontalComponent :property="property" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import CardHorizontalComponent from './CardHorizontalComponent.vue'

const image1 = new URL('@/assets/images/property/los.png', import.meta.url).href
const image2 = new URL('@/assets/images/property/san.png', import.meta.url).href

const properties = [
    {
        title: 'Los Angeles',
        location: '8706 Herrick Ave, Los Angeles',
        image: image1,
        investors: 119,
        amount: '4,94,196',
        percent: '54.73%',
        goal: '1,00,000',
        return: '7.5% + 3%',
        term: '26 Months',
        type: 'Commercial',
        distribution: 'Monthly',
        security: '1st-Rank Mortgage',
    },
    {
        title: 'San Francisco, CA',
        location: '3335 21 St, San Francisco',
        image: image2,
        investors: 179,
        amount: '1,64,296',
        percent: '64.73%',
        goal: '5,00,000',
        return: '3.5% + 6%',
        term: '48 Months',
        type: 'Commercial',
        distribution: 'Monthly',
        security: '1st-Rank Mortgage',
    },
]
</script>