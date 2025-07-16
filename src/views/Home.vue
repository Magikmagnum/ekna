<template>
    <div id="app">
        <HeaderComponent />
        <BannerHomeComponent 
            :primaryCta="{ label: t('Home.primaryCta'), link: '/explore' }"
            :secondaryCta="{ label: t('Home.secondaryCta'), link: '/annonces' }"
            backgroundImage="@/assets/images/hero/light-bg.png.png" 
            illustration="@/assets/images/ekna/homepage.png" 
        />
        <FilterComponent />
        <AnnonceComponent />
        <PropositionComponent />
        <Home3Component />
        <Home4Component />
        <Home5Component/>
        <TestimonialsComponent />
        <BannerSecondComponent 
            title="L'app EKNA t'accompagne partout."
            subtitle="Trouve une colocation ou ton futur <br/>colocataire en quelques clics"
            :imageSrc="backgroundImageBannerSecond" 
            :description="`<p style='margin-bottom: 24px;'>Grâce à notre algorithme de matching et notre scoring de dossier, finis les recherches interminables et les mauvaises surprises.</p>
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
// Importing the i18n instance for translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
import FilterComponent from '@/components/FilterComponent.vue';

// Background image for BannerSecondComponent
const backgroundImageBannerSecond = new URL('@/assets/images/ekna/App.png', import.meta.url).href

</script>
