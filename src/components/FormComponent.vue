<!-- components/Ask.vue -->
<template>
  <section class="ask section__space bg__img" :style="backgroundStyle">
    <div class="container">
      <div class="ask__area">
        <div class="alert__newsletter__area">
          <div class="section__header">
            <h2 class="neutral-top">{{ title }}</h2>
          </div>
          <AideForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AideForm from '@/components/form/AideForm.vue'

// 🟡 Définit la prop 'title'
defineProps({
  title: {
    type: String,
    default: 'Form'
  }
})

const backgroundImage = new URL('@/assets/images/ask-bg.png', import.meta.url).href

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${backgroundImage}')`,
  backgroundSize: 'cover',
//   backgroundPosition: 'center'
}))
</script>