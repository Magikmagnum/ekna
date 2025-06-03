<template>
    <section class="hero pos__rel over__hi bg__img" :style="{ backgroundImage: `url('${backgroundImagePath}')` }">
        <div class="container">
            <div class="hero__area">
                <div class="row">
                    <div class="col-lg-6 col-xxl-5">
                        <div class="hero__content">
                            <h5 class="neutral-top">{{ subtitle }}</h5>
                            <h1 v-html="title"></h1>
                            <p class="primary neutral-bottom">{{ description }}</p>
                            <div class="hero__cta__group">
                                <a :href="primaryCta.link" class="button button--effect">
                                    {{ primaryCta.label }}
                                </a>
                                <a :href="secondaryCta.link" class="button button--secondary button--effect">
                                    {{ secondaryCta.label }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-6 offset-xxl-1">
                        <div class="hero__illustration d-none d-lg-block">
                            <img :src="illustrationPath" alt="Hero Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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
    subtitle: {
        type: String,
        default: 'A smarter, better way to invest'
    },
    title: {
        type: String,
        default: 'Real Estate Investment For <span>Everyone</span>'
    },
    description: {
        type: String,
        default: 'Buy shares of rental properties, earn monthly income, and watch your money grow'
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
    },
    illustration: {
        type: String,
        default: '@/assets/images/hero/hero-illustration.png'
    }
})

const backgroundImagePath = resolveAssetPath(props.backgroundImage)
const illustrationPath = resolveAssetPath(props.illustration)
</script>