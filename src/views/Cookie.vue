<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent :title="title" :backgroundImage="backgroundImage" :bannerThumb="bannerThumb"
      :breadcrumbs="breadcrumbs" />
    <TermsComponent :terms="termsData" />
    <FooterComponent />
  </div>
</template>



<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import TermsComponent from '@/components/TermsComponent.vue'



const backgroundImage = new URL('@/assets/images/banner/banner-bg.png', import.meta.url).href
const bannerThumb = new URL('@/assets/images/banner/key-illustration.png', import.meta.url).href

const title = "Cookie Policy"

const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Pages', path: '/coucou' },
  { label: 'Affiliate Program', path: '/coucou/papa' }
]

const termsData = [
  {
    title: "We're always looking for new ways to provide privacy for our customers.",
    paragraphs: [
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat."
    ],
    list: [
      "Blandit dignissim nulla varius tristique a sed integer ut tempor.",
      "Augue interdum semper bibendum amet sed.",
      "Dis in at ultricies tortor sit tellus.",
      "Habitant ornare aenean maecenas pretium"
    ]
  },
  {
    title: "Your data is safe with us, we will not share any information with external sources.",
    paragraphs: [
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat."
    ],
    list: [
      "Blandit dignissim nulla varius tristique a sed integer ut tempor.",
      "Augue interdum semper bibendum amet sed.",
      "Dis in at ultricies tortor sit tellus.",
      "Habitant ornare aenean maecenas pretium"
    ]
  },
  {
    title: "We're always looking for new ways to provide privacy for our customers.",
    paragraphs: [
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa. Sed nam vulputate pellentesque quis. Varius a, nunc faucibus proin elementum id odio auctor. Nunc, suspendisse consequat libero, pharetra tellus vulputate auctor venenatis tortor non rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.",
      "Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit habitasse non ullamcorper enim, diam quam id et, tempus massa."
    ],
    list: [
      "Blandit dignissim nulla varius tristique a sed integer ut tempor.",
      "Augue interdum semper bibendum amet sed.",
      "Dis in at ultricies tortor sit tellus.",
      "Habitant ornare aenean maecenas pretium"
    ]
  }
]


</script>

<style>
/* styles globaux éventuels */
</style>
