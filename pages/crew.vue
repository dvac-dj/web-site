<template>
  <div>
    <section class="container section has-text-centered">
      <h2 class="title is-size-1">CREW</h2>
      <section v-if="djs && djs.length" class="section">
        <h3 class="title is-size-3">- DJ -</h3>
        <div class="columns is-multiline">
          <div v-for="dj in djs" :key="dj.displayOrder" class="column is-3-tablet is-6-mobile">
            <dvac-crew
              :name="dj.name"
              :credit="dj.credit"
              :image="(dj.image) ? dj.image.fields.file.url : null"
              :profile="dj.profile"
              :twitter="dj.twitter"
            />
          </div>
        </div>
      </section>
      <section v-if="vjs && vjs.length" class="section">
        <h3 class="title is-size-3">- VJ -</h3>
        <div class="columns is-multiline">
          <div v-for="vj in vjs" :key="vj.displayOrder" class="column is-3-tablet is-6-mobile">
            <dvac-crew
              :name="vj.name"
              :credit="vj.credit"
              :image="(vj.image) ? vj.image.fields.file.url : null"
              :profile="vj.profile"
              :twitter="vj.twitter"
            />
          </div>
        </div>
      </section>
      <section v-if="staffs && staffs.length" class="section">
        <h3 class="title is-size-3">- STAFF -</h3>
        <div class="columns is-multiline">
          <div v-for="staff in staffs" :key="staff.displayOrder" class="column is-3-tablet is-6-mobile">
            <dvac-crew
              :name="staff.name"
              :credit="staff.credit"
              :image="(staff.image) ? staff.image.fields.file.url : null"
              :profile="staff.profile"
              :twitter="staff.twitter"
            />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import DvacCrew from '~/components/crew/crew'
import contentful from '~/plugins/contentful'
const client = contentful.createClient()

export default {
  layout: 'crew',
  components: { DvacCrew },
  data() {
    return {
      djs: [],
      vjs: [],
      staffs: []
    };
  },
  async asyncData(context) {
    const residents = await client.getEntries({ content_type: 'crew', order: 'fields.displayOrder' });
    const djs = [];
    const vjs = [];
    const staffs = [];
    residents.items.forEach(entry => {
      if (entry.fields['part'] === 'DJ') {
        djs.push(entry.fields);
      } else if (entry.fields['part'] === 'VJ') {
        vjs.push(entry.fields);
      } else if (entry.fields['part'] === 'STAFF') {
        staffs.push(entry.fields);
      }
    });
    return { djs, vjs, staffs };
  }
}
</script>

<style scoped>
.columns {
  display: flex;
}
</style>
