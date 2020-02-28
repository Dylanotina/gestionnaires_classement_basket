<template>
  <div class="limiter">
    <div class="container-login100">
      <form>
        <p>Log in</p>
        <div class="form-group" data-validate="Enter username">
          <input
            class="form-control"
            type="text"
            name="username"
            placeholder="Username"
            v-model="form.username"
          />
        </div>

        <div class="form-group" data-validate="Enter password">
          <input
            class="form-control"
            type="password"
            name="pass"
            placeholder="Password"
            v-model="form.password"
          />
        </div>

        <div class="container-login100-form-btn">
          <button class="btn btn-secondary" @click.prevent="testAuth">Login</button>
        </div>

        <div
          class="alert alert-danger alert-dismissible fade show"
          id="change"
          v-if="texte != null"
        >
          {{texte}}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="reset"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Authentification",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      texte: null
    };
  },
  methods: {
    testAuth() {
      axios
        .post("http://localhost:3001/auth", {
          username: this.form.username,
          password: this.form.password
        })
        .then(response => {
          alert(response.data.success);
          if (response.data.success == true) {
            //this.$router.push({ name: "home" });
          } else {
            console.log(response.data.success + ":" + response.data.message);
          }
        })
        .catch(
          () =>
            (this.texte =
              "L'username ou le password n'est pas bon. Veuillez réessayer.")
        );
    },
    reset() {
      this.texte = null;
    }
  }
};
</script>

<style>
</style>