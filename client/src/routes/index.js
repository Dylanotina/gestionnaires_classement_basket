import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Classement from "../components/Classement.vue";
import AjoutEquipe from "../components/AjoutEquipe.vue";
import AjoutMatch from "../components/AjoutMatch.vue";
import Match from "../components/Match.vue";
import Authentification from "../components/Authentification.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/classement",
    name: "classement",
    component: Classement
  },
  {
    path: "/equipes/add",
    name: "ajoutEquipe",
    component: AjoutEquipe
  },
  {
    path: "/matchs/add",
    name: "ajoutMatch",
    component: AjoutMatch
  },
  {
    path: "/matchs",
    name: "Match",
    component: Match
  },
  { path: "/auth", name: "Authentification", component: Authentification }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
