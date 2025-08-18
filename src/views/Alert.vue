<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent :backgroundImage="backgroundImage" />
    <div class="container alert__content">
      <div class="alert__image">
        <h5 class="neutral-top neutral-tap">
          <div>L'app EKNA est dispo !</div>
          <div>Télécharge-la sur l'App Store ou le</div>
          <div>Play Store pour commencer.</div>
        </h5>
        <img src="@/assets/images/eknastore.svg" alt="Alert Image" />
        <div class="container-btn">
          <img src="@/assets/images/appstore.svg" alt="Alert Image" class="store-btn" />
          <img src="@/assets/images/googleplay.svg" alt="Alert Image" class="store-btn" />
        </div>
      </div>
      <AlertFormComponent />
    </div>
    <FooterComponent />
  </div>
</template>



<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import AlertFormComponent from '@/components/AlertFormComponent.vue'

const backgroundImage = new URL('@/assets/images/banner/banner-bg.png', import.meta.url).href
// const title = "Alerte colocation"

</script>

<style>
/* styles globaux éventuels */
.alert__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.alert__image {
  flex: 1;
  padding-right: 1rem;
}

.alert__form {
  flex: 2;
}

h5.neutral-tap {
  padding: 64px 0;
}

.store-btn {
  /* width: 150px; */
  margin-top: 24px;
}

.container-btn {
  margin-top: 48px;
}



/* RESPONSIVE */
@media (max-width: 1024px) {
  .alert__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .alert__image {
    padding-right: 0;
  }

  .alert__form {
    width: 100%;
  }

  h5.neutral-tap {
    padding: 24px 0;
    font-size: 1rem;
  }

  .alert__newsletter {
    position: relative;
  }

  h5.neutral-top {
    text-align: center;
  }

  .text-center {
    margin-bottom: 84px;
  }
}

@media (max-width: 480px) {
  .store-btn {
    width: 120px;
  }

  h5.neutral-tap {
    font-size: 0.9rem;
  }
}
</style>
