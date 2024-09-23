<!-- PB Header -->
<template>
  <div>
    <header id="outside-header2">
      <div class="left-column">
        <button id="outside-menu" class="btn-menu" type="button" @click="toggleMenu">
          <i class="btn-menu__bars" aria-hidden="true"></i>
        </button>
        <div v-if="menuVisible" class="dropdown-menu">
          <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/articles">Articles</NuxtLink>
          </nav>
        </div>
      </div>
      <div class="center-column">
        <a href="https://www.pinkbike.com/" id="pblogo"><span>Pinkbike.com</span></a>
        <div id="poweredby">Powered by <b>Outside</b></div>
      </div>
      <div class="right-column">
        <div class="right-content">
          <ul id="login" class="f12 bold">
            <li><a href="https://www.pinkbike.com/user/login/"><span>Log in</span></a></li>
            <li class="mobile-hide"><a href="https://www.pinkbike.com/user/signup/"><span>Register <span class="mobile-hide">New User</span></span></a></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
  
<script>
export default {
data() {
    return {
      menuVisible: false
    };
},
methods: {
    toggleMenu() {
    this.menuVisible = !this.menuVisible;
    }
}
};
</script>
  
<style scoped>
  #outside-header2 {
  background-color: #000;
  height: 68px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
}
.left-column {
  grid-column: 1;
  z-index: 1;
}
.center-column {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
}
.right-column {
  grid-column: 3;
}
.dropdown-menu {
  position: absolute;
  top: 68px;
  left: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
}
.dropdown-menu nav a {
  display: block;
  padding: 5px 10px;
  text-decoration: none;
  color: #000;
}
.dropdown-menu nav a:hover {
  background-color: #f0f0f0;
}
.btn-menu {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
.btn-menu__bars::before {
  content: "\2630"; /* Unicode character for hamburger menu */
  font-style: normal;
  font-size: 1.5em;
}
</style>