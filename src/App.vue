<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template> 

<script setup>
  import Header from './components/Header.vue';
  import Balance from './components/Balance.vue';
  import IncomeExpenses from './components/IncomeExpenses.vue';
  import TransactionList from './components/TransactionList.vue';
  import AddTransaction from './components/AddTransaction.vue';

  const transactions = [
            { id: 1, text: 'Koltuk', amount: -20 },
            { id: 2, text: 'Monitör', amount: 300 },
            { id: 3, text: 'Masa', amount: -10 },
            { id: 4, text: 'Arduino UNO Set', amount: 150 }
        ],
</script>