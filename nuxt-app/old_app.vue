<template>
  <div>
    <header>
      <h1 class="header-title">My Nuxt 3 Application</h1>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 My Company</p>
    </footer>
  </div>
</template>

<script setup>
// Any global setup for the layout
</script>

<style scoped>
header {
  background-color: #007bff;
  padding: 1rem;
  text-align: center;
}
h1.header-title {
  color: #fff;
}

main {
  min-height: 100%;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}

footer {
  min-height: 100%;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  color: #fff;
  background-color: #007bff;
}
</style>