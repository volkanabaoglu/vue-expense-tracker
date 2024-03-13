<template>
    <div>
        <h3>Add new transaction</h3>
        <form id="form" @submit.prevent="addTransaction">
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" v-model="text" placeholder="Enter text..." />
            </div>
            <div class="form-control">
                <label for="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
            </div>
            <button class="btn" type="submit">Add transaction</button>
        </form>
    </div>
</template>

<script>
import store from '@/store';

export default {
    data() {
        return {
            text: "",
            amount: 0,
        };
    },
    methods: {
        addTransaction() {
            const newTransaction = {
                text: this.text,
                amount: parseFloat(this.amount),
            };
            this.$store.commit("setTransactions", [...store.getters.getTransactions, newTransaction]);
            
            this.text = "";
            this.amount = 0;
        },
    },
};
</script>