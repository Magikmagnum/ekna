<!-- components/form/AskForm.vue -->
<template>
    <form @submit.prevent="handleSubmit" name="ask__form">
        <div class="row">
            <div class="col-sm-6">
                <div class="input input--secondary">
                    <label for="firstName">First Name*</label>
                    <input type="text" id="firstName" v-model="form.firstName" placeholder="Enter Your First Name"
                        required />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="input input--secondary">
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" v-model="form.lastName" placeholder="Enter Your Last Name"
                        required />
                </div>
            </div>
        </div>

        <div class="input input--secondary">
            <label for="email">Email*</label>
            <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
        </div>

        <div class="input input--secondary input__alt">
            <label for="phone">Phone*</label>
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
                <input type="tel" id="phone" v-model="form.phone" required placeholder="345-323-1234" />
            </div>
        </div>

        <div class="input input--secondary">
            <label for="subject">Subject*</label>
            <input type="text" id="subject" v-model="form.subject" placeholder="Write Subject" required />
        </div>

        <div class="input input--secondary">
            <label for="message">Message*</label>
            <textarea id="message" v-model="form.message" placeholder="Write Message" required></textarea>
        </div>

        <div class="input__button">
            <button type="submit" class="button button--effect">Subscribe</button>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+1',
    phone: '',
    subject: '',
    message: ''
})

function handleSubmit() {
    console.log('Form submitted:', { ...form })
    Object.keys(form).forEach((key) => (form[key] = ''))
}
</script>