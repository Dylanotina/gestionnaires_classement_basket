<template>
  <div class="container">
    <router-link to="Classement">
      <div class="affichageClassement">
        <h4>Classement</h4>
      </div>
    </router-link>
    <router-link to="/matchs">
      <div class="affichagematch">
        <h4>Matchs</h4>
      </div>
    </router-link>
    <router-link to="/equipes/add">
      <div class="addTeam">
        <h4>Ajouter une équipe</h4>
      </div>
    </router-link>
    <router-link to="/matchs/add">
      <div class="addMatch">
        <h4>Ajouter un match</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 60%;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: center;
}
.container div {
  color: white;
  background-color: aqua;
  width: 100%;
}

a {
  text-decoration: none;
  width: calc(100%-200px);
}
</style>