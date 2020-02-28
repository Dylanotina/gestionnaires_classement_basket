<template>
  <div class="header">
    <router-link to="/">
      <h3>Gestion Classement tournoi basket</h3>
    </router-link>
    <div class="connexion">
      <router-link to="/auth">
        <button class="btn btn-primary" v-if="connecte">Log in</button>
      </router-link>
      <button class="btn btn-danger" v-if="!connecte">Log out</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      connecte: true
    };
  }
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: flex-start;
  background-color: #2c2c2c;
  width: 100%;
  height: 80px;
  color: beige;
  text-align: center;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: beige;
}

.connexion {
  display: flex;
  justify-content: flex-end;
  padding-left: 60%;
}
</style>