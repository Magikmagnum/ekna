<template>
    <div id="app">
        <HeaderComponent />
        <BannerComponent :title="title" :backgroundImage="backgroundImage" :bannerThumb="bannerThumb" />
        <ImageGalleryComponent title="Rejoins l'équipe EKNA. et construit l'avenir de la colocation"
            subtitle="Nous cherchons des talents passionnés pour transformer l’immobilier locatif."
            description="We wanna hear from you! Revest is a growing startup and we're always on the lookout for kindred spirits."
            :images="images" />
        <PositionsComponent :jobs="jobList" :tabs="tabs" :default="activeTab" />
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import PositionsComponent from '@/components/PositionsComponent.vue'
import ImageGalleryComponent from '@/components/ImageGalleryComponent.vue'

const backgroundImage = new URL('@/assets/images/banner/banner-bg.png', import.meta.url).href
const bannerThumb = new URL('@/assets/images/banner/career-banner-illustration.png', import.meta.url).href

const one = new URL('@/assets/images/one.png', import.meta.url).href
const two = new URL('@/assets/images/two.png', import.meta.url).href
const three = new URL('@/assets/images/three.png', import.meta.url).href

const salesIcon = new URL('@/assets/images/icons/sales.png', import.meta.url).href
const businessIcon = new URL('@/assets/images/icons/business.png', import.meta.url).href
const marketingIcon = new URL('@/assets/images/icons/marketing.png', import.meta.url).href
const developmentIcon = new URL('@/assets/images/icons/development.png', import.meta.url).href

const images = [one, two, three]
const title = "Emplois"
const tabs = ['all', 'sales', 'marketing', 'engineering', 'design']
const activeTab = 'all'

const jobList = [
    {
        title: 'Director of Sales',
        image: salesIcon,
        department: 'Sales',
        location: 'Remote',
        type: 'Full Time',
        tags: ['all', 'sales'],
        link: 'career-details.html',
    },
    {
        title: 'Business Development Representative',
        image: businessIcon,
        department: 'Business',
        location: 'Remote',
        type: 'Full Time',
        tags: ['all', 'engineering'],
        link: 'career-details.html',
    },
    {
        title: 'Product Marketing Lead',
        image: marketingIcon,
        department: 'Marketing',
        location: 'Remote',
        type: 'Full Time',
        tags: ['all', 'marketing'],
        link: 'career-details.html',
    },
    {
        title: 'Business Development Representative',
        image: developmentIcon,
        department: 'Business',
        location: 'Remote',
        type: 'Full Time',
        tags: ['all', 'design'],
        link: 'career-details.html',
    },
]
</script>

<style>
/* styles globaux éventuels */
</style>
