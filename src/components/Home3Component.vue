<template>
    <section class="profit section__space">
        <div class="container">
            <div class="profit__area wow fadeInUp">
                <div class="section__header">
                    <h5 class="neutral-top">Gagnez du temps et maximisez vos chances</h5>
                    <h2>
                        Pourquoi choisir EKNA ?
                    </h2>
                    <!-- <p class="neutral-bottom">
                        We make institutional quality real estate accessible to investors, in a
                        simple and transparent way.
                    </p> -->
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


const income = new URL('@/assets/images/ekna/profilsfiables.svg', import.meta.url).href
const secure = new URL('@/assets/images/ekna/gaindetemps.svg', import.meta.url).href
const transparency = new URL('@/assets/images/ekna/moinsdeturnover.svg', import.meta.url).href
const support = new URL('@/assets/images/overview/support.png', import.meta.url).href


const items = [
    [
        {
            image: income,
            title: 'Des profils fiables et compatibles.',
            description: 'grâce à un algorithme de matching relationnel.',
            alt: true,
        },
        {
            image: secure,
            title: 'Gain de temps',
            description: 'dans la recherche comme dans la sélection.',
            alt: false,
        },
    ],
    [
        {
            image: transparency,
            title: 'Moins de turnover',
            description: 'plus de stabilité et de tranquillité.',
            alt: true,
        },
        {
            image: support,
            title: 'Communication directe',
            description: 'et fluide entre toutes les parties.',
            alt: false,
        },
    ],
]
</script>

<style scoped>
.profit__single__item{
    min-height: 228px;
}

.profit__single__item p{
    min-width: 434px;
}

</style>