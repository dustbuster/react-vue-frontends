<template>
  <div class="layout">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
  
<script setup>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
</script>
<script>
export default {
  name: 'DefaultLayout'
}
</script>
  
<style scoped>
    .layout {
      display: flex;
      flex-direction: column;
    }
  
  main {
    flex: 1; /* Makes the main content area grow to fill available space */
    padding: 20px; /* Optional padding */
  }
</style>