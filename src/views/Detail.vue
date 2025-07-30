<template>
    <div id="app">
        <HeaderComponent />
        <div>
            <div class="property__details__banner bg__img clear__top" v-if="logement && logement.image"
                :style="{ backgroundImage: `url('${logement.image}')` }">
            </div>
            <div class="property__details__banner bg__img clear__top" v-else
                :style="{ backgroundImage: `url('${constructionImage}')` }">
            </div>

            <section class="p__details p__details__two faq section__space__bottom">
                <div class="container">
                    <div class="p__details__area">
                        <div class="row">
                            <div class="col-lg-7">
                                <PropertyDetailsComponent v-if="logement" :logement="logement" />
                            </div>

                            <div class="col-lg-5">
                                <PropertyDetailsSidebar v-if="logement" :logement="logement" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <hr />
            </div>

            <section class="p__details__two faq section__space__bottom">
                <div class="container">
                    <div class="p__details__area">
                        <div class="row">
                            <div class="col-lg-7">
                                <ChambreComponent v-if="logement" :logement="logement" />
                            </div>

                            <div class="col-lg-5">
                                <DetailsSidebar v-if="logement" :logement="logement" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Proposition2Component />
        <FooterComponent />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import HeaderComponent from '@/components/HeaderComponent.vue'
import Proposition2Component from '@/components/Proposition2Component.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PropertyDetailsComponent from '@/components/PropertyDetailsComponent.vue'
import PropertyDetailsSidebar from '@/components/PropertyDetailsSidebar.vue'
import ChambreComponent from '@/components/ChambreComponent.vue'
import DetailsSidebar from '@/components/DetailsSidebar.vue'
import constructionImage from '@/assets/images/construction.png'

const route = useRoute()
const logementId = route.params.id

const logement = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        const response = await fetch(`https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements/${logementId}`)
        if (!response.ok) throw new Error('Erreur API')
        const data = await response.json()
        logement.value = data.result
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
})
</script>


<style scoped>
hr {
    margin-top: 0px;
    margin-bottom: 60px;
}
</style>