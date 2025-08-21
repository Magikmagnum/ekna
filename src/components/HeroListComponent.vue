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
/* .hero__area h1 {
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
  font-size: 16px;
  margin-bottom: 8px;
} */


/* ---------------------------- */

/* Style global du h1 */
h1 {
  font-size: clamp(2rem, 6vw, 4.75rem); /* responsive */
  font-weight: 700;
  color: #13216e;
  font-style: normal;
  text-align: left;
  margin: 0; /* reset */
}

/* Style spécifique au h1 dans la hero area */
.hero__area h1 {
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ffffff; /* si tu veux blanc dans la hero */
}

/* Titres secondaires */
.row h5 {
  color: #26dd77;
}

/* Classe utilitaire */
.neutral-bottom {
  color: #ffffff;
  margin-bottom: 8px;
}

/* Responsive : mobile */
@media only screen and (max-width: 767px) {
  h1 {
    font-size: 2.25rem;  /* environ 36px */
    line-height: 1.3;
  }
  .hero__area h1 {
    margin: 15px 0;
    font-size: 36px;
  }
}

/* Responsive : tablettes / petits laptops */
@media only screen and (max-width: 1199px) {
  h1 {
    font-size: 3.5rem; /* environ 56px */
    line-height: 1.2;
  }
}



</style>