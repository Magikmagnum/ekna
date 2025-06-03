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
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }"
                            :aria-valuenow="progressPercent" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <p class="project__has">
                        <span class="project__has__investors">{{ investors }} Investors</span> |
                        <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i> {{ amount }}
                        </span>
                        <span class="project__has__investors__percent">({{ progressPercent }}%)</span>
                    </p>
                </div>

                <div class="item__info">
                    <div class="item__info__single">
                        <p>Annual Return</p>
                        <h6>{{ annualReturn }}</h6>
                    </div>
                    <div class="item__info__single">
                        <p>Property Type</p>
                        <h6>{{ propertyType }}</h6>
                    </div>
                </div>

                <div class="invest__cta__wrapper">
                    <div class="countdown__wrapper">
                        <p class="secondary"><i class="fa-solid fa-clock"></i> Left to invest</p>
                        <div class="countdown">
                            <h5><span class="days">{{ countdown.days }}</span><span class="ref">d</span><span
                                    class="seperator">:</span></h5>
                            <h5><span class="hours">{{ countdown.hours }}</span><span class="ref">h</span><span
                                    class="seperator">:</span></h5>
                            <h5><span class="minutes">{{ countdown.minutes }}</span><span class="ref">m</span></h5>
                        </div>
                    </div>
                    <div class="invest__cta">
                        <a :href="detailsUrl" class="button button--effect">
                            Invest Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const imageHome = new URL('@/assets/images/home.png', import.meta.url).href

const props = defineProps({
  title: String,
  address: String,
  imageUrl: String,
  investors: Number,
  amount: String,
  progressPercent: Number,
  annualReturn: String,
  propertyType: String,
  detailsUrl: String,
  countdown: Object
})
</script>