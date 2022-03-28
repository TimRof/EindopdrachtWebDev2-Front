<template>
  <div class="card h-100">
    <div class="card-body text-center">
      <div>#{{ appointment.id }}</div>
    </div>
    <div class="mx-3 mb-2">
      Name:
      <strong>{{ appointment.name }}</strong>
    </div>
    <div class="mx-3 mb-2">
      Type:
      <strong>{{ appointment.type }}</strong>
    </div>
    <div class="mx-3 mb-2">
      Date:
      <strong>{{
        new Date(appointment.starttime).toLocaleDateString()
      }}</strong>
    </div>
    <div class="mx-3 mb-2">
      Time:
      <strong>{{
        new Date(appointment.starttime).toLocaleTimeString().slice(0, -3)
      }}</strong
      >-<strong>{{
        new Date(appointment.endtime).toLocaleTimeString().slice(0, -3)
      }}</strong>
    </div>
    <button
      class="btn btn-primary m-1"
      @click="editAppointment(appointment.id)"
    >
      Edit
    </button>
    <button
      class="btn btn-danger m-1"
      @click="deleteAppointment(appointment.id)"
    >
      Delete
    </button>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "DashboardListItem",
  props: {
    appointment: Object,
  },
  mounted() {
    console.log(this.appointment);
  },
  methods: {
    editAppointment(id) {
      this.$router.push("/dashboard/edit/" + id);
    },
    deleteAppointment(id) {
      let msg = "Are you sure you want to delete this appointment?";
      if (confirm(msg) == true) {
        axios
          .delete("/appointments/" + id)
          .then((result) => {
            if (result.data === true) {
              this.$emit("update");
            } else {
              alert("Something went wrong, please try again later.");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>