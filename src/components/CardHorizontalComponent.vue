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
                            <p class="secondary"><i class="fa-solid fa-clock"></i> Disponibilité</p>
                            <div class="countdown">
                                <h5>Immédiate</h5>
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
                            <span class="project__has__investors">{{ property.investors }} €  CC</span> 
                        </p>
                    </div>
                </div>

                <div class="item__info">
                    <div class="item__info__single">
                        <p>Nb de chambres</p>
                        <h6>{{ property.chambres }} chambre(s)</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Type de bail</p>
                        <h6>{{ property.bail }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Type d'habitat</p>
                        <h6>{{ property.type }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Surface</p>
                        <h6>{{ property.Surface }}</h6>
                    </div>
                </div>

                <div class="item__footer">
                    <div class="item__security">
                        <div class="icon__box"><img :src="imageHome" alt="Security" /></div>
                        <div class="item__security__content">
                            <p class="secondary">Annonce certifiée</p>
                            <h6>EKNA</h6>
                        </div>
                    </div>
                    <div class="item__cta__group">
                        <a href="registration.html" class="button button--effect">Réserver</a>
                        <a href="property-details.html" class="button button--secondary button--effect">Détails</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const imageHome = new URL('@/assets/images/home.png', import.meta.url).href

defineProps({ property: Object })
</script>


<style scoped>
.countdown h5 {
    text-transform: capitalize;
    font-weight: 700;
}
</style>