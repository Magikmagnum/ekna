<!-- components/GenericBanner.vue -->
<template>
  <section :class="bannerClasses" :style="backgroundStyle">
    <div class="container">
      <div :class="innerWrapperClass">
        <div :class="innerContentClass">
          <h1 class="neutral-top">{{ title }}</h1>
          <h5 class="neutral-top">{{ subtitle }}</h5>

          <!-- Breadcrumbs (optionnel, affiché seulement si variant === 'key') -->
          <nav v-if="variant === 'key' && Array.isArray(breadcrumbs) && breadcrumbs.length" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path || index" class="breadcrumb-item"
                :class="{ active: index !== 0 }" :aria-current="index !== 0 ? 'page' : null">
                <template v-if="index === 0">
                  <router-link :to="crumb.path">{{ crumb.label }}</router-link>
                </template>
                <template v-else>
                  {{ crumb.label }}
                </template>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <!-- Image thumb (optionnel) -->
    <img v-if="variant === 'key' && bannerThumb" :src="bannerThumb" alt="Banner" class="banner__thumb" />
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  backgroundImage: {
    type: String,
    default: ''
  },
  bannerThumb: {
    type: String,
    default: ''
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  },
  variant: {
    type: String,
    default: 'key', // 'support' ou 'key'
    validator: (val) => ['support', 'key'].includes(val)
  }
})

const resolvedBackground = computed(() =>
  props.backgroundImage.startsWith('http') || props.backgroundImage.startsWith('/')
    ? props.backgroundImage
    : new URL(props.backgroundImage, import.meta.url).href
)

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${resolvedBackground.value}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const bannerClasses = computed(() => {
  if (props.variant === 'key') {
    return 'banner key-banner banner--secondary clear__top bg__img'
  }
  return 'support__banner contact__banner bg__img clear__top'
})

const innerWrapperClass = computed(() =>
  props.variant === 'key' ? 'banner__area' : 'support__banner__area'
)

const innerContentClass = computed(() =>
  props.variant === 'key' ? '' : 'support__banner__inner'
)
</script>