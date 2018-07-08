<template>
  <div class="wrapper">
    <dvac-nav-bar />
      <div class="main">
        <nuxt />
      </div>
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
body {
  overflow: hidden;
}
.title {
  font-family: 'Oswald', sans-serif;
}
</style>

<style lang="scss" scoped>
.wrapper {
  background: $background-color url('~/assets/illust.png') no-repeat right -300px top 100px;
  background-size: 573px;
}
@media
(-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  .wrapper {
    background-image: url('~/assets/illust@2x.png');
  }
}
@include mobile {
  .wrapper {
    background-position: right -300px top 100px;
  }
  .main {
    background-color: $background-color-overlay;
  }
}
@include tablet {
  .wrapper {
    background-position: right -300px top 100px;
  }
}
@include desktop {
  .wrapper {
    background-position: right -220px top 100px;
  }
}
@include widescreen {
  .wrapper {
    background-position: right -160px top 100px;
  }
}
@include fullhd {
  .wrapper {
    background-position: right -100px top 100px;
  }
}
.main {
  min-height: calc(100vh - 150px);
  padding: 5rem 0;
}
</style>
