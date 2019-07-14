module.exports = {
  /*
  ** generate configuration
  */
  generate: {
    minify: {
      removeScriptTypeAttributes: true
    },
    fallback: true
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    vendor: ['~/plugins/contentful']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'DVAC -Digital Vinyl Anime Crew-',
    meta: [
      { hid: 'description', name: 'description', content: 'DVACとは、アニソンを中心に様々なジャンルを取り入れた雑食系パーティー。Crewそれぞれの持つバックグラウンドを生かし洋楽や邦楽を問わずクラブミュージックからPOPミュージックまでを組み込んだ多様な音楽とターンテーブルならではの音遊びを楽しんでください。' },
      { itemprop: 'name', content: 'DVAC -Digital Vinyl Anime Crew-' },
      { itemprop: 'description', content: 'DVACとは、アニソンを中心に様々なジャンルを取り入れた雑食系パーティー。Crewそれぞれの持つバックグラウンドを生かし洋楽や邦楽を問わずクラブミュージックからPOPミュージックまでを組み込んだ多様な音楽とターンテーブルならではの音遊びを楽しんでください。' },
      { itemprop: 'itemprop', content: 'https://dvac.tokyo/ogp.png' },
      { property: 'og:url', content: 'https://dvac.tokyo' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'DVAC -Digital Vinyl Anime Crew-' },
      { property: 'og:description', content: 'DVACとは、アニソンを中心に様々なジャンルを取り入れた雑食系パーティー。Crewそれぞれの持つバックグラウンドを生かし洋楽や邦楽を問わずクラブミュージックからPOPミュージックまでを組み込んだ多様な音楽とターンテーブルならではの音遊びを楽しんでください。' },
      { property: 'og:image', content: 'https://dvac.tokyo/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'DVAC -Digital Vinyl Anime Crew-' },
      { name: 'twitter:description', content: 'DVACとは、アニソンを中心に様々なジャンルを取り入れた雑食系パーティー。Crewそれぞれの持つバックグラウンドを生かし洋楽や邦楽を問わずクラブミュージックからPOPミュージックまでを組み込んだ多様な音楽とターンテーブルならではの音遊びを楽しんでください。' },
      { name: 'twitter:image', content: 'https://dvac.tokyo/summary_large_image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:500' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#d20841' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#d20841'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/utilities.scss'
    ]
  },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/contentful',
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],
  /*
  ** Include css not in components
  */
  css: [
    { src: '~/assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Mode
  */
  mode: 'spa'
}
