<template>
  <div class="btn-stort-group">
    <a href="https://apps.apple.com/fr/app/ekna/id6463813650">
      <img :src="appStore" alt="App Store" class="btn-stort" />
    </a>
    <a href="https://play.google.com/store/apps/dev?id=8166916722238984205&hl=fr">
      <img :src="playStore" alt="Play Store" class="btn-stort" />
    </a>
  </div>
</template>

<script setup>
const appStore = new URL('@/assets/images/logo/app-store.png', import.meta.url).href
const playStore = new URL('@/assets/images/logo/play-store.png', import.meta.url).href
</script>

<style scoped>

.btn-stort-group {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;
    margin-top: 64px;
    flex-direction: column;
}

.btn-stort {
    width: 162px;
}
</style>