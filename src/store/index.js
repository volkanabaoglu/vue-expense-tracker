import { createApp } from "vue";
import Vuex from "vuex";

const app = createApp();

app.use(Vuex);

const store = new Vuex.Store({
  state: {
    transactions: [],
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
  },
  getters: {
    getTransactions(state) {
      return state.transactions;
    },
  },
  actions: {},
  modules: {},
});

export default store;
