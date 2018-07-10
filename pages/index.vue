<template>
  <div class="container section has-text-centered">
    <router-link class="button is-medium is-rounded has-text-white" to="/next/"><i class="fa fa-caret-right"></i>&nbsp;&nbsp;ENTER</router-link>
  </div>
</template>

<script>
export default {
  layout: 'index'
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - #{$footer-height} - 10rem);
}
.button {
  background-color: $key-color;
  border: none;
}
.button:hover {
  background-color: darken($key-color, 10%);
}
</style>
