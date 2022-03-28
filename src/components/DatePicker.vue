<template>
  <Datepicker
    required
    autoApply
    v-model="date"
    format="dd/MM/yyyy"
    :minDate="minDate()"
    :maxDate="maxDate()"
    :enableTimePicker="false"
  ></Datepicker>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

export default {
  name: "DatePicker",
  components: { Datepicker },
  setup() {
    const date = ref(new Date());
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };

    return {
      date,
      format,
    };
  },
  methods: {
    minDate() {
      return new Date();
    },
    maxDate() {
      return new Date(new Date().setDate(new Date().getDate() + 21));
    },
  },
};
</script>

<style>
</style>