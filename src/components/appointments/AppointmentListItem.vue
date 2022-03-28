<template>
  <input
    type="radio"
    name="time-options"
    v-bind:id="getName()"
    class="btn-check"
    v-bind:value="timeSlot.timeslot"
    :disabled="
      timeSlot.taken === true || new Date(timeSlot.start.date) < new Date()
    "
    required
    @click="$emit('selected', $event.target.value)"
  />
  <!-- start and end time epoch to proper format -->
  <label v-bind:for="getName()" class="btn btn-outline-success m-2">
    {{ new Date(timeSlot.start.date).toLocaleTimeString().slice(0, -3) }} -
    {{ new Date(timeSlot.end.date).toLocaleTimeString().slice(0, -3) }}</label
  >
</template>

<script>
export default {
  name: "AppointmentListItem",
  emits: ["selected"],
  props: {
    timeSlot: Object,
  },
  methods: {
    getName() {
      return "slot" + this.timeSlot.timeslot;
    },
  },
};
</script>

<style>
</style>