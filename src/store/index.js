import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // entities
        transactions: [],
    },
    mutations: {
        // update states
        setTransactions(state, transactions) {
            state.transactions = transactions;
        },
        getTransactions(state) {
            return state.transactions;
        }
    },
    actions: {
        // async - api calls
    },
    modules: {
        // return states
    }
});