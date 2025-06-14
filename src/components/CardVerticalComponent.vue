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
                    <!-- <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }"
                            :aria-valuenow="progressPercent" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div> -->
                    <p class="project__has">
                        <span class="project__has__investors">{{ investors }} € CC</span>
                    </p>
                </div>

                <div class="item__info">
                    <div class="item__info__single">
                        <p>Nb de chambres</p>
                        <h6>{{ chambres }} chambres</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Type d'habitat</p>
                        <h6>{{ type }}</h6>
                    </div>
                </div>

                <div class="invest__cta__wrapper">
                    <div class="countdown__wrapper">
                        <p class="secondary"><i class="fa-solid fa-clock"></i> Disponibilité</p>
                        <div class="countdown">
                            <h5>Immédiate</h5>
                            <!-- <h5><span class="days">{{ countdown.days }}</span><span class="seperator">/</span></h5>
                            <h5><span class="hours">{{ countdown.month }}</span><span class="seperator">/</span></h5>
                            <h5><span class="minutes">{{ countdown.years }}</span></h5> -->
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
    days: string;
    month: string;
    years: string;
}

interface PropertyCard {
    id: number;
    title: string;
    address: string;
    imageUrl: string;
    investors: number;
    // progressPercent: number;
    chambres: string;
    type: string;
    detailsUrl: string;
    countdown: Countdown;
}

const props = defineProps < PropertyCard > ()
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