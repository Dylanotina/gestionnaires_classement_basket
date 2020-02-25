<template>
  <div class="addmatch">
    <div class="TitleajoutEquipe">
      <h1>Ajouter une équipe</h1>
      <h4>Vous voulez ajouter une équipe?</h4>
      <h5>Veuillez ajouter votre nom d'équipe en dessous</h5>
    </div>
    <div class="ajoutEquipe">
      <form>
        <input class="form-control" type="text" v-model="nameTeam" />
        <input type="button" class="btn btn-primary" value="envoyer" v-on:click="onSubmit" />
      </form>
    </div>
    <div class="alert alert-success alert-dismissible fade show" id="change" v-show="texte != null">
      {{texte}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addEquipe",
  data() {
    return {
      nameTeam: null,
      texte: null
    };
  },
  methods: {
    onSubmit() {
      if (this.nameTeam != null) {
        axios
          .post("http://localhost:3001/equipes/add", { name: this.nameTeam })
          .then(response => (this.texte = response.data))
          .catch(e => this.errors.push(e));
        this.nameTeam = "";
      } else {
        let element = document.getElementById("change");
        element.className = "alert alert-danger alert-dismissible fade show";
        this.texte = "Erreur, vous n'avez pas ajouté d'équipe";
      }
    }
  }
};
</script>

<style scoped>
.btn {
  margin-top: 2.5%;
}

.alert {
  margin-top: 2.5%;
}
</style>