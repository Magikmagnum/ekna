<template>
    <div class="video video__two section__space__top">
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
        required: true,
    },
    videoAlt: {
        type: String,
        default: 'Video preview',
    },
    videoLink: {
        type: String,
        required: true,
    },
});
</script>