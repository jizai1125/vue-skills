import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    axiosCancelSource: null
  },
  getters: {
    axiosCancelSource: state => state.axiosCancelSource
  },
  mutations: {
    SET_AXIOS_CANCEL_SOURCE (state, value) {
      state.axiosCancelSource = value
    }
  },
  actions: {},
  modules: {}
});
