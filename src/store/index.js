import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import systemProperties from './modules/system-properties'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import settings from './modules/settings'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    systemProperties,
    errorLog,
    permission,
    settings,
    user
  },
  getters
})

export default store
