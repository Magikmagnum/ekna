<template>
    <div class="row d-flex align-items-center">
        <!-- Colonne image -->
        <div class="col-lg-5">
            <div class="property__item__image column__space--secondary img__effect-wrapper">
                <div class="img__effect">
                    <!-- Avatar propriétaire -->
                    <div class="avatar" :style="{ backgroundImage: `url(${property.proprietaire?.photo || ''})` }">
                    </div>

                    <!-- Image principale -->
                    <router-link :to="property.detailsUrl">
                        <img :src="property.imageUrl" :alt="property.title" />
                    </router-link>
                </div>

                <!-- Groupe avatars locataires -->
                <div class="avatar-group">
                    <AvatarGroup :avatars="users" />
                </div>
            </div>
        </div>

        <!-- Colonne infos -->
        <div class="col-lg-7">
            <div class="property__item__content">
                <div class="item__head">
                    <div class="item__head__left">
                        <h4>{{ property.title }}</h4>
                        <p class="sub__title">
                            <i class="fa-solid fa-location-dot"></i> {{ property.address }}
                        </p>
                        <p class="sub__title">{{ property.is_occupant }}</p>
                        <p class="sub__title">
                            5 pièces - {{ property.chambres }} chambres - {{ property.surface }}
                        </p>
                    </div>
                    <div class="item__head__right">
                        <div class="countdown__wrapper">
                            <p class="secondary">
                                <i class="fa-solid fa-clock"></i>
                                {{ $t('CardHorizontalComponent.disponibilite') }}
                            </p>
                            <div class="countdown">
                                <h5>
                                    {{ property.countdown.days }}/{{ property.countdown.month }}/{{
                                    property.countdown.years }}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Prix -->
                <div class="progress__type">
                    <div class="project__info">
                        <p class="project__has">
                            <span class="project__has__investors">{{ property.loyer_hors_charge }}</span>
                        </p>
                    </div>
                </div>

                <!-- Détails -->
                <div class="item__info">
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.nbChambres') }}</p>
                        <h6>{{ property.chambres }} {{ $t('CardHorizontalComponent.chambres') }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.typeBail') }}</p>
                        <h6>{{ property.type_bail }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.typeHabitat') }}</p>
                        <h6>{{ property.type_logement }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>{{ $t('CardHorizontalComponent.surface') }}</p>
                        <h6>{{ property.surface }}</h6>
                    </div>
                </div>

                <!-- Footer -->
                <div class="item__footer">
                    <div class="item__security">
                        <div class="icon__box">
                            <img :src="imageHome" alt="Security" />
                        </div>
                        <div class="item__security__content">
                            <p class="secondary">{{ $t('CardHorizontalComponent.certifie') }}</p>
                            <h6>EKNA</h6>
                        </div>
                    </div>
                    <div class="item__cta__group">
                        <a href="registration.html" class="button button--effect">
                            {{ $t('CardHorizontalComponent.reserver') }}
                        </a>
                        <router-link :to="property.detailsUrl" class="button button--secondary button--effect">
                            {{ $t('CardHorizontalComponent.details') }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AvatarGroup from './AvatarGroup.vue'

const { t } = useI18n()
const imageHome = new URL('@/assets/images/home.png', import.meta.url).href

// Prop unifiée
const props = defineProps({
    property: {
        type: Object,
        required: true
    }
})

// Avatars locataires
const users = computed(() => {
    return props.property.locataires?.map(l => l.user?.photo).filter(Boolean) || []
})
</script>

<style scoped>
.img__effect-wrapper {
    position: relative;
}

.countdown h5 {
    font-weight: 700;
}

.project__has__investors {
    font-weight: 700;
    color: #13216f;
    font-size: 24px;
}

.item__head__left p {
    margin-bottom: 6px;
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

.avatar-group {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;
}

.sub__title {
    margin-top: 6px !important;
    font-size: 19px !important;
}

.property__item__content .item__info {
    gap: 15px;
    padding: 12px 0px 5px;
    border-top: 1px solid #e9ecef;
    margin-top: 14px;
}
</style>