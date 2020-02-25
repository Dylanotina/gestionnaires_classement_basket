<template>
  <div class="ajoutmatch">
    <div class="TitleajoutMatch">
      <h1>Ajouter un match</h1>
      <h4>Vous pouvez ajouter les résultats de votre match ici</h4>
    </div>
    <div class="ajoutMatch">
      <form>
        <div class="form-group">
          <label for="nameDomicile">Team Domicile:</label>
          <select
            name
            id="nameDomicile"
            class="custom-select"
            @change="addTeamDomicile"
            :v-bind="teamDom"
          >
            <option selected>Team domicile</option>
            <option
              v-for="(equipe,index) in equipes "
              :key="index"
              :value="equipe.name"
            >{{equipe.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nameVisiteuse">Team Visiteuse:</label>
          <select
            name
            id="nameVisiteuse"
            class="custom-select"
            @change="addTeamVisiteuse"
            :v-bind="teamVisit"
          >
            <option selected>Team Visiteuse</option>
            <option
              v-for="(equipe,index) in equipes "
              :key="index"
              :value="equipe.name"
            >{{equipe.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ScoreDom">Score Team Domicile:</label>
          <input type="text" class="form-control" id="ScoreDom" v-model="ScoreDom" />
        </div>
        <div class="form-group">
          <label for="ScoreVisit">Score Team Visiteuse:</label>
          <input type="text" class="form-control" id="ScoreVisit" v-model="ScoreVisit" />
        </div>
        <button class="btn btn-primary" @click.prevent="OnSubmit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ajoutMatch",
  data() {
    return {
      equipes: [],
      teamDom: "",
      teamVisit: "",
      ScoreDom: 0,
      ScoreVisit: 0
    };
  },

  methods: {
    addTeamDomicile() {
      this.teamDom = document.getElementById("nameDomicile").value;
      console.log(this.teamDom);
    },
    addTeamVisiteuse() {
      this.teamVisit = document.getElementById("nameVisiteuse").value;
      console.log(this.teamVisit);
    },
    OnSubmit() {
      if (this.ScoreDom > this.ScoreVisit) {
        axios
          .post("http://localhost:3001/matchs/add", {
            EquipeDomName: this.teamDom,
            EquipeVisitName: this.teamVisit,
            EquipeDomScore: this.ScoreDom,
            EquipeVisitScore: this.ScoreVisit,
            winner: this.teamDom,
            looser: this.teamVisit
          })
          .then(() => {
            axios.post(`http://localhost:3001/equipes/update/`, {
              name: this.teamDom,
              wins: 1,
              losses: 0,
              PointsScored: this.ScoreDom,
              PointsAllowed: this.ScoreVisit
            });
          })
          .then(() => {
            axios.post(`http://localhost:3001/equipes/update/`, {
              name: this.teamVisit,
              wins: 0,
              losses: 1,
              PointsScored: this.ScoreVisit,
              PointsAllowed: this.ScoreDom
            });
          })
          .then(response => console.log(response))
          .catch(err => {
            console.error(err);
          });
      } else {
        axios
          .post("http://localhost:3001/matchs/add", {
            EquipeDomName: this.teamDom,
            EquipeVisitName: this.teamVisit,
            EquipeDomScore: this.ScoreDom,
            EquipeVisitScore: this.ScoreVisit,
            winner: this.teamVisit,
            looser: this.teamDom
          })
          .then(() => {
            axios.post(`http://localhost:3001/equipes/update/`, {
              name: this.teamDom,
              wins: 0,
              losses: 1,
              PointsScored: this.ScoreDom,
              PointsAllowed: this.ScoreVisit
            });
          })
          .then(() => {
            axios.post(`http://localhost:3001/equipes/update/`, {
              name: this.teamVisit,
              wins: 1,
              losses: 0,
              PointsScored: this.ScoreVisit,
              PointsAllowed: this.ScoreDom
            });
          })
          .then(response => console.log(response))
          .catch(err => console.error(err));
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3001/equipes")
      .then(response => (this.equipes = response.data))
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style>
.ajoutMatch {
  margin-top: 5%;
}
</style>