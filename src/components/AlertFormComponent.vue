<template>
    <section class="alert__newsletter section__space__bottom">
        <div class="container">
            <div class="alert__newsletter__area">
                <div class="section__header">
                    <h5 class="neutral-top">Formulaire d'inscription</h5>
                    <h2>Trouve ta colocation au bon moment !</h2>
                    <p class="neutral-bottom">
                        Inscris-toi et indique ta date d'emménagement: on te contacte dès qu'une colocation te
                        correspond.
                    </p>
                </div>

                <form @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input input--secondary">
                                <label for="alertFirstName">Prénom*</label>
                                <input v-model="form.first_name" type="text" id="alertFirstName"
                                    placeholder="Saisis ton prénom" required />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="input input--secondary">
                                <label for="alertLastName">Nom*</label>
                                <input v-model="form.name" type="text" id="alertLastName"
                                    placeholder="Saisis ton nom" required />
                            </div>
                        </div>
                    </div>

                    <div class="input input--secondary">
                        <label for="alertRegistrationMail">Email*</label>
                        <input v-model="form.email" type="email" id="alertRegistrationMail"
                            placeholder="Saisis ton email" required />
                    </div>

                    <div class="input input--secondary input__alt">
                        <label for="alertNumber">Téléphone*</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <select v-model="form.phone" class="number__code__select">
                                    <option value="+33" selected>France</option>
                                    <option value="+1">États-Unis</option>
                                    <option value="+44">Royaume-Uni</option>
                                    <option value="+49">Allemagne</option>
                                    <option value="+34">Espagne</option>
                                    <option value="+39">Italie</option>
                                    <option value="+81">Japon</option>
                                    <option value="+61">Australie</option>
                                    <option value="+64">Nouvelle-Zélande</option>
                                    <option value="+86">Chine</option>
                                    <option value="+91">Inde</option>
                                    <option value="+55">Brésil</option>
                                    <option value="+7">Russie</option>
                                    <option value="+82">Corée du Sud</option>
                                    <option value="+66">Thaïlande</option>
                                    <option value="+65">Singapour</option>
                                    <option value="+971">Émirats Arabes Unis</option>
                                    <option value="+27">Afrique du Sud</option>
                                    <option value="+90">Turquie</option>

                                </select>
                            </div>
                            <input v-model="form.phoneNumber" type="tel" id="alertNumber" placeholder="345-323-1234"
                                required />
                        </div>
                    </div>

                    <div class="input input--secondary">
                        <label for="countrySelect">Ville recherchée*</label>
                        <select v-model="form.city" id="countrySelect" required class="type__select">
                            <option disabled value="">Saisis la ville souhaitée</option>
                            <option>Australie</option>
                            <option>Nouvelle-Zélande</option>
                            <option>Japon</option>
                            <option>Chine</option>
                        </select>
                    </div>

                    <div class="input input--secondary">
                        <label for="alertRegistrationMail">Date d'emménagement*</label>
                        <input v-model="form.date_emmenagement" type="date" id="alertRegistrationMail" required
                            placeholder="Saisis la date à laquelle tu souhaites emménager" />
                    </div>

                    <div class="input__button">
                        <button type="submit" class="button button--effect">Envoyer ma demande</button>
                    </div>


                </form>
            </div>
        </div>
        <p class="text-center">
            Remplis notre formulaire d'inscription. Si tu hésites encore à trouver ta colocation idéale, indique
            simplement ta date d'emménagement souhaitée, on te recontactera dès qu'une offre correspondante sera
            disponible !
        </p>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
    first_name: '',
    name: '',
    email: '',
    phoneCode: '+1',
    phone: '',
    city: '',
    date_emmenagement: ''
})





function handleSubmit() {
    // console.log('Form submitted:', form)
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

.text-center {
    text-align: center;
    margin-top: 1rem;
    color: #555;
    padding: 0 24px;
}

.alert__newsletter__area .section__header {
    max-width: 604px;
}
</style>