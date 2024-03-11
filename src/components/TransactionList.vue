<template>
    <h3>History</h3>
    <ul id="list" class="list">

        <li v-for="transaction in transactions" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>{{ transaction.amount }} TL</span><button class="delete-btn">x</button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            transactions: [
                { id: 1, text: 'Koltuk', amount: -20 },
                { id: 2, text: 'Monitör', amount: 300 },
                { id: 3, text: 'Masa', amount: -10 },
                { id: 4, text: 'Arduino UNO Set', amount: 150 }
            ],
        }
    },
}
</script>