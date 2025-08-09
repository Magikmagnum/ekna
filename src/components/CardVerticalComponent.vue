<!-- components/CardVerticalComponent.vue -->
<template>
    <div class="col-lg-4 col-xl-4">
        <div class="property__grid__single">
            <div class="img__effect">
                <a :href="detailsUrl">
                    <img :src="imageUrl" :alt="title">
                </a>
            </div>
            <div class="property__grid__single__inner">
                <h4>{{ title }}</h4>
                <p class="sub__info"><i class="fa-solid fa-location-dot"></i> {{ address }}</p>

                <div class="progress__type">
                    <p class="project__has">
                        <span class="project__has__investors">{{ loyer_hors_charge }} € CC</span>
                    </p>
                </div>

                <div class="item__info">
                     {{ Number(chambres) + 1 }} pièces - {{ chambres }} chambres - {{ surface }}
                </div>

                <div class="invest__cta__wrapper">
                    <div class="countdown__wrapper">
                        <p class="secondary"><i class="fa-solid fa-clock"></i> Disponibilité</p>
                        <div class="countdown">
                            <h5>{{ min_date}}</h5>
                        </div>
                    </div>
                    <div class="invest__cta">
                        <a :href="detailsUrl" class="button button--effect">
                            Réserver
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">


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
  type: string;
  detailsUrl: string;
  locataires?: Locataire[];
  proprietaire?: { photo?: string; };
  surface: string;
  type_logement: string;
  is_occupant: string;
  min_date: string;
  chambres_dispobibles: string;
}

const props = defineProps<PropertyCard>()
</script>



<style scoped>
.countdown h5 {
    text-transform: capitalize;
    font-weight: 700;
}

.property__grid__single .sub__info {
    margin-top: 12px;
    min-height: 60px;
}
</style>