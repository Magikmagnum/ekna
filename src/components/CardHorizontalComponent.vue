<!-- CardHorizontalComponent -->
<template>
    <div class="row d-flex align-items-center">
        <div class="col-lg-5">
            <div class="property__item__image column__space--secondary">
                <div class="img__effect">
                    <a href="property-details.html">
                        <img :src="property.image" :alt="property.title" />
                    </a>
                </div>
            </div>
        </div>

        <div class="col-lg-7">
            <div class="property__item__content">
                <div class="item__head">
                    <div class="item__head__left">
                        <h4>{{ property.title }}</h4>
                        <p><i class="fa-solid fa-location-dot"></i> {{ property.location }}</p>
                    </div>
                    <div class="item__head__right">
                        <div class="countdown__wrapper">
                            <p class="secondary"><i class="fa-solid fa-clock"></i> {{ $t('CardHorizontalComponent.disponibilite') }}</p>
                            <div class="countdown">
                                <h5>{{ $t('CardHorizontalComponent.immediate') }}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="progress__type progress__type--two">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: property.percent }"
                            :aria-valuenow="parseFloat(property.percent)" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="project__info">
                        <p class="project__has">
                            <span class="project__has__investors">{{ property.investors }} € CC</span>
                        </p>
                    </div>
                </div>

                <div class="item__info">
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.nbChambres') }}</p>
                        <h6>{{ property.chambres }} {{ $t('CardHorizontalComponent.chambres') }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.typeBail') }}</p>
                        <h6>{{ property.bail }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.typeHabitat') }}</p>
                        <h6>{{ property.type }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.surface') }}</p>
                        <h6>{{ property.Surface }}</h6>
                    </div>
                </div>

                <div class="item__footer">
                    <div class="item__security">
                        <div class="icon__box"><img :src="imageHome" alt="Security" /></div>
                        <div class="item__security__content">
                            <p class="secondary">{{ $t('CardHorizontalComponent.certifie') }}</p>
                            <h6>EKNA</h6>
                        </div>
                    </div>
                    <div class="item__cta__group">
                        <a href="registration.html" class="button button--effect">{{ $t('CardHorizontalComponent.reserver') }}</a>
                        <a href="property-details.html" class="button button--secondary button--effect">{{ $t('CardHorizontalComponent.details') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

// Importing the i18n instance for translations
const { t } = useI18n()

const imageHome = new URL('@/assets/images/home.png', import.meta.url).href

defineProps({ property: Object })

</script>


<style scoped>
.countdown h5 {
    text-transform: capitalize;
    font-weight: 700;
}
</style>