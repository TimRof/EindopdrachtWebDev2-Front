<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Dashboard</h2>
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
import DashboardListItem from "./DashboardListItem.vue";

export default {
  name: "DashboardList",
  components: { DashboardListItem },
  data() {
    return { appointments: [] };
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
        .get("/appointments")
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