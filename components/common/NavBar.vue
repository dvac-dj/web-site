<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1 class="logo" @click="linkClick"><router-link to="/"><dvac-logo /></router-link></h1>
      <a role="button" class="navbar-burger has-text-white" aria-label="menu" aria-expanded="false" :class="{ 'is-active': showMenu }" @click="burgerClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-start" @click="linkClick">
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
    },
    linkClick() {
      console.log('click');
      this.showMenu = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: absolute;
  font-family: 'Oswald', sans-serif;
  width: 100%;
}
.logo {
  width: 160px;
  margin: 5px 30px 0 5px;
}
.nuxt-link-exact-active {
  color: #d20841;
  pointer-events: none;
}
</style>
