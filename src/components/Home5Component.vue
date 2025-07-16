<template>
    <section class="numbers section__space bg__img" :data-background="globeUrl"
        :style="{ backgroundImage: `url(${globeUrl})` }">

        <div class="container">
            <div class="numbers__area wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6">
                        <div class="content column__space">
                            <h5 class="neutral-top" v-html="t('Home5Component.soustitre')"></h5>
                            <h2>{{ t('Home5Component.titre') }}</h2>
                            <p>{{ t('Home5Component.paragraphe') }}</p>
                            <a href="/annonces" class="button button--effect">{{ t('Home5Component.bouton') }}</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row d-flex align-items-start align-items-lg-center">
                            <div class="col-sm-6">
                                <div class="numbers__single shadow__effect">
                                    <img :src="imageMatching" :alt="t('Home5Component.stats[0].alt')" />
                                    <h3>
                                        <span class="counter">{{ t('Home5Component.stats[0].value') }}</span>
                                    </h3>
                                    <p class="neutral-bottom" v-html="t('Home5Component.stats[0].label')"></p>
                                </div>
                                <div class="numbers__single shadow__effect__secondary">
                                    <img :src="imagePartenair" :alt="t('Home5Component.stats[1].alt')" />
                                    <h3>
                                        <span class="counter">{{ t('Home5Component.stats[1].value') }}</span>
                                    </h3>
                                    <p class="neutral-bottom" v-html="t('Home5Component.stats[1].label')"></p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="numbers__single alt shadow__effect__secondary">
                                    <img :src="imageAnnonce" :alt="t('Home5Component.stats[2].alt')" />
                                    <h3>
                                        <span class="counter">{{ t('Home5Component.stats[2].value') }}</span>
                                    </h3>
                                    <p class="neutral-bottom" v-html="t('Home5Component.stats[2].label')"></p>
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

const globeUrl = new URL('@/assets/images/globe.png', import.meta.url).href;
const imageMatching = new URL('@/assets/images/ekna/matching-modified.png', import.meta.url).href;
const imagePartenair = new URL('@/assets/images/ekna/partenair-modified.png', import.meta.url).href;
const imageAnnonce = new URL('@/assets/images/ekna/annonce-modified.png', import.meta.url).href;
</script>