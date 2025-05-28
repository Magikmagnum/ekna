<template>
  <header class="header header--secondary">
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        </RouterLink>
        <div class="navbar__out order-2 order-xl-3">
          <div class="nav__group__btn">
            <RouterLink to="/login" class="log d-none d-sm-block">Log In</RouterLink>
            <RouterLink to="/registration" class="button button--effect d-none d-sm-block">
              Join Now <i class="fa-solid fa-arrow-right-long"></i>
            </RouterLink>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#primaryNav"
            aria-controls="primaryNav"
            aria-expanded="false"
            aria-label="Toggle Primary Nav"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse order-3 order-xl-2" id="primaryNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown" v-for="item in menu" :key="item.label">
              <a
                class="nav-link dropdown-toggle"
                href="javascript:void(0)"
                :id="item.id"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ item.label }}
              </a>
              <ul class="dropdown-menu" :aria-labelledby="item.id">
                <li v-for="sub in item.children" :key="sub.label">
                  <RouterLink class="dropdown-item" :to="sub.to">{{ sub.label }}</RouterLink>
                </li>
              </ul>
            </li>
            <!-- Autres éléments fixes -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/list-your-property">List your property</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact-us">Contact</RouterLink>
            </li>
            <li class="nav-item d-block d-sm-none">
              <RouterLink to="/login" class="nav-link">Log In</RouterLink>
            </li>
            <li class="nav-item d-block d-sm-none">
              <RouterLink to="/registration" class="button button--effect button--last">
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
  {
    label: 'Home',
    id: 'navbarHomeDropdown',
    children: [
      { label: 'Home', to: '/' },
      { label: 'Home Two', to: '/home-two' },
      { label: 'Home Three', to: '/home-three' },
    ],
  },
  {
    label: 'Properties',
    id: 'navbarPropertyDropdown',
    children: [
      { label: 'Properties', to: '/properties' },
      { label: 'Property Details', to: '/property-details' },
      { label: 'Property Alert', to: '/property-alert' },
    ],
  },
  {
    label: 'Loan',
    id: 'navbarLoanDropdown',
    children: [
      { label: 'Business Loan', to: '/business-loan' },
      { label: 'Business Loan Details', to: '/business-loan-details' },
      { label: 'Loan Application', to: '/loan-application' },
    ],
  },
  {
    label: 'Pages',
    id: 'navbarDropdown',
    children: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'About Us', to: '/about-us' },
      { label: 'Affiliate Program', to: '/affiliate-program' },
      { label: 'Blog', to: '/blog' },
      { label: 'Blog Two', to: '/blog-two' },
      { label: 'Blog Single', to: '/blog-single' },
      { label: 'Career', to: '/career' },
      { label: 'Career Details', to: '/career-details' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Key Risks', to: '/key-risks' },
      { label: 'Loyality Program', to: '/loyality-program' },
      { label: 'Terms Conditions', to: '/terms-conditions' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Cookie Policy', to: '/cookie-policy' },
      { label: 'Support', to: '/support' },
      { label: 'Error', to: '/404' },
    ],
  },
];
</script>

<style scoped>
/* Ajoute ici tout style personnalisé si besoin */
</style>