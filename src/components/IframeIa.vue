<template>
  <section class="faq section__space">
    <div class="container">
      <div class="faq__area">
        <div class="section__header">
          <h2 class="neutral-top">{{ title }}</h2>
          <h5 class="neutral-top">Discute directement avec notre agent lA pour répondre à toutes tes interrogations</h5>
        </div>
        <div class="faq__group">
          <div class="accordion" id="accordionExampleFund">
            <!-- je veux que Iframe Ia soit visible ici dans l'arborescence -->
            <div class="chatbot-wrapper">
              <iframe src="https://interfaces.zapier.com/embed/chatbot/clv504mv80005z3vscqw6dq0a" width="100%"
                height="500" style="border: none;" allow="clipboard-write *"></iframe>
            </div>
            <!-- <div
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
            </div> -->
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

<style scoped>

.faq .section__header h2 {
  /* font-size: clamp(1.5rem, 5vw, 2.5rem); */
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 10px;
}



.faq .section__header h5 {
  /* font-size: clamp(1.5rem, 5vw, 2.5rem); */
  max-width: 684px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 50px;
}

.chatbot-wrapper {
  margin-bottom: 2rem;
}
.chatbot-wrapper iframe {
  border-radius: 8px;
  min-height: 500px;
}


@media (max-width: 1024px) {
}

@media only screen and (max-width: 767px) {
    .faq .section__header h5 {
        font-size: 18px;
        line-height: 24px;
    }
}

@media only screen and (max-width: 1199px) {
    .faq .section__header h5 {
        font-size: 20px;
        line-height: 28px;
    }
}

</style>