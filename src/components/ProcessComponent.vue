<template>
  <section
    class="work__two section__space bg__img"
    :style="{ backgroundImage: `url('${backgroundImage}')` }"
  >
    <div class="container">
      <div class="work__two__area wow fadeInUp">
        <div class="section__header">
          <h5 class="neutral-top">Comment ça fonctionne?</h5>
          <h2>Trouve ta prochaine colocation en 3 étapes simples :</h2>
          <!-- <p class="neutral-bottom">
            Submit your property quickly and easily!
          </p> -->
        </div>
        <div class="row">
          <div
            v-for="step in steps"
            :key="step.id"
            class="col-md-6 col-lg-4"
          >
            <div class="work__two__single">
              <div class="ico">
                <h4>{{ step.id }}</h4>
              </div>
              <h4 class="title">{{ step.title }}</h4>
              <p class="neutral-bottom">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const backgroundImage = new URL('@//assets/images/gd-bg.png', import.meta.url).href

const props = defineProps({
    steps: {
    type: Array,
    default: () => []
  }
})

</script>

<style scoped>
.title {
    min-height: 126px;
}

/* .work__two .work__two__single .ico h4 {
    margin-bottom: -79px;
} */
</style>
