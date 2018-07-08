<template>
  <dvac-default class="crew" />
</template>

<script>
import DvacDefault from './default';

export default {
  components: { DvacDefault }
}
</script>

<style lang="scss" scoped>
.crew /deep/ .main {
  background-color: $background-color-overlay;
}
</style>
