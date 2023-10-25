<script setup>
  import { faSquare } from '@fortawesome/free-solid-svg-icons'

  import Navbar from './components/Navbar.vue'
  import Home from './components/Home.vue'
  import AboutUs from './components/AboutUs.vue';
  import Community from './components/Community.vue';
  import ContactUs from './components/ContactUs.vue';

</script>

<template>
  <Navbar />
  
  <main class="tab-content">
    <Home />
    <AboutUs />
    <Community />
    <ContactUs />
  </main>
</template>

<style scoped>
  .tab-content .tab-pane {
    min-height: calc(100vh - var(--header-height)) !important;
  }
</style>
