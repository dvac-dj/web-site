<template>
  <div>
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

<style scoped>
.container {
  background-color: #fff;
  background-image: url('~/assets/illust.png');
  background-repeat: no-repeat;
  background-position: right 50px top 50px;
  min-height: calc(100vh - 100px);
}
@media
(-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  background-image: url('~/assets/illust@2x.png');
}
</style>
