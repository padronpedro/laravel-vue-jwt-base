<template>
  <div>
    Login {{ errors }}
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <button @click="getUser">Get User</button>
    <hr>
    Vuex: [{{ vuexData }}]
    <button @click="setVuexData">Set Vuex Data</button>
    <button @click="getVuexData">Get Vuex Data</button>
    <button @click="deleteVuexData">Delete Vuex Data</button>
  </div>
</template>

<script>
import apiClient from "../services/api";
import "@/mixins/global.js";

export default {
  data() {
    return {
      email: null,
      password: null,
      loading: false,
      errors:[],
      vuexData: ''
    };
  },
  methods: {
    async login() {
      this.loading = true; // can use this to toggle a :disabled on login button
      this.errors = [];

      this.email = 'a@a.com'
      this.password = 'a'

      try {
        await apiClient.get("/sanctum/csrf-cookie");
        await apiClient.post("/login", {
          email: this.email,
          password: this.password,
        });

        // Do something amazing
        console.log('logged')
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      this.loading = false;
    },
    async logout() {
      try {
        await apiClient.get("/logout");
        // Do something amazing
        console.log('logged out')
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }
    },
    async getUser() {
      try {
        await apiClient.get("/sanctum/csrf-cookie");
        await apiClient.get("api/user").then((response) => {
          console.log(response.data);
        });
        // Do something amazing
        console.log('logged out')
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }
    },
    setVuexData() {
      this.$store.dispatch('setUserData', 'test vuex data')
    },
    getVuexData() {
      this.vuexData = this.getUserInfo()
    },
    deleteVuexData() {
      this.$store.dispatch('deleteUserData')
      this.vuexData = null
    }
  },
};
</script>

<style>
</style>