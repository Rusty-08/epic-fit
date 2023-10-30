<script setup>
  import { faSquare } from '@fortawesome/free-solid-svg-icons'

  import Navbar from './components/Vue/Navbar.vue'
  import Home from './components/Vue/Home.vue'
  import AboutUs from './components/Vue/AboutUs.vue';
  import Community from './components/Vue/Community.vue';
  import ContactUs from './components/Vue/ContactUs.vue';

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
    min-height: 100dvh !important;
  }
  .tab-pane.show {
    transition: var(--transition-175s);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.175);
    animation: switchTab 0.75s ease;
  }
  @keyframes switchTab {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
</style>
