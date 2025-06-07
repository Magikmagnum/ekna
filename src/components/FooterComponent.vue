<template>
    <footer class="footer pos__rel over__hi">
        <div class="container">
            <!-- Newsletter -->
            <div class="footer__newsletter">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6">
                        <div class="footer__newsletter__content column__space">
                            <h3>Restez informé sur la colocation avec EKNA</h3>
                            <p>Ne manquez aucune actualité, astuce ou opportunité !</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-5 offset-xxl-1">
                        <div class="footer__newsletter__form">
                            <form @submit.prevent="handleSubmit">
                                <div class="footer__newsletter__input__group">
                                    <div class="input">
                                        <input v-model="email" type="email" name="news__letter" id="newsLetterMail"
                                            placeholder="Entrez votre email" required />
                                    </div>
                                    <button type="submit" class="button button--effect">S'abonner</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Links and Info -->
            <div class="footer__area section__space">
                <div class="row">
                    <!-- Intro -->
                    <div class="col-md-12 col-lg-4 col-xl-4">
                        <div class="footer__intro">
                            <RouterLink class="navbar-brand" to="/home">
                                <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
                            </RouterLink>
                            <p>EKNA simplifie la colocation avec un matching intelligent et un scoring de dossier fiable
                                pour bailleurs et locataires.</p>
                            <div class="social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Links Sections -->
                    <FooterLinks title="A propos" :links="companyLinks" />
                    <FooterLinks title="Colocataires" :links="investLinks" />
                    <FooterLinks title="Bailleurs" :links="insightsLinks" />
                    <FooterLinks title="Légal" :links="legalLinks" />
                </div>
            </div>

            <!-- Credit -->
            <div class="footer__credit">
                <div class="row d-flex align-items-center">
                    <div class="col-sm-9 order-1 order-sm-0">
                        <div class="footer__copyright">
                            <p>Copyright © EKNA 
                                <!-- | Designed by
                                <a href="https://themeforest.net/user/pixelaxis" target="_blank">Pixelaxis</a> -->
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="footer__language">
                            <select class="language-select">
                                <option value="english">En</option>
                                <option value="australia">Aus</option>
                                <option value="brazil">Bra</option>
                                <option value="argentina">Arg</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative Images -->
        <div class="footer__animation">
            <img :src="logoLight" alt="Revest" class="logo" />
            <img :src="leftCircle" alt="Circle" class="left__circle" />
            <img :src="rightCircle" alt="Circle" class="right__circle" />
            <img :src="homeIllustration" alt="Home" class="home__illustration" />
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
// import { RouterLink } from 'vue-router';
import FooterLinks from './FooterLinksComponent.vue';

import logoLight from '@/assets/images/logo-light.png'
import leftCircle from '@/assets/images/footer/footer__left__circle.png'
import rightCircle from '@/assets/images/footer/footer__right__circle.png'
import homeIllustration from '@/assets/images/footer/footer__home___illustration.png'

const email = ref('');

const handleSubmit = () => {
    alert(`Subscribed with ${email.value}`);
    email.value = '';
};

const companyLinks = [
    { text: "À propos d'EKNA", href: '/home' },
    { text: 'EKNA recrute', href: '/home' },
    { text: 'Blog', href: '/home' },
    { text: 'Nous contacter', href: '/home' },
];

const investLinks = [
    { text: 'Les colocations', href: '/home' },
    { text: 'Le fonctionnement', href: '/home' },
    { text: 'Créer une alerte', href: '/home' },
    { text: 'FAQs', href: '/home' },
];

const insightsLinks = [
    { text: 'Déposer une annonce', href: '/home' },
    { text: 'Le fonctionnement', href: '/home' },
    { text: 'Espace bailleurs', href: '/home' },
];

const legalLinks = [
    { text: 'Confidentialité', href: '/home' },
    { text: 'CGV-CGU', href: '/home' },
    { text: 'Cookies', href: '/home' },
];
</script>