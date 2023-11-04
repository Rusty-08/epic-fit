<script setup>
  import { ref, onMounted } from 'vue'

  import Navbar from './components/Vue/Navbar.vue'

  let prevScrollHeight = ref(0)

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
  });
</script>

<template>
  <Navbar />
  <main class="tab-content">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
