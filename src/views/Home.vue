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
        <PropertyComponent headingSmall="Your success is our success." headingLarge="Why sell through Revest?"
      description="Revest enables real estate owners to sell their properties through its platform. Submit your property quickly and easily!"
      learnMoreLink="contact-us.html" learnMoreLabel="Let us know about your property" ctaLink="login.html"
      ctaLabel="Submit Your Property" :leftItems="leftItems" :rightItems="rightItems" />
        <TestimonialsComponent />
        <BannerSecondComponent title="Vous louez. Ekna s'occupe du reste." subtitle="Optimisez votre mobilité"
            :imageSrc="imageSrc" />
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerHomeComponent from '@/components/BannerHomeComponent.vue'
import AnnonceComponent from '@/components/AnnonceComponent.vue';
import PropositionComponent from '@/components/PropositionComponent.vue';
import Home3Component from '@/components/Home3Component.vue';
import Home4Component from '@/components/Home4Component.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BannerSecondComponent from '@/components/BannerSecondComponent.vue';
import TestimonialsComponent from '@/components/TestimonialsComponent.vue';
import PropertyComponent from '@/components/PropertyComponent.vue';

const imageSrc = new URL('@/assets/images/market-illustration.png', import.meta.url).href


const attractive = new URL('@/assets/images/icons/attractive.png', import.meta.url).href
const fast = new URL('@/assets/images/icons/fast.png', import.meta.url).href
const innovation = new URL('@/assets/images/icons/innovation.png', import.meta.url).href


const leftItems = [
  {
    icon: attractive,
    alt: 'Attractive',
    title: 'Attractive conditions',
    description: 'With us you sell your property without paying a brokerage commission.',
  },
  {
    icon: fast,
    alt: 'Fast',
    title: 'Fast processing',
    description: 'Receive an initial offer and a property assessment within 48 hours.',
  },
]

const rightItems = [
  {
    icon: innovation,
    alt: 'Innovation',
    title: 'Innovation',
    description: 'Sell your property online through an innovative business model.',
  },
]


</script>
