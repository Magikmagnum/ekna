<template>
    <footer class="footer pos__rel over__hi">
        <div class="container">
            <!-- Newsletter -->
            <div class="footer__newsletter">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-6">
                        <div class="footer__newsletter__content column__space">
                            <h3>Subscribe for updates</h3>
                            <p>Stay on top of the latest blog posts, news and announcements</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-5 offset-xxl-1">
                        <div class="footer__newsletter__form">
                            <form @submit.prevent="handleSubmit">
                                <div class="footer__newsletter__input__group">
                                    <div class="input">
                                        <input v-model="email" type="email" name="news__letter" id="newsLetterMail"
                                            placeholder="Enter Your Email" required />
                                    </div>
                                    <button type="submit" class="button button--effect">Subscribe</button>
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
                            <!-- <RouterLink to="/">
                                <img src="@/assets/images/logo-light.png" alt="Revest" class="logo" />
                            </RouterLink> -->
                            <p>Revest is a platform offering anyone the ability to invest and potentially earn money
                                from property at the click of a button</p>
                            <div class="social">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Links Sections -->
                    <FooterLinks title="Company" :links="companyLinks" />
                    <FooterLinks title="Invest" :links="investLinks" />
                    <FooterLinks title="Insights" :links="insightsLinks" />
                    <FooterLinks title="Legal" :links="legalLinks" />
                </div>
            </div>

            <!-- Credit -->
            <div class="footer__credit">
                <div class="row d-flex align-items-center">
                    <div class="col-sm-9 order-1 order-sm-0">
                        <div class="footer__copyright">
                            <p>Copyright © Revest | Designed by
                                <a href="https://themeforest.net/user/pixelaxis" target="_blank">Pixelaxis</a>
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
    { text: 'About Us', href: '/' },
    { text: 'Careers', href: '/' },
    { text: 'Blog', href: '/' },
    { text: 'Contact Us', href: '/' },
    { text: 'Affiliate', href: '/' },
];

const investLinks = [
    { text: 'Browse Properties', href: '/' },
    { text: 'How it works', href: '/' },
    { text: 'Loan Application', href: '/' },
    { text: 'Property Alerts', href: '/' },
    { text: 'FAQs', href: '/' },
];

const insightsLinks = [
    { text: 'Help Center', href: '/' },
    { text: 'List Your Property', href: '/' },
    { text: 'Loyality program', href: '/' },
];

const legalLinks = [
    { text: 'Privacy Policy', href: '/' },
    { text: 'Term & Conditions', href: '/' },
    { text: 'Cookie Policy', href: '/' },
    { text: 'Key Risks', href: '/' },
];
</script>