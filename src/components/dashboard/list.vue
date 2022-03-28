<template>
  <h1>Stock list</h1>
  <div class="row">
    <!-- Individual stocks -->
    <div class="col-md-4 mt-4" v-for="stock in stocks" :key="stock.name">
      <stock-item
        @buy="buyItem"
        :id="stock.id"
        :name="stock.name"
        :currency="stock.currency"
        :price="stock.price.toFixed(4)"
        :previousPrice="stock.previousPrice"
        :amount="stock.amount"
      ></stock-item>
    </div>
    <!-- End of individual stocks -->
  </div>
  <h1>Portfolio</h1>
  <div class="row">
    <div class="col-md-4 mt-4" v-for="p in portfolio" :key="p.name">
      <portfolio-item :item="p"></portfolio-item>
    </div>
  </div>
</template>

<script>
import StockItem from "./StockItem.vue";
import PortfolioItem from "./PortfolioItem.vue";

export default {
  name: "StockList",
  components: {
    StockItem,
    PortfolioItem,
  },
  data() {
    StockItem;
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 61.05,
          previousPrice: 0,
          currency: "€",
          amount: 100,
        },
        {
          id: 2,
          name: "Caterpillar",
          price: 146.49,
          previousPrice: 0,
          currency: "$",
          amount: 100,
        },
        {
          id: 3,
          name: "AMD",
          price: 76.5,
          previousPrice: 0,
          currency: "$",
          amount: 100,
        },
        {
          id: 4,
          name: "Gazprom",
          price: 4.583,
          previousPrice: 0,
          currency: "$",
          amount: 100,
        },
      ],
      portfolio: [],
    };
  },
  methods: {
    updatePrices() {
      this.stocks.forEach((stock) => {
        stock.previousPrice = stock.price;
        stock.price += (Math.random() - 0.5) * 2;
        if (stock.price < 0) {
          stock.price = 0;
        }
      });
    },
    buyItem(id, amount) {
      this.stocks.forEach((s) => {
        if (s.id == id) {
          if (s.amount - amount < 0) {
            alert("Not enough stock to buy!");
            return;
          }
          this.portfolio.forEach((p) => {
            if (p.id == s.id) {
              p.amount += amount;
            } else {
              this.portfolio.push({
                id: s.id,
                name: s.name,
                bought: amount,
                boughtPrice: amount * s.price,
              });
            }
          });
          s.amount -= amount;
        }
      });
    },
  },
  mounted() {
    setInterval(() => {
      this.updatePrices();
    }, 1000);
  },
};
</script>

<style scoped>
</style>