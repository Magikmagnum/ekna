<template>
  <section class="contact__overview">
    <div class="container">
      <div class="contact__overview__area">
        <div class="row">
          <div v-for="(item, index) in items" :key="index" class="col-md-6 col-xl-4">
            <div class="contact__overview__single column__space--secondary shadow__effect">
              <img :src="item.icon" :alt="item.alt" />
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
              <hr />
              <p class="neutral-bottom">
                <a :href="item.link">{{ item.linkLabel }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Type pour les items
interface ContactItem {
  icon: string
  alt: string
  title: string
  description: string
  link: string
  linkLabel: string
}

// Props obligatoires
const props = defineProps<{
  items: ContactItem[]
}>()

// Directement utilisable dans le template
const items = props.items
</script>

<style scoped>
/* styles globaux éventuels */

.contact__overview__single {
  margin-bottom: 30px;
}
</style>