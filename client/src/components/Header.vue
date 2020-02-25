<template>
  <div class="header">
    <router-link to="/">
      <h3>Gestion Classement tournoi basket</h3>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
</style>