<template>
    <div class="video">
        <div class="container">
            <div class="video__area">
                <img :src="videoIllustration" :alt="videoAlt" />
                <div class="video__btn">
                    <a class="video__popup" :href="videoLink" target="_blank" title="YouTube video player">
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


defineProps({
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
});
</script>