<template>
    <section class="alert__newsletter section__space__bottom">
        <div class="container">
            <div class="alert__newsletter__area">
                <div class="section__header">
                    <h5 class="neutral-top">Alerte colocation</h5>
                    <h2>Ne manque pas ta prochaine coloc' !</h2>
                    <p class="neutral-bottom">
                        Inscris-toi à l'alerte colocation pour recevoir un résumé complet de nos nouvelles colocations.
                    </p>
                </div>

                <form @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input input--secondary">
                                <label for="alertFirstName">First Name*</label>
                                <input v-model="form.firstName" type="text" id="alertFirstName"
                                    placeholder="Enter Your First Name" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input input--secondary">
                                <label for="alertLastName">Last Name*</label>
                                <input v-model="form.lastName" type="text" id="alertLastName"
                                    placeholder="Enter Your Last Name" required />
                            </div>
                        </div>
                    </div>

                    <div class="input input--secondary">
                        <label for="alertRegistrationMail">Email*</label>
                        <input v-model="form.email" type="email" id="alertRegistrationMail"
                            placeholder="Enter your email" required />
                    </div>

                    <div class="input input--secondary input__alt">
                        <label for="alertNumber">Phone*</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <select v-model="form.phoneCode" class="number__code__select">
                                    <option value="+1">+1</option>
                                    <option value="+2">+2</option>
                                    <option value="+3">+3</option>
                                    <option value="+4">+4</option>
                                    <option value="+5">+5</option>
                                    <option value="+6">+6</option>
                                </select>
                            </div>
                            <input v-model="form.phoneNumber" type="tel" id="alertNumber" placeholder="345-323-1234"
                                required />
                        </div>
                    </div>

                    <div class="input input--secondary">
                        <label for="countrySelect">Location*</label>
                        <select v-model="form.location" id="countrySelect" required class="type__select">
                            <option disabled value="">Desired Location</option>
                            <option>Australia</option>
                            <option>New Zeeland</option>
                            <option>Japan</option>
                            <option>China</option>
                        </select>
                    </div>

                    <div class="input__button">
                        <button type="submit" class="button button--effect">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+1',
    phoneNumber: '',
    location: '',
})

function handleSubmit() {
    console.log('Form submitted:', form)
}
</script>

<style scoped>
/* Optionnel : style du select */
.type__select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: white;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23000' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 10px 6px;
}
</style>