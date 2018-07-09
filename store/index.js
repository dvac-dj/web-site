import contentful from '~/plugins/contentful'
const client = contentful.createClient()

export const state = () => ({
  twitter: null
})

export const mutations = {
  setTwitter (state, twitter) {
    state.twitter = twitter
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    const response = await client.getEntries({ content_type: 'twitter' })
    const twitter = response.items.map(entry => {
      return {
        text: entry.fields['text'],
        url: entry.fields['url'],
        hashtag: entry.fields['hashtag']
      }
    })[0]
    commit('setTwitter', twitter)
  }
}
