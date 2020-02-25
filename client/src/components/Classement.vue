<template>
  <div class="classement">
    <div class="TitleClassment">
      <h1>Classement</h1>
      <h4>Ici vous pouvez voir votre classement:</h4>
    </div>

    <table class="tabclass">
      <thead>
        <tr>
          <td>Nom de l'équipe</td>
          <td>Victoires</td>
          <td>Défaites</td>
          <td>Points Marqués</td>
          <td>Points Encaissés</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(equipe, index) in equipes" v-bind:key="index">
          <td>{{equipe.name}}</td>
          <td>{{equipe.wins}}</td>
          <td>{{equipe.losses}}</td>
          <td>{{equipe.PointsScored}}</td>
          <td>{{equipe.PointsAllowed}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Classement",
  data() {
    return {
      equipes: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/equipes")
      .then(response => {
        this.equipes = response.data;
      })

      .catch(err => this.errors.push(err));
  }
};
</script>

<style scoped>
.classement {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.TitleClassment {
  display: flex;
  flex-direction: column;
}
.TitleClassment h1 {
  margin-bottom: 10px;
  margin-top: 20px;
}
.TitleClassment h4 {
  margin-bottom: 30px;
  margin-top: 5px;
}

table,
th,
td {
  border: 2px solid black;
}
</style>