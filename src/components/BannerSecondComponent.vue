<template>
  <section class="market market__two section__space over__hi">
    <div class="container">
      <div class="market__area">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 col-xl-5">
            <div class="market__thumb thumb__rtl column__space d-none d-lg-block">
              <img :src="imageSrc" :alt="imageAlt" />
            </div>
          </div>
          <div class="col-lg-6 col-xl-6 offset-xl-1">
            <div class="content">
              <h5 class="neutral-top">{{ subtitle }}</h5>
              <h2>{{ title }}</h2>
              <div v-html="description"></div>
              <router-link :to="ctaLink" class="button button--effect">
                {{ ctaText }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Affiliate Program',
  },
  subtitle: {
    type: String,
    default: 'Earn Money',
  },
  description: {
    type: String,
    default: 'Earn commission from every Revest new user you help to bring. Join our affiliate program, refer your audience, and earn revenue.',
  },
  ctaText: {
    type: String,
    default: 'Join As a Affiliate',
  },
  ctaLink: {
    type: String,
    default: '/Home',
  },
  imageSrc: {
    type: String,
    default: new URL('@/assets/images/affiliate-illustration.png', import.meta.url).href,
  },
  imageAlt: {
    type: String,
    default: 'Affiliate Program',
  },
});
</script>

<style scoped>
/* Tu peux ajouter ici des styles supplémentaires si nécessaire */

p, th, td, li, input, textarea, select, label, blockquote, span {
    margin-bottom: 36px;
}

</style>