<template>
  <div class="card">
    <div class="card-body">
      <td>{{ "(" + id + ") " + name + " (" + amount + ")" }}</td>
      <span
        :class="{
          down: price < previousPrice,
          up: price > previousPrice,
        }"
        >{{ currency }} {{ price }}</span
      >
    </div>
    <input
      type="number"
      name="amount"
      id="amount"
      placeholder="Buy stock..."
      v-model="buyamount"
      @buy="buyItem()"
    />
    <button class="button is-primary" @click="$emit('buy', id, buyamount)">
      Buy stock
    </button>
  </div>
</template>

<script>
export default {
  name: "StockItem",
  props: {
    id: Number,
    name: String,
    currency: String,
    price: String,
    previousPrice: Number,
    amount: Number,
    // stock: Object
  },
  data() {
    return {
      buyamount: 1,
    };
  },
};
</script>

<style scoped>
.up {
  color: green;
}
.down {
  color: red;
}
</style>