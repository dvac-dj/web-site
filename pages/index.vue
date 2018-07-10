<template>
  <div>
    <section v-if="datetime && locationName && locationUrl" class="container section has-text-centered">
      <h2 class="title is-size-1">NEXT</h2>
      <figure class="section image">
        <img class="main-image" :src="`${mainImage}${getImageOption('main', 1)}`" :srcset="`${mainImage}${getImageOption('main', 1)} 1x, ${mainImage}${getImageOption('main', 2)} 2x`" alt="">
      </figure>
      <div class="section is-size-5-tablet">
        <time class="datetime" :datetime="datetime">
          <span class="date">{{ getDateString(datetime) }}&nbsp;</span><span class="time">{{ getTimeString(datetime) }}</span>
        </time>
        <p>@<a :href="locationUrl" target="_blank">{{ locationName }}</a>&nbsp;(<router-link to="/access">ACCESS</router-link>)</p>
        <p v-html="entrance"></p>
      </div>
      <button class="button is-medium is-rounded has-text-white" @click="buttonClick"><i class="fa fa-caret-right"></i>&nbsp;&nbsp;詳細を見る</button>
      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="buttonClick"></div>
        <div class="modal-card has-text-left">
          <header class="modal-card-head has-background-grey-darker">
            <p class="modal-card-title has-text-white is-size-4-tablet is-size-6-mobile">
              <time :datetime="datetime">
                <span class="date">{{ getDateString(datetime) }}&nbsp;</span><span class="time">{{ getTimeString(datetime) }}</span>
              </time>
            </p>
            <button class="delete is-large" aria-label="close" @click="buttonClick"></button>
          </header>
          <div class="modal-card-body">
            <div class="section is-size-5-tablet is-size-7-mobile">
              <p>@<a :href="locationUrl" target="_blank">{{ locationName }}</a>&nbsp;(<router-link to="/access">ACCESS</router-link>)</p>
              <p v-html="entrance"></p>
            </div>
            <figure v-if="modalImage" class="section image">
              <img :src="`${modalImage}${getImageOption('modal', 1)}`" :srcset="`${modalImage}${getImageOption('modal', 1)} 1x, ${modalImage}${getImageOption('modal', 2)} 2x`" alt="">
            </figure>
            <div class="section">
              <p v-if="modalTitle1" class="title is-size-5-tablet is-size-6-mobile">{{ modalTitle1 }}</p>
              <p v-if="modalText1" class="is-size-7-mobile" v-html="modalText1"></p>
            </div>
            <div class="section">
              <p v-if="modalTitle2" class="title is-size-5-tablet is-size-6-mobile">{{ modalTitle2 }}</p>
              <p v-if="modalText2" class="is-size-7-mobile" v-html="modalText2"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="datetime2 && locationName2 && locationUrl2" class="container section has-text-centered">
      <h2 class="title is-size-3">AFTER THE NEXT</h2>
      <div class="section is-size-5-tablet">
        <time class="datetime" :datetime="datetime2">
          <span class="date">{{ getDateString(datetime2) }}&nbsp;</span><span class="time">{{ getTimeString(datetime2) }}</span>
        </time>
        <p>@<a :href="locationUrl2" target="_blank">{{ locationName2 }}</a></p>
      </div>
    </section>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'
const client = contentful.createClient()

export default {
  data() {
    return {
      showModal: false,
      datetime: new Date(),
      entrance: '',
      locationName: '',
      locationUrl: '',
      modalTitle1: '',
      modalTitle2: '',
      modalText1: '',
      modalText2: '',
      mainImage: '',
      modalImage: '',
      datetime2: new Date(),
      locationName2: '',
      locationUrl2: ''
    }
  },
  async asyncData(context) {
    let informations = await client.getEntries({ content_type: 'information', order: 'fields.datetime' })
    if (informations.length) return
    informations = informations.items.map(entry => {
      return {
        datetime: new Date(entry.fields.datetime),
        entrance: entry.fields.entrance,
        locationName: entry.fields.locationName,
        locationUrl: entry.fields.locationUrl,
        modalTitle1: entry.fields.modalTitle1,
        modalTitle2: entry.fields.modalTitle2,
        modalText1: entry.fields.modalText1,
        modalText2: entry.fields.modalText2,
        mainImage: (entry.fields.mainImage) ? entry.fields.mainImage.fields.file.url : null,
        modalImage: (entry.fields.modalImage) ? entry.fields.modalImage.fields.file.url : null
      }
    })
    const data = informations[0];
    if (informations[1]) {
      Object.assign(data, {
        datetime2: new Date(informations[1].datetime),
        locationName2: informations[1].locationName,
        locationUrl2: informations[1].locationUrl
      })
    }
    return data;
  },
  methods: {
    buttonClick() {
      this.showModal = !this.showModal
    },
    getDateString(datetime) {
      return `${datetime.getFullYear()}/${String(datetime.getMonth() + 1).padStart(2, '0')}/${String(datetime.getDate()).padStart(2, '0')}(${this.getWeekString(datetime.getDay())})`
    },
    getTimeString(datetime) {
      return `${String(datetime.getHours()).padStart(2, '0')}:${String(datetime.getMinutes()).padStart(2, '0')}open`
    },
    getWeekString(week) {
      return {
        0: 'sun',
        1: 'mon',
        2: 'tue',
        3: 'wed',
        4: 'thu',
        5: 'fri',
        6: 'sat'
      }[week]
    },
    getImageOption(key, scale) {
      return {
        main: {
          1: '?w=450&fit=pad',
          2: '?w=900&fit=pad'
        },
        modal: {
          1: '?w=600&fit=pad',
          2: '?w=1200&fit=pad'
        }
      }[key][scale]
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card {
  max-height: 80vh;
}
.main-image {
  max-width: 450px;
  margin: 0 auto;
}
.datetime {
  display: flex;
  justify-content: center;
}
.button {
  background-color: $key-color;
  border: none;
}
.button:hover {
  background-color: darken($key-color, 10%);
}
@include mobile {
  .modal-card-body .section {
    padding: 0 0 1.5rem;
  }
}
</style>
