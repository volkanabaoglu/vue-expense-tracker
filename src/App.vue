<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Balance from './components/Balance.vue';
  import IncomeExpenses from './components/IncomeExpenses.vue';
  import TransactionList from './components/TransactionList.vue';

  export default {
    components: {
      Header,
      Balance,
      IncomeExpenses,
      TransactionList
    }
  }
</script>