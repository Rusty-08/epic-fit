<script setup>
  import { ref, onMounted } from 'vue'
  import { faSquare } from '@fortawesome/free-solid-svg-icons'

  import Navbar from './components/Vue/Navbar.vue'
  import Home from './components/Vue/Home.vue'
  import AboutUs from './components/Vue/AboutUs.vue'
  import Community from './components/Vue/Community.vue'
  import ContactUs from './components/Vue/ContactUs.vue'

  let prevScrollHeight = ref(0)

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { 
        entry.target.classList.add('show')
        setTimeout(() => entry.target.classList.add('animatedOnce'), 1000)
      }
    })
  })

  onMounted(() => {
      window.addEventListener('scroll', () => {
          const scrollHeight = window.scrollY 
          if (scrollHeight > prevScrollHeight.value) {
              document.documentElement.style.setProperty('--header-height', '0')
          } else {
              document.documentElement.style.setProperty('--header-height', '5rem')
          }
          prevScrollHeight.value = scrollHeight
      })

      window.addEventListener('load', () => {
        const pages = document.querySelectorAll('.tab-pane')
        pages.forEach(page => 
          page.classList.remove('active') &&
          page.classList.remove('show')
        )
        
        pages.forEach((page, index) => {
          let activePage = sessionStorage.getItem('activePage') || 0
          if (index == activePage) {
            page.classList.add('active')
            page.classList.add('show')
          }
        })
      })

      const animatedElements = document.querySelectorAll('.animated')
      animatedElements.forEach(el => observer.observe(el))
  });

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
    padding: 0 8%;
  }
  .tab-pane.show {
    animation: switchTab 0.5s ease;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.175);
  }

</style>
