<template>
    <div id="app">
        <HeaderComponent />
        <div>
            <div class="property__details__banner bg__img clear__top"
                :style="{ backgroundImage: `url(${constructionImage})` }">
            </div>

            <section class="p__details p__details__two faq section__space__bottom">
                <div class="container">
                    <div class="p__details__area">
                        <div class="row">
                            <div class="col-lg-7">
                                <!-- Include content as a component if needed -->
                                <PropertyDetailsComponent />
                            </div>

                            <div class="col-lg-5">
                                <PropertyDetailsSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <hr/>
            </div>
            
            <section class="p__details__two faq section__space__bottom">
                <div class="container">
                    <div class="p__details__area">
                        <div class="row">
                            <div class="col-lg-7">
                                <!-- Include content as a component if needed -->
                                <ChambreComponent />
                            </div>

                            <div class="col-lg-5">
                                <DetailsSidebar />
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
import HeaderComponent from '@/components/HeaderComponent.vue'
import Proposition2Component from '@/components/Proposition2Component.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import PropertyDetailsComponent from '@/components/PropertyDetailsComponent.vue';
import PropertyDetailsSidebar from '@/components/PropertyDetailsSidebar.vue'
import ChambreComponent from '@/components/ChambreComponent.vue';
import DetailsSidebar from '@/components/DetailsSidebar.vue';
import constructionImage from '@/assets/images/construction.png';
</script>


<style scoped>

hr {
    margin-top: 0px;
    margin-bottom: 60px;
}
</style>