<template>
    <section class="market market__two section__space over__hi">
        <div class="container">
            <div class="market__area">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6 col-xl-5 d-none d-lg-block">

                        <div class="market__thumb thumb__rtl column__space">
                            <img :src="imageSrc" :alt="imageAlt" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-6 offset-xl-1">
                        <div class="content">
                            <h5 class="neutral-top" v-html="subtitle"></h5>
                            <h2>{{ title }}</h2>
                            <p v-html="description"></p>

                            <div class="btn-group">
                                <router-link :to="ctaLink" class="button button--effect">
                                    {{ ctaText }}
                                </router-link>
                                <div class="arrow">
                                    <img src="@/assets/images/ekna/arrow.svg" alt="Play Store" />
                                </div>
                                <div>
                                    <Store2Component />
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

import { useI18n } from 'vue-i18n'
const { t } = useI18n()


import Store2Component from '@/components/Store2Component.vue';
defineProps({
    title: {
        type: String,
        default: 'Optimisez la gestion de vos colocataires',
    },
    subtitle: {
        type: String,
        default: "N'attendez plus",
    },
    description: {
        type: String,
        default: 'Trouvez rapidement des colocataires fiables et compatibles grâce à notre technologie de matching et de scoring.',
    },
    ctaText: {
        type: String,
        default: 'Télécharger l’app',
    },
    ctaLink: {
        type: String,
        default: '/Home',
    },
    imageSrc: {
        type: String,
        default: new URL('@/assets/images/affiliate-illustration.png', import.meta.url).href,
    },
    imageAlt: {
        type: String,
        default: 'Affiliate Program',
    },
});
</script>

<style scoped>
.btn-group {
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    margin: 32px 0;
}

.button {
    margin-top: 0 !important;
}

.section__space {
    padding: 0px 0px !important;
}

h2 {
    font-size: 52px;
}

.market__thumb img {
    max-width: 44vw;
    height: auto;
    margin-top: -7px;
    clip-path: inset(0 0 225px 0);
    margin-bottom: -225px;
}

.arrow {
    width: 120px;
    height: 53px;
}
</style>