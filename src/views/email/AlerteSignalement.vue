<template>
  <div class="mail-container">
    <img src="@/assets/images/logo.png" alt="Logo EKNA" class="mail-logo" />

    <h1 class="mail-bold">Bonjour {{ name }}&nbsp;!</h1>

    <p class="mail-warning">⚠️ Merci d’avoir signalé ce logement.</p>
    <p>Nous avons bien reçu votre alerte et notre équipe va analyser la situation dans les plus brefs délais.</p>
    <p>Si le contenu enfreint nos règles de diffusion, le logement sera modéré ou retiré de la plateforme.</p>
    <p>Nous vous tiendrons informé si besoin.</p>
    <p>Merci pour votre vigilance, c’est grâce à vous qu’EKNA reste un espace de confiance.</p>

    <p class="mail-contact">
      ✉️ Pour toute autre question :
      <a :href="`mailto:${email}`"><span class="mail-bold">{{ email }}</span></a>
    </p>

    <p class="mail-signature">À bientôt,</p>
    <p class="mail-signature mail-bold">L’équipe EKNA</p>

    <div class="mail-footer">
      <p>
        Si vous avez des questions, veuillez répondre à cet email ou nous contacter sur :
        <a :href="`mailto:${email}`">{{ email }}</a>
      </p>
      <div class="mail-social-icons">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>

const name = "Florine"; 
const email = "contact@ekna.fr";

</script>

<style scoped>
.mail-container {
  max-width: 535px;;
  margin: 50px auto;
  padding: 0 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.mail-logo {
  display: block;
  margin: 0 auto 30px;
  height: 40px;
}

h1 {
  font-size: 1.5em;
  color: #000;
}

.mail-warning {
  font-weight: 300;
  margin-bottom: 10px;
}

.mail-contact a {
  color: #000;
  text-decoration: none;
}

.mail-signature {
  margin-top: 20px;
}

.mail-bold {
  font-weight: 600;
  color: inherit;
}

.mail-footer {
  margin-top: 128px;
  color: #666;
  text-align: center;
  background-color: #fff;
}

.mail-footer a {
  color: #444;
  text-decoration: none;
  font-weight: 300;
  display: block;
  font-size: inherit;
}

.mail-footer p {
  font-size: 0.84em;
}

p {
  font-weight: 300;
  color: #000;
}

.mail-social-icons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.mail-social-icons img {
  width: 24px;
  height: 24px;
}

.fa-brands {
  margin-top: 42px;
  font-weight: 300;
  font-size: 42px;
  color: #635aff;
}
</style>