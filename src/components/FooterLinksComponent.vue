<template>
  <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2">
    <div class="footer__links">
      <h5>{{ title }}</h5>
      <ul>
        <li v-for="(link, index) in links" :key="index" :class="{ 'neutral-bottom': index === links.length - 1 }">
          <RouterLink :to="link.href">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: Array
});
</script>

<style scoped>
p, th, td, li, input, textarea, select, label, blockquote, span {
    color: #ffffff;
}
</style>