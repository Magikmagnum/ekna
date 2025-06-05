<template>
    <section class="start section__space__top bg__img" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="container">
            <div class="start__area wow fadeInUp">
                <div class="section__header">
                    <h5 class="neutral-top">Comment ça fonctionne ?</h5>
                    <h2>Louez ou trouvez votre colocataire en 3 étapes simple.</h2>
                    <!-- <p class="neutral-bottom">
                        Signing up with Revest is simple and only takes a few minutes. We can
                        automatically connect with more than 3,500 banks, so no complicated paperwork is required to
                        fund your account.
                    </p> -->
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
    <!-- ==== video popup section start ==== -->
    <VideoComponent :videoIllustration="videoIllustration" :videoAlt="videoAlt" :videoLink="videoLink" />
    <!-- ==== #video popup section end ==== -->
</template>

<script setup>

import VideoComponent from './VideoComponent.vue'

const backgroundUrl = new URL('@/assets/images/step/start-bg.png', import.meta.url).href
const image1 = new URL('@/assets/images/step/browse.png', import.meta.url).href
const image2 = new URL('@/assets/images/step/invest.png', import.meta.url).href
const image3 = new URL('@/assets/images/step/earn.png', import.meta.url).href


// Define the properties for the video component
const videoIllustration = new URL('@/assets/images/video-illustration.png', import.meta.url).href
const videoAlt = 'Video Illustration'
const videoLink = 'https://www.youtube.com/watch?v=LCihLrSehCo'

const steps = [
    {
        number: "01",
        image: image1,
        title: 'Découvrez votre annonce ou recherchez un bien',
        description:
            'Découvrez votre bien ou trouvez la colocation idéale en quelques clics.',
        hasArrow: false,
    },
    {
        number: "02",
        image: image2,
        title: 'Recevez des profils ou des offres compatibles',
        description:
            'Accedez au meuilleurs correspondances selon votre profil ou vos critères.',
        hasArrow: true,
    },
    {
        number: "03",
        image: image3,
        title: 'Finalisez et emménagez en toutes sérénité',
        description:
            'Gérez vos démarches en ligne, en toute sécurité.',
        hasArrow: false,
    },
]
</script>