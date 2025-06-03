<template>
    <section class="profit section__space">
        <div class="container">
            <div class="profit__area wow fadeInUp">
                <div class="section__header">
                    <h5 class="neutral-top">Built to help smart investors invest smarter</h5>
                    <h2>
                        We handle the heavy lifting so you
                        can sit back, relax, and profit.
                    </h2>
                    <p class="neutral-bottom">
                        We make institutional quality real estate accessible to investors, in a
                        simple and transparent way.
                    </p>
                </div>

                <div v-for="(row, rowIndex) in items" :key="rowIndex" class="profit__item__wrapper">
                    <div class="row">
                        <div v-for="(item, index) in row" :key="index" class="col-md-6">
                            <div :class="['profit__single__item', item.alt ? 'alt' : '', 'shadow__effect']">
                                <div class="img__box">
                                    <img :src="item.image" :alt="item.title" />
                                </div>
                                <div class="item__content">
                                    <h4>{{ item.title }}</h4>
                                    <p>{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>


const income = new URL('@/assets/images/overview/passive-income.png', import.meta.url).href
const secure = new URL('@/assets/images/overview/secure.png', import.meta.url).href
const transparency = new URL('@/assets/images/overview/transparency.png', import.meta.url).href
const support = new URL('@/assets/images/overview/support.png', import.meta.url).href


const items = [
    [
        {
            image: income,
            title: 'Passive Income',
            description: 'Earn rental income and receive deposits quarterly',
            alt: true,
        },
        {
            image: secure,
            title: 'Secure & Cost-efficient',
            description:
                'Digital security is legally compliant and tangible for qualified investors',
            alt: false,
        },
    ],
    [
        {
            image: transparency,
            title: 'Transparency',
            description: 'Easily consult the full documentation for each property.',
            alt: true,
        },
        {
            image: support,
            title: 'Support',
            description: 'Earn rental income and receive deposits quarterly',
            alt: false,
        },
    ],
]
</script>