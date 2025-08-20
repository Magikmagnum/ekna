<template>
  <section class="hero hero--two hero--three hero__list clear__top pos__rel over__hi bg__img"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="container">
      <div class="hero__area">
        <div class="row">
          <h5 class="neutral-top">Trouve ta colocation avec EKNA</h5>
          <h1>
            {{ t('HeroListComponent.title1') }},
            <!-- <br />
            Online &amp; hassle-free -->
          </h1>
          <div class="col-lg-8">
            <div class="hero__content">
              <ul >
                <li class="primary neutral-bottom">Crée ton profil en quelques instants</li>
                <li class="primary neutral-bottom">Accède à des logements adaptés à ton mode de vie</li>
                <li class="primary neutral-bottom">Évite les mauvaises surprises et emménage sereinement</li>
              </ul>
              <div class="hero__cta__group">
                <a href="registration.html" class="button button--secondary button--effect">
                  M'inscrire gratuitement
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const backgroundImage = new URL('@/assets/images/hero/list-bg.png', import.meta.url).href
</script>

<style scoped>
.row h1 {
  font-size: 58px;
  color: #ffffff;
  max-width: 100%;
  margin-bottom: 0px;
}

.row h5 {
  color: #26dd77;
}

.neutral-bottom{
  color: #ffffff;
  /* font-size: 16px; */
  margin-bottom: 8px;
}
</style>