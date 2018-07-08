<template>
  <section class="container section has-text-centered">
    <h2 class="title is-size-1">NEXT</h2>
    <figure class="section image">
      <img class="main-image" src="~/assets/flyer001.jpg" alt="">
    </figure>
    <div class="section is-size-5-tablet">
      <time class="datetime" datetime="2017-10-07T14:00+09:00">
        <span class="date">2017/10/07(sat)&nbsp;</span><span class="time">14:00open</span>
      </time>
      <p>@<a href="http://sinjuku-azito.com/" target="_blank">Shinjuku azito</a>&nbsp;(<router-link to="/access">ACCESS</router-link>)</p>
      <p>Entrance ￥2,000&nbsp;w1d<br>(レコード割で￥500off)</p>
    </div>
    <button class="button is-medium is-rounded has-text-white" @click="buttonClick"><i class="fa fa-caret-right"></i>&nbsp;&nbsp;詳細を見る</button>
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="buttonClick"></div>
      <div class="modal-card has-text-left">
        <header class="modal-card-head has-background-grey-darker">
          <p class="modal-card-title has-text-white is-size-4-tablet is-size-6-mobile">
            <time datetime="2017-10-07T14:00+09:00">
              <span class="date">2017/10/07(sat)&nbsp;</span><span class="time">14:00open</span>
            </time>
          </p>
          <button class="delete is-large" aria-label="close" @click="buttonClick"></button>
        </header>
        <div class="modal-card-body">
          <div class="section is-size-5-tablet is-size-7-mobile">
            <p>@<a href="http://sinjuku-azito.com/" target="_blank">Shinjuku azito</a>&nbsp;(<router-link to="/access">ACCESS</router-link>)</p>
            <p>Entrance ￥2,000&nbsp;w1d&nbsp;(レコード割で￥500off)</p>
          </div>
          <figure class="section image">
            <img src="~/assets/tt001.jpg" alt="">
          </figure>
          <div class="section">
            <p class="title is-size-5-tablet is-size-6-mobile">- レコード割とは -</p>
            <p class="is-size-7-mobile">
              レコードを持参の方は¥500off<br>
              お持ちいただいたレコードをそのままリクエスト音源としても受付ますので、希望の方は入場後にリクエストボックスにレコードを入れて下さい。
            </p>
          </div>
          <div class="section">
            <p class="title is-size-5-tablet is-size-6-mobile">- ターンテーブルふれあい企画 -</p>
            <p class="is-size-7-mobile">
              ターンテーブルでのDJを体験できる企画を行います。<br>
              DJ機材に触ったことのない方、DJは出来るけどターンテーブル触ったことのない方、バリバリ使いこなせるけどアピールしたい方、どなたでも参加いただけます。<br>
              １人あたり10分間で3名分の時間を設けております。<br>
              ●希望者多数の場合には抽選で3名を選出します。<br>
              ●機材はメンバーのものをお貸しするので用意いただくものはありません。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    buttonClick() {
      this.showModal = !this.showModal
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
