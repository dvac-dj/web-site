<template>
  <div>
    <figure class="image" :class="{ 'thumb': image && profile }" @click="buttonClick">
      <img :src="setThumb()" :alt="name">
      <figcaption class="is-size-4-tablet has-text-weight-bold">{{ name }}</figcaption>
    </figure>
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="buttonClick"></div>
      <div class="modal-card has-text-left">
        <header class="modal-card-head has-background-grey-darker">
          <p class="modal-card-title has-text-white"><span class="name is-size-4">{{ name }}</span><span v-if="credit" class="credit is-size-6-tablet is-size-7-mobile">({{ credit }})</span></p>
          <button class="delete is-large" aria-label="close" @click="buttonClick"></button>
        </header>
        <div class="modal-card-body">
          <figure class="section image">
            <img :src="setImage()" :alt="name">
          </figure>
          <div class="section">
            <p class="is-size-7-mobile" v-html="profile"></p>
          </div>
          <div v-if='twitter' class="section">
            <a :href="twitter" class="button is-medium is-rounded has-text-white" target="_blank"><i class="fa fa-twitter"></i>&nbsp;&nbsp;Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'credit', 'image', 'profile', 'twitter'],
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    setThumb() {
      return (this.image) ? this.image + '?w=256&h=256&fit=thumb' : 'https://placehold.jp/64/666666/eeeeee/512x512.png?text=coming%20soon'
    },
    setImage() {
      return (this.image) ? this.image + '?w=600&h=400&fit=pad' : 'https://placehold.jp/64/666666/eeeeee/512x512.png?text=coming%20soon'
    },
    buttonClick() {
      if (!this.image || !this.profile) return
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card {
  max-height: 80vh;
}
.thumb {
  cursor: pointer;
}
.button {
  background-color: $twitter-color;
  border: none;
}
.button:hover {
  background-color: darken($twitter-color, 10%);
}
.credit {
  padding-left: 1rem;
}
@include mobile {
  .modal-card-body .section {
    padding: 0 0 1.5rem;
  }
  .name,
  .credit {
    display: block;
  }
  .credit {
    padding-left: 0;
  }
}
</style>
