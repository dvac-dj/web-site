<template>
  <footer class="footer is-paddingless has-text-white has-text-centered">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <small class="text" v-html="getCopyright"></small>
        <small class="text" v-if="getIllustrations" v-html="getIllustrations"></small>
      </div>
      <div class="column is-2">
        <a :href="getTwitterUrl" class="button is-medium is-rounded has-text-white is-size-4" target="_blank"><i class="fa fa-twitter"></i></a>
        <script defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getTwitterUrl() {
      if (!this.$store.state.twitter) return 'https://twitter.com/intent/tweet'
      const text = (this.$store.state.twitter.text) ? this.$store.state.twitter.text : ''
      const url = (this.$store.state.twitter.url) ? this.$store.state.twitter.url : ''
      const hashtag = (this.$store.state.twitter.hashtag) ? this.$store.state.twitter.hashtag : ''
      return `https://twitter.com/intent/tweet?text=${encodeURI(`${text}${(text && url) ? ' ' : ''}${url}`)}&hashtags=${encodeURI(hashtag)}`
    },
    getCopyright() {
      return this.$store.state.copyright.copyright
    },
    getIllustrations() {
      return this.$store.state.copyright.illustrations
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: $footer-height;
}
.columns {
  width: 100%;
}
.text {
  display: block;
}
.button {
  width: 3rem;
  height: 3rem;
  background-color: $twitter-color;
  border: none;
}
.button:hover {
  background-color: darken($twitter-color, 10%);
}
</style>
