import contentful from '~/plugins/contentful'
const client = contentful.createClient()

export const state = () => ({
  twitter: null
})

export const mutations = {
  setTwitter(state, twitter) {
    state.twitter = twitter
  },
  setCopyright(state, copyright) {
    state.copyright = copyright
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    const twitter = await client.getEntries({ content_type: 'twitter' })
    const copyright = await client.getEntries({ content_type: 'copyright' })
    commit('setTwitter', twitter.items.map(entry => {
      return {
        text: entry.fields['text'],
        url: entry.fields['url'],
        hashtag: entry.fields['hashtag']
      }
    })[0])
    commit('setCopyright', copyright.items.map(entry => {
      return {
        copyright: entry.fields['copyright'],
        illustrations: entry.fields['illustrations']
      }
    })[0])
  }
}
