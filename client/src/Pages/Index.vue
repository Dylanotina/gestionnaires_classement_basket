<template>
  <div class="home">
    <Header />
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Index",
  components: {
    Header
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
}
.router {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: red;
  width: 1080px;
  padding-top: 82px;
}
</style>