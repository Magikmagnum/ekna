<template>
  <section
    class="step__two section__space__top bg__img"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="container">
      <div class="step__two-area wow fadeInUp">
        <div class="section__header">
          <h5 class="neutral-top">{{ subtitle }}</h5>
          <h2>{{ title }}</h2>
        </div>
        <div class="row">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="col-sm-6 col-lg-4"
          >
            <div class="step__two__single shadow__effect">
              <img :src="step.image" :alt="step.alt" />
              <h4>{{ step.title }}</h4>
              <p class="neutral-bottom">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==== video popup section start ==== -->
    <div class="video video__two section__space__top">
      <div class="container">
        <div class="video__area">
          <img :src="videoIllustration" :alt="videoAlt" />
          <div class="video__btn">
            <a
              class="video__popup"
              :href="videoLink"
              target="_blank"
              title="YouTube video player"
            >
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ==== #video popup section end ==== -->
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Start to make money in 3 easy steps',
  },
  subtitle: {
    type: String,
    default: 'How the program Works',
  },
  backgroundImage: {
    type: String,
    default: new URL('@/assets/images/step-two-bg.png', import.meta.url).href,
  },
  videoIllustration: {
    type: String,
    default: new URL('@/assets/images/video-illustration.png', import.meta.url).href,
  },
  videoAlt: {
    type: String,
    default: 'Video Illustration',
  },
  videoLink: {
    type: String,
    default: 'https://www.youtube.com/watch?v=LCihLrSehCo',
  },
  steps: {
    type: Array,
    default: () => [
      {
        title: 'Join',
        description: 'It’s free to get started. Access marketing materials, tools, and more!',
        image: new URL('@/assets/images/icons/join.png', import.meta.url).href,
        alt: 'Join',
      },
      {
        title: 'Promote',
        description: 'Share with your target audience. There’s a match for every need',
        image: new URL('@/assets/images/icons/promote.png', import.meta.url).href,
        alt: 'Promote',
      },
      {
        title: 'Earn',
        description: 'Rake in the moment your traffic converts. Check our commission plans',
        image: new URL('@/assets/images/icons/earn.png', import.meta.url).href,
        alt: 'Earn',
      },
    ],
  },
});
</script>

<style scoped>
/* Ajoute tes styles ici si nécessaire */
</style>