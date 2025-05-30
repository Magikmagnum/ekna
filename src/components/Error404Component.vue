<template>
    <section class="error bg__img pos__rel over__hi" :style="{ backgroundImage: `url(${errorBg})` }">
        <div class="container">
            <div class="error__area">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-4">
                        <div class="error__content">
                            <h1>Oops!</h1>
                            <h3>Page Not Found</h3>
                            <p class="primary">
                                We can’t seem to find the page you’re looking for
                            </p>
                            <RouterLink to="/home" class="button button--effect">
                                Back To Home <i class="fa-solid fa-arrow-right-long"></i>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-lg-8 d-none d-lg-block">
                        <div class="error__thumb thumb__ltr">
                            <img :src="errorImage" alt="Error" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Gestion propre des images via `@/assets`
import errorBg from '@/assets/images/error-bg.png'
import errorImage from '@/assets/images/error.png'
</script>

<style scoped>
/* Si tu veux personnaliser ou ajouter des styles spécifiques ici */
</style>