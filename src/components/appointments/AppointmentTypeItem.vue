<template>
  <input
    type="radio"
    name="type-options"
    v-bind:id="getName()"
    class="btn-check"
    v-bind:value="type.id"
    required
    @click="$emit('selected', $event.target.value)"
  />
  <label v-bind:for="getName()" class="btn btn-outline-success m-2">
    {{ type.type + " - €" + type.price }}</label
  >
</template>

<script>
export default {
  name: "AppointmentTypeItem",
  emits: ["selected"],
  props: {
    type: Object,
  },
  methods: {
    getName() {
      return "type" + this.type.id;
    },
  },
};
</script>

<style>
</style>