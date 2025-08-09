<!-- components/CardVerticalComponent.vue -->
<template>
  <div class="col-lg-4 col-xl-4">
    <div class="property__grid__single">
      <div class="img__effect-wrapper">
        <div class="img__effect">
          <div class="avatar" :style="{ backgroundImage: `url(${proprietaire?.photo || ''})` }"></div>
          <RouterLink :to="detailsUrl">
            <img :src="imageUrl" :alt="title" />
          </RouterLink>
        </div>
        <div class="avatar-group">
          <AvatarGroup :avatars="users" />
        </div>
      </div>

      <div class="property__grid__single__inner">
        <h4>{{ title }}</h4>
        <p class="sub__info"><i class="fa-solid fa-location-dot"></i> {{ address }}</p>
        <p class="sub__info">{{ is_occupant }}</p>
        <p class="sub__info">
          {{ Number(chambres) + 1 }} {{ $t('CardVerticalComponent.pieces') }} - {{ chambres }} {{
            $t('CardVerticalComponent.chambres') }} - {{ surface }}
        </p>
        <p class="sub__info price">{{ loyer_hors_charge }}</p>
        <div class="property-info">
          <div class="info-details">
            <div class="column">
              <span class="label">{{ $t('CardVerticalComponent.chambresDisponibles') }}</span>
              <span class="value date">{{ chambres_dispobibles }} {{ $t('CardVerticalComponent.chambres') }}</span>
            </div>

            <div class="separator"></div>

            <div class="column">
              <span class="label">{{ $t('CardVerticalComponent.typeHabitat') }}</span>
              <span class="value date">{{ type_logement }}</span>
            </div>
          </div>
        </div>


        <div class="invest__cta__wrapper">
          <div class="countdown__wrapper">
            <p class="secondary">
              <i class="fa-solid fa-clock"></i>
              {{ $t('CardHorizontalComponent.disponibilite') }}
            </p>
            <div class="countdown">
              <h5>{{ min_date }}</h5>
            </div>
          </div>
          <div class="invest__cta">
            <RouterLink :to="detailsUrl" class="button button--effect">
              {{ $t('CardVerticalComponent.EnSavoirPlus') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'  // Important d'importer RouterLink explicitement
import AvatarGroup from './AvatarGroup.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Countdown {
  days: string
  month: string
  years: string
}

interface Locataire {
  user?: {
    photo?: string
  }
}

interface PropertyCard {
  id: number;
  title: string;
  address: string;
  imageUrl: string;
  loyer_hors_charge: string;
  chambres: string;
  type_bail: string;
  detailsUrl: string;
  locataires?: Locataire[];
  proprietaire?: { photo?: string; };
  surface: string;
  type_logement: string;
  is_occupant: string;
  min_date: string;
  chambres_dispobibles: number;
}

const props = defineProps<PropertyCard>()
console.log('CardVerticalComponent props:', props)

const users = (props.locataires || [])
  .map(locataire => locataire.user?.photo)
  .filter(Boolean)
</script>


<style scoped>
.countdown h5 {
  text-transform: capitalize;
  font-weight: 700;
}

.property__grid__single .sub__info {}

.price {
  font-weight: 700;
  color: #13216f;
  font-size: 24px;
}

.img__effect-wrapper {
  position: relative;
}

.img__effect {
  margin-bottom: 40px;
}

.avatar {
  width: 50px;
  height: 50px;
  top: 12px;
  left: 24px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 2px solid white;
  margin-left: -12px;
  position: absolute;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  z-index: 4;
}

.property-info {
  font-family: 'Arial', sans-serif;
  color: #2e3192;
  background: white;
  border-radius: 8px;
  max-width: 600px;
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.separator {
  height: 1rem;
  width: 1px;
  background-color: #ccc;
  margin: 0 0.5rem;
}

.info-details {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
  padding-top: 1rem;
  gap: 1rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 14px;
  /* justify-content: center; */
  align-items: center;
}

.label {
  color: #2e3192;
  opacity: 0.8;
  line-height: 1.2;
}

.value {
  color: #2e3192;
}

.value.date {
  color: #645bff;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.vertical-separator {
  width: 1px;
  background-color: #ddd;
  height: 100%;
}

@media only screen and (max-width: 767px) {

  p,
  th,
  td,
  li,
  input,
  textarea,
  select,
  label,
  blockquote,
  span {
    font-size: 20px;
    line-height: 28px;
  }
}

@media only screen and (max-width: 1199px) {
  .property__grid__single .sub__info {
    margin-top: 5px;
    font-size: 20px;
    margin-bottom: 16px;
  }
}

.avatar-group {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -46px;

}
</style>