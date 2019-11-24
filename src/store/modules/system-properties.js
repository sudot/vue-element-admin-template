
const systemProperties = {
  namespaced: true,
  state: {
    baseUrl: '',
    version: '',
    website: '',
    defaultPassword: ''
  },
  mutations: {
    SET_SYSTEM_PROPERTIES: (state, payload) => {
      state.baseUrl = process.env.VUE_APP_BASE_URL
      state.version = payload.version || state.version
      state.website = payload.website || state.website
      state.defaultPassword = payload.defaultPassword || state.defaultPassword
    }
  },

  actions: {
    // 加载系统属性
    loadSystemProperties({ commit }) {
      return new Promise((resolve, reject) => {
        resolve({})
      })
      // return new Promise((resolve, reject) => {
      //   fetchSystemProperties().then(response => {
      //     commit('SET_SYSTEM_PROPERTIES', response.data)
      //     resolve(response.data)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    }
  }
}
export default systemProperties
