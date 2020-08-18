<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  computed: {
    stocks() {
      return this.$store.getters.stockPortfolio;
    },
  },
  components: {
    appStock: Stock,
  },
};
</script>