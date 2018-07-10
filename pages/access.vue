<template>
  <section class="container section has-text-centered">
    <h2 class="title is-size-1">ACCESS</h2>
    <iframe class="map has-background-grey-light" :src="`http://maps.google.co.jp/maps?ll=${lat},${lon}&q=${name}&output=embed&t=m&z=16`" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>
</template>

<script>
import contentful from '~/plugins/contentful'
const client = contentful.createClient()

export default {
  data() {
    return {
      name: '',
      lat: '',
      lon: ''
    }
  },
  async asyncData(context) {
    const accesses = await client.getEntries({ content_type: 'access' })
    if (accesses.length) return
    return accesses.items.map(entry => {
      return {
        name: entry.fields.name,
        lat: entry.fields.address.lat,
        lon: entry.fields.address.lon
      }
    })[0]
  }
}
</script>

<style scoped>
.map {
  max-width: 600px;
  margin-top: 2rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
}
</style>
