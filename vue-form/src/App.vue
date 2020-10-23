<template>
  <div id="app">
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }">
      <a-form-item label="Email">
        <a-input />
      </a-form-item>
      <a-form-item label="First Name">
        <a-input />
      </a-form-item>
      <a-form-item label="Last Name">
        <a-input />
      </a-form-item>
      <a-form-item label="Phone Number">
        <a-input style="width: 100%" />
      </a-form-item>
      <div>
        <a-form-item :wrapper-col="{ span: 1 }" label="Guests">
          <a-button type="primary" html-type="submit" @click="addGuest">
            +
          </a-button>
        </a-form-item>
      </div>
      <div v-for="(guest, index) in guests" :key="guest.id" @dblclick="deleteGuest(index)">
        <a-form-item label="Guest" v-model="guests[index]">
          <a-input />
        </a-form-item>
      </div>
      <a-form-item :wrapper-col="{ span: 8, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { Form } from "ant-design-vue/lib/form-model";
export default {
  name: "App",
  components: Form,
  data: () => {
    return {
      form: {},
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      guests: [],
    };
  },
  methods: {
    addGuest() {
      this.guests.push("");
    },
    deleteGuest(index) {
      this.guests.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2rem;
}
</style>
