<template>
  <section
    class="hero hero--two hero--three hero__list clear__top pos__rel over__hi bg__img"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="container">
      <div class="hero__area">
        <div class="row">
          <div class="col-lg-8">
            <div class="hero__content">
              <h5 class="neutral-top">List Your Property and sell instantly</h5>
              <h1>
                Sell your property,
                <br />
                Online &amp; hassle-free
              </h1>
              <p class="primary neutral-bottom">
                Receiving rent from a commercial property and now want to sell it instantly?
                List your property and convert the lakhs of annual rent you are receiving into Crores
                by selling to 5000+ real estate investors on Revest.
              </p>
              <div class="hero__cta__group">
                <a href="registration.html" class="button button--secondary button--effect">
                  List Your Property
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const backgroundImage = new URL('@/assets/images/hero/list-bg.png', import.meta.url).href
</script>

<style scoped>
/* Tu peux ajouter des styles personnalisés ici si nécessaire */
</style>