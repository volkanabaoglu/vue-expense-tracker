<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactionList" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>{{ transaction.amount }} TL</span><button class="delete-btn">x</button>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        transactionList() {
            return this.$store.getters.getTransactions;
        }
    }
}
</script>
