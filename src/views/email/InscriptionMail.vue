<template>
  <div class="mail-container">
    <img src="@/assets/images/logo.png" alt="Logo EKNA" class="mail-logo" />

    <h1 class="mail-bold">Bonjour {{ name }}&nbsp;!</h1>

    <p>Bienvenue !</p> 
    <p>✅ Pour finaliser votre inscription, cliquez ci-dessous :</p>

    <div class="button-wrapper">
      <a href="#" class="cta-button">Confirmer mon adresse</a>
    </div>

    <p>On vous attend,</p>
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
const name = "Florine"
const email = "contact@ekna.fr"
</script>

<style scoped>
.mail-container {
  max-width: 546px;
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

p {
  font-weight: 300;
  color: #000;
  /* margin: 12px 0; */
}

.mail-bold {
  font-weight: 600;
  color: inherit;
}

.button-wrapper {
  margin: 32px 0;
  text-align: center;
}

.cta-button {
  display: inline-block;
  background-color: #635aff;
  color: #fff;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
}

.mail-signature {
  margin-top: 10px;
}

.mail-footer {
  margin-top: 100px;
  color: #666;
  text-align: center;
  font-size: 0.84em;
  font-size: inherit;
}

.mail-footer a {
  color: #444;
  text-decoration: none;
  font-weight: 300;
  display: block;
  font-size: inherit;

}

.mail-footer p {
  font-size: 0.86em;
}


.mail-social-icons {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.fa-brands {
  font-size: 32px;
  color: #635aff;
}
</style>