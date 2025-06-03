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
                            <p class="secondary"><i class="fa-solid fa-clock"></i> Left to invest</p>
                            <div class="countdown">
                                <h5><span class="days">00</span><span class="ref">d</span><span
                                        class="seperator">:</span></h5>
                                <h5><span class="hours">00</span><span class="ref">h</span><span
                                        class="seperator">:</span></h5>
                                <h5><span class="minutes">00</span><span class="ref">m</span></h5>
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
                            <span class="project__has__investors">{{ property.investors }} Investors</span> |
                            <span class="project__has__investors__amount"><i class="fa-solid fa-dollar-sign"></i> {{
                                property.amount }}</span>
                            <span class="project__has__investors__percent">({{ property.percent }})</span>
                        </p>
                        <p class="project__goal"><i class="fa-solid fa-dollar-sign"></i> {{ property.goal }} Goal</p>
                    </div>
                </div>

                <div class="item__info">
                    <div class="item__info__single">
                        <p>Annual Return</p>
                        <h6>{{ property.return }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Maximum Term</p>
                        <h6>{{ property.term }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Property Type</p>
                        <h6>{{ property.type }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Distribution</p>
                        <h6>{{ property.distribution }}</h6>
                    </div>
                </div>

                <div class="item__footer">
                    <div class="item__security">
                        <div class="icon__box"><img :src="imageHome" alt="Security" /></div>
                        <div class="item__security__content">
                            <p class="secondary">Security</p>
                            <h6>{{ property.security }}</h6>
                        </div>
                    </div>
                    <div class="item__cta__group">
                        <a href="registration.html" class="button button--effect">Invest Now</a>
                        <a href="property-details.html" class="button button--secondary button--effect">Details</a>
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