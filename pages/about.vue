<template>
  <section class="container section has-text-centered">
    <h2 class="title is-size-1">ABOUT</h2>
    <div class="content is-size-5-tablet is-size-6-mobile">
      <section>
        <h3 class="title is-size-3">{{ title }}</h3>
        <div class="section has-text-left-mobile">
          <p v-html="text"></p>
        </div>
        <iframe class="video" v-if="youtubeUrl" :src="youtubeUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </section>
    </div>
  </section>
</template>

<script>
import contentful from '~/plugins/contentful'
const client = contentful.createClient()

export default {
  data() {
    return {
      title: '',
      text: '',
      video: ''
    }
  },
  async asyncData(context) {
    const abouts = await client.getEntries({ content_type: 'about' })
    if (abouts.length) return
    return abouts.items.map(entry => {
      return {
        title: entry.fields.title,
        text: entry.fields.text,
        video: entry.fields.video
      }
    })[0]
  },
  computed: {
    youtubeUrl() {
      if(!this.video || !this.video.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\/)?(.+)/g)) return
      let id = this.getYoutubeId(decodeURI(this.video))
      if (!id) id = this.video.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\/)?(.+)/g, '$1')
      id = (id.split('?'))[0]
      id = (id.split('#'))[0]
      return `http://www.youtube.com/embed/${id}`
    }
  },
  methods: {
    getYoutubeId(url) {
      const array = url.split('?')
      if (!array[1]) return
      const value = array[1].split('&').find((element) => {
        return (element.split('=')[0] === 'v')
      })
      return (value) ? value.split('=')[1] : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 6rem;
}
.video {
  width: 100%;
  height: 338px;
  max-width: 600px;
}
@include mobile {
  .video {
    max-width: 100%;
    height: calc((100vw - 3rem) * (9 / 16));
  }
}
</style>
