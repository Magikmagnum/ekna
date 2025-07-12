<template>
    <div class="p__details__sidebar">
        <div class="intro">
            <div class="countdown__wrapper">
                <p class="secondary">A partir de</p>
                <div class="countdown">
                    <h5><span class="days">650 €</span></h5>
                </div>
                <p class="secondary">Charges comprises</p>
            </div>
            <h5>Disponible maintenent</h5>
            <div class="progress__type progress__type--two">

            </div>
        </div>
        <div class="group brin">
            <div class="acus__content">
                <form @submit.prevent>
                    <div class="input input--secondary">
                        <label for="anNumTwo">Les colocataires:</label>
                        <div class="colocataire_image_bloc">
                            <div class="colocataire_image"></div>
                            <div class="colocataire_image"></div>
                            <div class="colocataire_image"></div>
                        </div>
                        <!-- <input type="number" name="an__num__two" id="anNumTwo" placeholder="7.00%" required /> -->
                    </div>
                    <div class="input input--secondary">
                        <label for="anNumIn">Les chambres disponibles</label>
                        <div class="chambres_diplonibles_badge_bloc">
                            <div class="chambre_diplonible_badge">1 chambre disponibles</div>
                            <div class="chambre_diplonible_prix">€ 350</div>
                        </div>
                    </div>

                    <!-- <div class="hab">
                        <div class="anti">
                            <p>Loan Period</p>
                            <div class="inti">
                                <p>24 mo.</p>
                            </div>
                        </div>
                        <div class="anti">
                            <p>Risk</p>
                            <div class="inti">
                                <p>C (Higher)</p>
                            </div>
                        </div>
                        <div class="anti">
                            <p>Purpose Of Loan</p>
                            <div class="inti">
                                <p>Business Loan</p>
                            </div>
                        </div>
                    </div> -->

                    <div class="collat">
                        <!-- <div class="single">
                            <p>Collateral</p>
                            <p>Guarantees/Surety</p>
                        </div>
                        <div class="single">
                            <p>Country</p>
                            <p>
                                <img src="@/assets/images/icons/flag.png" alt="flag" /> Lithunia
                            </p>
                        </div> -->
                    </div>

                    <div class="suby">
                        <h5></h5>
                        <button type="submit" class="button button--effect">Voir les chambres</button>
                    </div>
                </form>
            </div>
            <!-- <p class="text-center neutral-bottom">
                <a href="contact-us.html">Request a free callback</a>
            </p> -->
        </div>

        <div class="group alt__brin">
            <h5>Disponibilité<i class="fa-solid fa-bell"></i></h5>
            <hr />
            <div class="singl__wrapper">
                <div class="singl" v-for="update in keyUpdates" :key="update.text">
                    <img src="@/assets/images/check.png" alt="Check" />
                    <div>
                        <p>{{ update.date }}</p>
                        <a :href="update.link">{{ update.text }}</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="group alt__brin__last">
            <h5>Reports</h5>
            <hr />
            <h6>Investment Note</h6>
            <p>Property Share's Detailed Investment Note</p>
            <a href="#" class="button">
                DOWNLOAD INVESTMENT NOTE <i class="fa-solid fa-download"></i>
            </a>

            <h6>Legal Title Report</h6>
            <p>
                Detailed Report on the Title diligence of the property by Amarchand
                Mangaldas
            </p>
            <a href="#" class="button">
                DOWNLOAD TITLE REPORT <i class="fa-solid fa-download"></i>
            </a>
        </div> -->

        <div class="group birinit">
            <h6>Share via Social</h6>
            <div class="social text-start">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>

        <div class="group brini">
            <h5 class="neutral-top">Les avantages EKNA</h5>
            <hr />
            <ul class="bullet-list">
                <li v-for="(item, index) in avantages" :key="index">
                    {{ item }}
                </li>
            </ul>
            <a href="blog.html">Nos partenaires</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyDetailsSidebar',
    data() {
        return {
            keyUpdates: [
                {
                    date: '01-Mai-2022',
                    text: 'Signature du bail',
                    link: 'terms-conditions.html',
                },
                {
                    date: '31-Sep-2025',
                    text: 'Fin du bail',
                    link: 'privacy-policy.html',
                },
            ],
            avantages: [
                'Colocataires compatibles grâce au matching intelligent.',
                'Temps gagné avec des annonces vérifiées',
                'Sécurité renforcée avec des profils fiables.',
                'Démarches simplifiées 100% en ligne',
            ]
        };
    },
};
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés si nécessaire */
.p__details__sidebar .group .suby {
    border: 1px solid #ffffff;
}

.p__details__sidebar .group .suby button {
    width: 225px;
}

.colocataire_image_bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.colocataire_image {
    border-radius: 50%;
    height: 124px;
    width: 124px;
    background-color: #aaaaaa;
}

.chambres_diplonibles_badge_bloc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f8fa;
    padding: 10px 30px;
    line-height: 3em;
    border-radius: 12px;
}

.chambre_diplonible_prix {
    color: #13216e;
    font-weight: bold;
    text-align: center;
}

.bullet-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #1e293b;
  line-height: 1.6;
}


.bullet-list li{

  margin: 32px 0;
}

</style>
