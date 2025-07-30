<template>
    <div class="p__details__sidebar">
        <div class="intro">
            <div class="countdown__wrapper">
                <p class="secondary">A partir de</p>
                <div class="countdown">
                    <h5><span class="days">{{ prixMin !== null ? prixMin + ' €' : '—' }}</span></h5>
                </div>
                <p class="secondary">Charges comprises</p>
            </div>
            <h5>Disponible maintenent</h5>
            <div class="progress__type progress__type--two">

            </div>
        </div>
        <div class="group brin">
            <div class="acus__content">
                <form @submit.prevent>
                    <div class="input input--secondary" v-if="logement && logement.locataires_for_mobile">
                        <label>Les colocataires :</label>
                        <div class="colocataire_image_bloc">
                            <img v-for="(locataire, index) in logement.locataires_for_mobile" :key="index"
                                :src="locataire.user_for_mobile.photo"
                                :alt="`${locataire.user_for_mobile.first_name} ${locataire.user_for_mobile.name}`"
                                class="colocataire_image"
                                :title="`${locataire.user_for_mobile.first_name} ${locataire.user_for_mobile.name}`" />
                        </div>
                    </div>
                    <div class="input input--secondary"
                        v-if="logement && logement.chambres_for_mobile && logement.chambres_for_mobile.length">
                        <label>Les chambres disponibles</label>

                        <div class="chambres_diplonibles_badge_bloc"
                            v-for="(chambre, index) in logement.chambres_for_mobile" :key="index">
                            <div class="chambre_diplonible_badge">
                                {{ chambre.nom || `Chambre ${index + 1}` }} disponible
                            </div>
                            <div class="chambre_diplonible_prix">
                                {{ chambre.loyer_hors_charge || '—' }} €
                            </div>
                        </div>
                    </div>

                    <div class="collat">
                    </div>

                    <div class="suby">
                        <h5></h5>
                        <button type="submit" class="button button--effect">Voir les chambres</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="group alt__brin">
            <h5>Disponibilité<i class="fa-solid fa-bell"></i></h5>
            <hr />
            <div class="singl__wrapper">
                <div class="singl" v-for="update in keyUpdates" :key="update.text">
                    <img src="@/assets/images/check.png" alt="Check" />
                    <div>
                        <p>{{ update.date }}</p>
                        <a :href="update.link">{{ update.text }}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="group brini">
            <h5 class="neutral-top">Les avantages EKNA</h5>
            <hr />
            <ul class="bullet-list">
                <li v-for="(item, index) in avantages" :key="index">
                    {{ item }}
                </li>
            </ul>
            <a href="blog.html">Nos partenaires</a>
        </div>

        <div class="group birinit">
            <h6 style="width: 150px;">Partage via les réseaux sociaux</h6>
            <div class="social text-start">
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`" target="_blank" rel="noopener"
                    title="Partager sur Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a :href="`https://twitter.com/intent/tweet?url=${currentUrl}`" target="_blank" rel="noopener"
                    title="Partager sur Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a :href="`https://www.instagram.com`" target="_blank" rel="noopener"
                    title="Instagram (page d’accueil)">
                    <i class="fab fa-instagram"></i>
                </a>
                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`" target="_blank"
                    rel="noopener" title="Partager sur LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'


const props = defineProps({
    logement: {
        type: Object,
        required: false,
    },
})

const logement = props.logement

const keyUpdates = ref([
    {
        date: '01-Mai-2022',
        text: 'Signature du bail',
        link: 'terms-conditions.html',
    },
    {
        date: '31-Sep-2025',
        text: 'Fin du bail',
        link: 'privacy-policy.html',
    },
])

const avantages = ref([
    'Colocataires compatibles grâce au matching intelligent.',
    'Temps gagné avec des annonces vérifiées',
    'Sécurité renforcée avec des profils fiables.',
    'Démarches simplifiées 100% en ligne',
])

const prixMin = computed(() => {
    if (
        logement &&
        logement.chambres_for_mobile &&
        logement.chambres_for_mobile.length
    ) {
        return Math.min(
            ...logement.chambres_for_mobile
                .map((c) => Number(c.loyer_hors_charge))
                .filter((v) => !isNaN(v))
        )
    }
    return null
})

</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés si nécessaire */
.p__details__sidebar .group .suby {
    border: 1px solid #ffffff;
}

.p__details__sidebar .group .suby button {
    width: 225px;
}

.colocataire_image_bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.colocataire_image {
    border-radius: 50%;
    height: 124px;
    width: 124px;
    background-color: #aaaaaa;
}

.chambres_diplonibles_badge_bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f8fa;
    padding: 10px 30px;
    line-height: 3em;
    border-radius: 12px;
    margin-bottom: 22px;
}

.chambre_diplonible_prix {
    color: #13216e;
    font-weight: bold;
    text-align: center;
}

.bullet-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: #1e293b;
    line-height: 1.6;
}


.bullet-list li {

    margin: 32px 0;
}
</style>
