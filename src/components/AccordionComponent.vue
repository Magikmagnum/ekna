<template>
  <section class="faq section__space">
    <div class="container">
      <div class="faq__area">
        <div class="section__header">
          <h2 class="neutral-top">{{ title }}</h2>
        </div>
        <div class="faq__group">
          <div class="accordion" id="accordionExampleFund">
            <div
              v-for="(faq, index) in items"
              :key="index"
              class="accordion-item content__space"
            >
              <h5 class="accordion-header" :id="`headingFund${index}`">
                <span class="icon_box">
                  <img :src="faq.icon" :alt="faq.alt" />
                </span>
                <button
                  class="accordion-button"
                  :class="{ collapsed: activeIndex !== index }"
                  type="button"
                  @click="toggle(index)"
                  :aria-expanded="activeIndex === index"
                  :aria-controls="`collapseFund${index}`"
                >
                  {{ faq.question }}
                </button>
              </h5>
              <div
                :id="`collapseFund${index}`"
                class="accordion-collapse collapse"
                :class="{ show: activeIndex === index }"
                :aria-labelledby="`headingFund${index}`"
                data-bs-parent="#accordionExampleFund"
              >
                <div class="accordion-body">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  icon: string
  alt: string
  question: string
  answer: string
}

const props = defineProps<{
  items: FaqItem[]
  title?: string
}>()

const activeIndex = ref(0)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? -1 : index
}
</script>