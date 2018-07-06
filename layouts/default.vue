<template>
  <div class="wrapper">
    <dvac-nav-bar />
    <nuxt class="container" />
    <dvac-footer />
  </div>
</template>

<script>
import DvacNavBar from '~/components/common/NavBar'
import DvacFooter from '~/components/common/Footer'

export default {
  components: { DvacNavBar, DvacFooter }
}
</script>

<style>
.title {
  font-family: 'Oswald', sans-serif;
}
</style>

<style lang="scss" scoped>
.wrapper {
  background: #eee url('~/assets/illust.png') no-repeat right -220px top 100px;
  background-size: 573px;
}
@media
(-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  .wrapper {
    background-image: url('~/assets/illust@2x.png');
  }
}
@include touch {
  .wrapper {
    background-image: none;
  }
}
.container {
  min-height: calc(100vh - 100px);
  padding: 5rem 0;
}
</style>
