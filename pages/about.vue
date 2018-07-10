<template>
  <section class="container section has-text-centered">
    <h2 class="title is-size-1">ABOUT</h2>
    <div class="content is-size-5-tablet is-size-6-mobile">
      <section>
        <h3 class="title is-size-3">{{ title }}</h3>
        <div class="section has-text-left-mobile">
          <p v-html="text"></p>
        </div>
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
      text: ''
    }
  },
  async asyncData(context) {
    const abouts = await client.getEntries({ content_type: 'about' })
    if (abouts.length) return
    return abouts.items.map(entry => {
      return {
        title: entry.fields.title,
        text: entry.fields.text
      }
    })[0]
  }
}
</script>

<style scoped>
.content {
  padding-top: 6rem;
}
</style>
