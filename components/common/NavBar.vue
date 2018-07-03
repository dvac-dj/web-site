<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1 class="logo"><router-link to="/"><dvac-logo /></router-link></h1>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': showMenu }" @click="burgerClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">HOME</router-link>
        <router-link class="navbar-item" to="/about/">ABOUT</router-link>
        <router-link class="navbar-item" to="/crew/">CREW</router-link>
        <router-link class="navbar-item" to="/access/">ACCESS</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import DvacLogo from '~/components/common/Logo'
export default {
  components: { DvacLogo },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    burgerClick() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  width: 100%;
}
.logo {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 160px;
  z-index: 1;
}
.navbar-burger {
  color: #fff;
  font-size: 2em;
}
.navbar-burger:hover {
  color: #fff;
}
.navbar-start {
  padding-left: 200px;
}
@include touch {
  .navbar-start {
    text-align: right;
    padding-left: 0;
  }
}
.navbar-item {
  font-family: 'Oswald', sans-serif;
}
.nuxt-link-exact-active {
  color: #d20841;
  pointer-events: none;
}
</style>
