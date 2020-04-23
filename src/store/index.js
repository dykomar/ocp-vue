import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkbox: false
  },
  mutations: {
    setCheckbox(state, value) {
      state.checkbox = value;
    }
  },
  actions: {},
  modules: {}
});
