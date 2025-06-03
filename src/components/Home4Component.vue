<template>
    <section class="start section__space__top bg__img" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="container">
            <div class="start__area wow fadeInUp">
                <div class="section__header">
                    <h5 class="neutral-top">We're changing the way you invest.</h5>
                    <h2>It's Easy to Get Started.</h2>
                    <p class="neutral-bottom">
                        Signing up with Revest is simple and only takes a few minutes. We can
                        automatically connect with more than 3,500 banks, so no complicated paperwork is required to
                        fund your account.
                    </p>
                </div>

                <div class="row">
                    <div class="col-md-6 col-xl-4" v-for="(step, index) in steps" :key="index">
                        <div :class="[
                            'start__single__item',
                            index !== steps.length - 1 ? 'column__space--secondary' : ''
                        ]">
                            <div :class="['img__box', step.hasArrow ? 'arrow__container' : '']">
                                <img :src="step.image" :alt="step.title" />
                                <div class="step__count">
                                    <h4>{{ step.number }}</h4>
                                </div>
                            </div>
                            <h4>{{ step.title }}</h4>
                            <p class="neutral-bottom">{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>


const backgroundUrl = new URL('@/assets/images/step/start-bg.png', import.meta.url).href
const image1 = new URL('@/assets/images/step/browse.png', import.meta.url).href
const image2 = new URL('@/assets/images/step/invest.png', import.meta.url).href
const image3 = new URL('@/assets/images/step/earn.png', import.meta.url).href


const steps = [
    {
        number: "01",
        image: image1,
        title: 'Browse Properties',
        description:
            'Select a property that fits your goal from our huge variety of hand-picked properties.',
        hasArrow: false,
    },
    {
        number: "02",
        image: image2,
        title: 'View Details & Invest',
        description:
            'View detailed metrics for that property like Rental Yield, etc. and invest like institutions.',
        hasArrow: true,
    },
    {
        number: "03",
        image: image3,
        title: 'Earn and Track',
        description:
            'You have full visibility into the performance of your investment. Track your total current.',
        hasArrow: false,
    },
]
</script>