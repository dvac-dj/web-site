<template>
  <section class="contents">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="~/assets/flyer001.jpg" alt="">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <h2 class="title">NEXT</h2>
            <time class="datetime" datetime="2017-10-07T14:00+09:00">
              <span class="date">2017/10/07(sat)</span><span class="time">14:00open</span>
            </time>
            <p>@<a href="http://sinjuku-azito.com/">Shinjuku azito</a></p>
            <p>Entrance ￥2,000w1d (レコード割で￥500off)</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.contents {
  color: #000;
  height: 100%;
  padding: 102px 0 0 50px;
  box-sizing: border-box;
}
.box {
  width: 500px;
}
.datetime {
  display: flex;
}
</style>
