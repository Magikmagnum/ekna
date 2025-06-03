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
      illustration="@/assets/images/hero/hero-illustration.png"
    />
    <AnnonceComponent />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerHomeComponent from '@/components/BannerHomeComponent.vue'
import AnnonceComponent from '@/components/AnnonceComponent.vue';
</script>



