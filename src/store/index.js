import { createApp } from "vue";
import Vuex from "vuex";

const app = createApp();

app.use(Vuex);

const store = new Vuex.Store({
  state: {
    transactions: [],
  },
  mutations: {
    // update states
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
  },
  getters: {
    // return states
    getTransactions(state) {
      return state.transactions;
    },
  },
  actions: {
    // async - api calls
  },
  modules: {
    // return states
  },
});

export default store;
