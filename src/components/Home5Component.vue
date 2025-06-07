<template>
    <section class="numbers section__space bg__img" :data-background="backgroundImage"
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="container">
            <div class="numbers__area wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6">
                        <div class="content column__space">
                            <h5 class="neutral-top">{{ subtitle }}</h5>
                            <h2>{{ title }}</h2>
                            <p>{{ description }}</p>
                            <a :href="buttonLink" class="button button--effect">{{ buttonText }}</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row d-flex align-items-start align-items-lg-center">
                            <div class="col-sm-6">
                                <div class="numbers__single shadow__effect">
                                    <img :src="stats[0].image" :alt="stats[0].alt" />
                                    <h3><span class="counter">{{ stats[0].value }}</span>{{ stats[0].unit || '' }}</h3>
                                    <p class="neutral-bottom">{{ stats[0].label }}</p>
                                </div>
                                <div class="numbers__single shadow__effect__secondary">
                                    <img :src="stats[1].image" :alt="stats[1].alt" />
                                    <h3><span class="counter">{{ stats[1].value }}</span>{{ stats[1].unit || '' }}</h3>
                                    <p class="neutral-bottom">{{ stats[1].label }}</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="numbers__single alt shadow__effect__secondary">
                                    <img :src="stats[2].image" :alt="stats[2].alt" />
                                    <h3 class="counter">{{ stats[2].value }}</h3>
                                    <p class="neutral-bottom">{{ stats[2].label }}</p>
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
defineProps({
    backgroundImage: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: 'Plus qu\'une plateforme, un véritable outil de sélection.',
    },
    title: {
        type: String,
        default: 'Pourquoi choisir EKNA pour votre colocation?',
    },
    description: {
        type: String,
        default: 'Optimisez l\'occupation de votre bien réduisez la vacance locative, augmentez votre rentabilité.',
    },
    buttonLink: {
        type: String,
        default: '#',
    },
    buttonText: {
        type: String,
        default: 'Parcourir les annonces',
    },
    stats: {
        type: Array,
        required: true,
        validator: arr =>
            arr.length === 3 &&
            arr.every(
                stat =>
                    typeof stat.image === 'string' &&
                    typeof stat.alt === 'string' &&
                    typeof stat.value === 'string' &&
                    typeof stat.label === 'string' &&
                    (stat.unit === undefined || typeof stat.unit === 'string'),
            ),
    },
});
</script>