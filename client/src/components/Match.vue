<template>
  <div class="matchs">
    <div class="TitleMatch">
      <h1>Matchs</h1>
      <h4>Voici une petite liste des matchs qui ont déja eu lieu:</h4>
    </div>
    <table>
      <thead>
        <tr>
          <td>Domicile</td>
          <td>Visiteurs</td>
          <td>Score Dom</td>
          <td>Score Visit</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(match, index) in matchs" :key="index">
          <td>{{match.EquipeDomName}}</td>
          <td>{{match.EquipeVisitName}}</td>
          <td>{{match.EquipeDomScore}}</td>
          <td>{{match.EquipeVisitScore}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "match",
  data() {
    return {
      matchs: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/matchs")
      .then(response => {
        console.log(response);
        this.matchs = response.data;
      })
      .catch(e => this.errors.push(e));
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 2px solid black;
}
</style>