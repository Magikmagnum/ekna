<template>
    <div id="app">
        <HeaderComponent />
        <BannerHomeComponent
            subtitle="La plateforme intelligente pour trouver ou louer une colocation en toute simplicité"
            title="Les bons <span>locataires</span>, tout simplement"
            description="Accélérez vos démarches, sécurisez vos biens et connectez-vous à des locataires qualifiés."
            :primaryCta="{ label: 'Déposer une annonce', link: '/explore' }"
            :secondaryCta="{ label: 'Trouver une colocation', link: '/funding' }"
            backgroundImage="@/assets/images/hero/light-bg.png.png"
            illustration="@/assets/images/hero/hero-illustration.png" />
        <AnnonceComponent />
        <PropositionComponent />
        <Home3Component />
        <Home4Component />
        <Home5Component :stats="statsComponent5" buttonLink="/properties" :backgroundImage="backgroundImageComponent5" />

        <TestimonialsComponent />
        <BannerSecondComponent title="Vous louez. Ekna s'occupe du reste." subtitle="Optimisez votre mobilité"
            :imageSrc="backgroundImageBannerSecond" />
        <FooterComponent />
    </div>
</template>

<script setup>
// Importing components
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerHomeComponent from '@/components/BannerHomeComponent.vue'
import AnnonceComponent from '@/components/AnnonceComponent.vue';
import PropositionComponent from '@/components/PropositionComponent.vue';
import Home3Component from '@/components/Home3Component.vue';
import Home4Component from '@/components/Home4Component.vue';
import Home5Component from '@/components/Home5Component.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BannerSecondComponent from '@/components/BannerSecondComponent.vue';
import TestimonialsComponent from '@/components/TestimonialsComponent.vue';

// Background image for BannerSecondComponent
const backgroundImageBannerSecond = new URL('@/assets/images/market-illustration.png', import.meta.url).href


// Background image and stats for Home5Component
const backgroundImageComponent5 = new URL('@/assets/images/globe.png', import.meta.url).href
const statsComponent5 = [
  {
    image: new URL('@/assets/images/platforms.png', import.meta.url).href,
    alt: 'Platform',
    value: 2500,
    label: 'Investors Using Platform'
  },
  {
    image: new URL('@/assets/images/returns.png', import.meta.url).href,
    alt: 'Returns',
    value: 18,
    label: 'Returns upto'
  },
  {
    image: new URL('@/assets/images/experience.png', import.meta.url).href,
    alt: 'Experience',
    value: 10,
    label: 'Years Experience'
  }
];


</script>
