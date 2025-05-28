<template>
  <section class="terms section__space">
    <div class="container">
      <div class="terms-area">
        <div
          v-for="(term, index) in terms"
          :key="index"
          class="terms__single"
        >
          <h3 class="neutral-top">{{ term.title }}</h3>
          <div v-for="(paragraph, pIndex) in term.paragraphs" :key="pIndex">
            <p>{{ paragraph }}</p>
          </div>
          <ul v-if="term.list?.length">
            <li v-for="(item, i) in term.list" :key="i">{{ item }}</li>
          </ul>
          <hr v-if="index < terms.length - 1" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  terms: {
    type: Array,
    required: true
  }
})
</script>