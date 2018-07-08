<template>
  <footer class="columns footer is-paddingless has-text-white has-text-centered">
    <div class="column is-8 is-offset-2">
      <small class="text">&copy; 2018 DVAC -Digital Vinyl Anime Crew-</small>
      <small class="text">illustrations by <a href="https://twitter.com/shiroi_" target="_blank">白い</a></small>
    </div>
    <div class="column is-2">
      <a href="https://twitter.com/intent/tweet?text=DVAC+-Digital+Vinyl+Anime+Crew-%0D%0Ahttps%3A%2F%2Fexample.com&hashtags=DVAC_tokyo" class="button is-medium is-rounded has-text-white is-size-4" target="_blank"><i class="fa fa-twitter"></i></a>
      <script defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  align-items: center;
  min-height: 100px;
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
