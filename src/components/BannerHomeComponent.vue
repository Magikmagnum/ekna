<!-- BannerHomeComponent -->
<template>
    <section class="hero pos__rel over__hi bg__img" :style="{ backgroundImage: `url('${backgroundImagePath}')` }">
        <div class="container">
            <div class="hero__area">
                <div class="row">
                    <div class="col-lg-6 col-xxl-5">
                        <div class="hero__content">
                            <h5 class="neutral-top">
                                {{ $t('BannerHomeComponent.subtitle.part1') }}<br>
                                {{ $t('BannerHomeComponent.subtitle.part2') }}
                            </h5>
                            <h1 v-html="$t('BannerHomeComponent.title')"></h1>
                            <p class="primary neutral-bottom">{{ $t('BannerHomeComponent.description') }}</p>
                            <div class="hero__cta__group">
                                <a :href="primaryCta.link" class="button button--effect">
                                    {{ $t('BannerHomeComponent.primaryCta') }}
                                </a>
                                <a :href="secondaryCta.link" class="button button--secondary button--effect">
                                    {{ $t('BannerHomeComponent.secondaryCta') }}
                                </a>
                            </div>
                            <StoreComponent/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-6 offset-xxl-1">
                        <div class="hero__illustration d-none d-lg-block">
                            <img src="@/assets/images/hero/hero-illustration.png" alt="Hero Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import StoreComponent from '@/components/StoreComponent.vue'

// Importing the i18n instance for translations
const { t } = useI18n()

const imageHome = new URL('@/assets/images/logo/app-store.png', import.meta.url).href
const playStore = new URL('@/assets/images/logo/play-store.png', import.meta.url).href

// Utilitaire pour résoudre les imports avec alias `@` à l'exécution
function resolveAssetPath(path) {
    if (path.startsWith('@/')) {
        return new URL(path.replace('@/', '/src/'), import.meta.url).href
    }
    return path
}

const props = defineProps({
    backgroundImage: {
        type: String,
        default: '@/assets/images/hero/light-bg.png'
    },
    illustration: {
        type: String,
        default: '@/assets/images/hero/hero-illustration.png'
    },
    primaryCta: {
        type: Object,
        default: () => ({
            label: 'Start Exploring',
            link: 'properties.html'
        })
    },
    secondaryCta: {
        type: Object,
        default: () => ({
            label: 'Get Funding',
            link: 'business-loan.html'
        })
    }
})

const backgroundImagePath = resolveAssetPath(props.backgroundImage)
const illustrationPath = resolveAssetPath(props.illustration)
</script>

<style scoped>
.hero {
    padding-top: 180px;
    padding-bottom: 120px;
}

@media (min-width: 1400px) {
    .col-xxl-5 {
        flex: 0 0 auto;
        width: 53%;
    }
}
</style>