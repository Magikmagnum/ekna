<template>
  <header class="header header--secondary">
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <RouterLink class="navbar-brand" to="/home">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        </RouterLink>

        <!-- Droite de la navbar -->
        <div class="navbar__out order-2 order-xl-3">
          <div class="nav__group__btn d-none d-sm-flex">
            <!-- <RouterLink to="/home" class="log">Log In</RouterLink> -->
            <RouterLink to="/home" class="button button--effect">
              Espace bailleur 
              <!-- <i class="fa-solid fa-arrow-right-long"></i> -->
            </RouterLink>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav"
            aria-controls="primaryNav" aria-expanded="false" aria-label="Toggle Primary Nav">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </div>

        <!-- Menu principal -->
        <div class="collapse navbar-collapse order-3 order-xl-2" id="primaryNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown" v-for="item in menu" :key="item.id">
              <a class="nav-link dropdown-toggle" href="#" :id="item.id" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ item.label }}
              </a>
              <ul class="dropdown-menu" :aria-labelledby="item.id">
                <li v-for="sub in item.children" :key="sub.label">
                  <RouterLink class="dropdown-item" :to="sub.to">{{ sub.label }}</RouterLink>
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" to="/home">Bailleurs</RouterLink>
            </li> -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/home">Déposer une annonce</RouterLink>
            </li>

            <!-- <li class="nav-item d-block d-sm-none">
              <RouterLink to="/home" class="nav-link">Log In</RouterLink>
            </li> -->
            <li class="nav-item d-block d-sm-none">
              <RouterLink to="/home" class="button button--effect button--last">
                Espace bailleur <i class="fa-solid fa-arrow-right-long"></i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const menu = [
  {
    label: 'Colocataires',
    id: 'navbarDropdown',
    children: [
      { label: 'Aide', to: '/aide' },
      { label: 'Careers', to: '/careers' },
      { label: 'Cookie', to: '/cookie' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terme', to: '/terme' },
      { label: 'Stat', to: '/stat' },
      { label: 'Home', to: '/home' },
      { label: 'Error', to: '/error' },
      { label: 'Support', to: '/support' },
      { label: 'Alert', to: '/alert' },
      { label: 'Affiliate', to: '/affiliate' },
    ],
  },
  {
    label: 'Bailleurs',
    id: 'navbarLoanDropdown',
    children: [
      { label: 'Business Loan', to: '/home' },
      { label: 'Business Loan Details', to: '/home' },
      { label: 'Loan Application', to: '/home' },
    ],
  },
  {
    label: 'À propos',
    id: 'navbarPropertyDropdown',
    children: [
      { label: 'Properties', to: '/home' },
      { label: 'Property Details', to: '/home' },
      { label: 'Property Alert', to: '/home' },
    ],
  }
]
</script>

<style scoped>
/* Ajoute ici tout style personnalisé si besoin */
</style>