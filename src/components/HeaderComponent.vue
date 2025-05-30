<template>
  <header class="header header--secondary">
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        </RouterLink>

        <!-- Droite de la navbar -->
        <div class="navbar__out order-2 order-xl-3">
          <div class="nav__group__btn d-none d-sm-flex">
            <RouterLink to="/" class="log">Log In</RouterLink>
            <RouterLink to="/" class="button button--effect">
              Join Now <i class="fa-solid fa-arrow-right-long"></i>
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
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">List your property</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Contact</RouterLink>
            </li>

            <li class="nav-item d-block d-sm-none">
              <RouterLink to="/" class="nav-link">Log In</RouterLink>
            </li>
            <li class="nav-item d-block d-sm-none">
              <RouterLink to="/" class="button button--effect button--last">
                Join Now <i class="fa-solid fa-arrow-right-long"></i>
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
  // {
  //   label: 'Home',
  //   id: 'navbarHomeDropdown',
  //   children: [
  //     { label: 'Home', to: '/' },
  //     { label: 'Home Two', to: '/home-two' },
  //     { label: 'Home Three', to: '/home-three' },
  //   ],
  // },
  // {
  //   label: 'Properties',
  //   id: 'navbarPropertyDropdown',
  //   children: [
  //     { label: 'Properties', to: '/properties' },
  //     { label: 'Property Details', to: '/property-details' },
  //     { label: 'Property Alert', to: '/property-alert' },
  //   ],
  // },
  // {
  //   label: 'Loan',
  //   id: 'navbarLoanDropdown',
  //   children: [
  //     { label: 'Business Loan', to: '/business-loan' },
  //     { label: 'Business Loan Details', to: '/business-loan-details' },
  //     { label: 'Loan Application', to: '/loan-application' },
  //   ],
  // },
  {
    label: 'Pages',
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
    ],
  },
]
</script>

<style scoped>
/* Ajoute ici tout style personnalisé si besoin */
</style>