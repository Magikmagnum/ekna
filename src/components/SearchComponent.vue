<template>
  <section class="support__banner bg__img clear__top" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="container">
      <div class="support__banner__area">
        <div class="support__banner__inner">
          <h1 class="neutral-top">{{ title }}</h1>

          <div class="input input--secondary">
            <input
              type="text"
              name="sear"
              id="sear_faq"
              placeholder="Search"
              v-model="searchTerm"
            />
          </div>

          <div class="faq__tab">
            <a
              v-for="(tab, index) in tabs"
              :key="index"
              :href="tab.href"
              class="faq__tab__btn"
              :class="{ faq__tab__btn__active: activeTab === tab.href }"
              @click.prevent="setActive(tab.href)"
            >
              {{ tab.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
  bgImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'How can we help?',
  },
  tabs: {
    type: Array,
    default: () => [],
  },
  defaultTab: {
    type: String,
    default: '',
  },
})

const searchTerm = ref('')
const activeTab = ref(props.defaultTab)

watch(() => props.defaultTab, (newVal) => {
  activeTab.value = newVal
})

function setActive(href) {
  activeTab.value = href
}
</script>

<style scoped>
</style>