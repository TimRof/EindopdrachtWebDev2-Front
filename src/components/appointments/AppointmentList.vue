<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Appointments</h2>
      <h4 class="mt-4">Choose date:</h4>
      <form @submit.prevent="formSubmit">
        <date-picker
          v-model="selectedDate"
          @update:modelValue="getSlots"
        ></date-picker>
        <h4 class="mt-4">Choose time:</h4>
        <appointment-list-item
          @selected="slotSelected"
          v-for="timeSlot in timeSlots"
          :key="timeSlot.id"
          :timeSlot="timeSlot"
        />
        <h4 class="mt-4">Choose type:</h4>
        <appointment-type-item
          @selected="typeSelected"
          v-for="type in types"
          :key="type.id"
          :type="type"
        />
        <div class="d-flex justify-content-center mt-3 login_container">
          <button
            type="button"
            class="btn btn-lg btn-primary me-1 rounded-pill m-2"
            :disabled="selectedSlot === null || selectedType === null"
            @click="createAppointment"
          >
            Make appointment
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
import DatePicker from "../DatePicker.vue";
import AppointmentListItem from "./AppointmentListItem.vue";
import AppointmentTypeItem from "./AppointmentTypeItem.vue";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "AppointmentList",
  components: {
    DatePicker,
    AppointmentListItem,
    AppointmentTypeItem,
  },
  data() {
    return {
      selectedDate: new Date(),
      timeSlots: [],
      types: [],
      selectedSlot: null,
      selectedType: null,
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      this.getSlots();
      this.getTypes();
    },
    getSlots() {
      axios
        .get("/slots/" + this.selectedDate.getTime().toString().slice(0, -3))
        .then((result) => {
          this.timeSlots = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTypes() {
      axios.get("/types").then((result) => {
        this.types = result.data;
      });
    },
    slotSelected(id) {
      this.selectedSlot = id;
    },
    typeSelected(id) {
      this.selectedType = id;
    },
    createAppointment() {
      if (this.selectedSlot !== null && this.selectedType !== null) {
        axios
          .post("/appointments", {
            id: this.$store.state.id,
            date: this.selectedDate.getTime().toString().slice(0, -3),
            timeslot: this.selectedSlot,
            type: this.selectedType,
          })
          .then((result) => {
            this.$router.push({
              name: "AppointmentSuccess",
              params: {
                start: result.data.starttime,
                end: result.data.endtime,
              },
            });
          })
          .catch((error) => {
            alert(
              "\nOops!\n\nSomething went wrong making your appointment, please try again later."
            );
            console.log(error);
            this.resetButtons();
          });
      }
    },
    resetButtons() {
      this.timeSlots = [];
      this.selectedSlot = null;
      this.types = [];
      this.selectedType = null;
      this.loadItems();
    },
  },
};
</script>
<style>
.container {
  width: 30%;
}
</style>