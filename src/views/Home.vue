<template>
    <div id="app">
        <HeaderComponent />
        <BannerHomeComponent :primaryCta="{ label: 'Déposer une annonce', link: '/explore' }"
            :secondaryCta="{ label: 'Trouver une colocation', link: '/funding' }"
            backgroundImage="@/assets/images/hero/light-bg.png.png"
            illustration="@/assets/images/hero/hero-illustration.png" />
        <AnnonceComponent />
        <PropositionComponent />
        <Home3Component />
        <Home4Component />
        <Home5Component :stats="statsComponent5" buttonLink="/properties"
            :backgroundImage="backgroundImageComponent5" />

        <TestimonialsComponent />
        <BannerSecondComponent title="L'app EKNA t'accompagne partout."
            subtitle="Trouvez une colocation ou ton futur colocataire en quelques clics"
            :imageSrc="backgroundImageBannerSecond" :description="`<p style='margin-bottom: 24px;'>Grâce à notre algorithme de matching et notre scoring de dossier, finis les recherches interminables et les mauvaises surprises.</p>
            <ul style='list-style: disc;margin-left: 52px;'>
            <li>Navigue parmi des profils qualifiés.</li>
            <li>Échange directement avec les bons candidats ou propriétaires.</li>
            <li>Centralise ton dossier locatif.</li>
            <li>Reçois des alertes en temps réel.</li>
            </ul>`" />
        <FooterComponent />
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'
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



const logements = ref([])
const loading = ref(true)


// Background image for BannerSecondComponent
const backgroundImageBannerSecond = new URL('@/assets/images/market-illustration.png', import.meta.url).href


// Background image and stats for Home5Component
const backgroundImageComponent5 = new URL('@/assets/images/globe.png', import.meta.url).href
const statsComponent5 = [
    {
        image: new URL('@/assets/images/platforms.png', import.meta.url).href,
        alt: 'Platform',
        value: '73%',
        label: 'de matching réussi grâce à notre scoring de compatibilité',
    },
    {
        image: new URL('@/assets/images/returns.png', import.meta.url).href,
        alt: 'Returns',
        value: '+50',
        label: 'bailleurs partenaires nous font déjà confiance',
    },
    {
        image: new URL('@/assets/images/experience.png', import.meta.url).href,
        alt: 'Experience',
        value: '90%',
        label: 'des annonces trouvent un candidat qualifié en moins de 7 jours',
    }
];


</script>
