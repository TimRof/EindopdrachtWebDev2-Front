<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Dashboard</h2>
      <h4 class="mt-4">Choose date:</h4>
      <date-picker
        v-model="selectedDate"
        @update:modelValue="loadItems"
      ></date-picker>
      <h4 class="mt-4">Appointments:</h4>
      <div class="row">
        <div
          class="col-md-5 mt-3"
          v-for="appointment in appointments"
          :key="appointment.id"
        >
          <dashboard-list-item
            :appointment="appointment"
            @update="loadItems"
          ></dashboard-list-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
import DatePicker from "../DatePicker.vue";
import DashboardListItem from "./DashboardListItem.vue";

export default {
  name: "DashboardList",
  components: {
    DatePicker,
    DashboardListItem,
  },
  data() {
    return {
      selectedDate: new Date(),
      appointments: [],
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      this.getAppointments();
    },
    getAppointments() {
      axios
        .get("/appointments", {
          params: {
            epoch: this.selectedDate.getTime().toString().slice(0, -3),
          },
        })
        .then((result) => {
          this.appointments = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
</style>