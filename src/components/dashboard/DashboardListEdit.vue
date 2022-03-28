<template>
  <section>
    <div class="container">
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
          <select class="form-select" v-model="appointment.type">
            <option v-for="type in types" :key="type.id" :value="type.id">
              {{ type.type }}
            </option>
          </select>
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
        <button class="btn btn-primary m-1" @click="updateAppointment">
          Confirm
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";

export default {
  name: "DashboardListEdit",
  props: {
    id: String,
  },
  data() {
    return {
      appointment: {
        id: NaN,
        user_id: NaN,
        timeslot: NaN,
        email: null,
        name: null,
        endtime: null,
        starttime: null,
        type: NaN,
      },
      types: [],
      selectedType: NaN,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get("/appointments/" + this.id)
        .then((result) => {
          this.appointment = result.data;
        })
        .then(
          axios.get("/types").then((result) => {
            this.types = result.data;
          })
        )
        .catch((error) => {
          console.log(error);
        });
    },
    updateAppointment() {
      axios
        .put("/appointments/" + this.id, { type: this.appointment.type })
        .then((result) => {
          if (result.status === 200) {
            this.$router.replace("/dashboard");
          } else {
            alert("Something went wrong, please try again later.");
          }
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