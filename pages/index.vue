<template>
  <div class="container section has-text-centered">
    <div class="content">
      <div class="image"><router-link to="/next/"><dvac-image /></router-link></div>
      <router-link class="button is-medium is-rounded has-text-white is-size-3-tablet is-size-5-mobile" to="/next/"><i class="fa fa-caret-right"></i>&nbsp;&nbsp;ENTER</router-link>
    </div>
  </div>
</template>

<script>
import DvacImage from '~/components/index/Image'
export default {
  components: { DvacImage },
  layout: 'index'
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - #{$footer-height} - 10rem);
  padding-bottom: 0;
}
.content {
  width: 100%;
}
.image {
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 0;
}
.button {
  background-color: $key-color;
  border: none;
  width: 250px;
}
@include mobile {
  .button {
    width: 150px;
  }
}
.button:hover {
  background-color: darken($key-color, 10%);
}
</style>
