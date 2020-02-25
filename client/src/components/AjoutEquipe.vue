<template>
  <div class="addmatch">
    <div class="TitleajoutEquipe">
      <h1>Ajouter une équipe</h1>
      <h4>Vous voulez ajouter une équipe?</h4>
      <h5>Veuillez ajouter votre nom d'équipe en dessous</h5>
    </div>
    <div class="ajoutEquipe">
      <form>
        <input type="text" v-model="nameTeam" />
        <input type="button" value="envoyer" v-on:click="onSubmit" />
      </form>
    </div>
    <div class="texte_equipe_ajouté">
      <p>{{texte}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addEquipe",
  data() {
    return {
      nameTeam: "",
      texte: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.nameTeam != null)
        axios
          .post("http://localhost:3001/equipes/add", { name: this.nameTeam })
          .then(response => (this.texte = response.data))
          .catch(e => this.errors.push(e));
      this.nameTeam = "";
    }
  }
};
</script>

<style>
</style>