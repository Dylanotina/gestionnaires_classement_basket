<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./Pages/Index";

export default {
  name: "App",
  components: {
    Index
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: beige;
  background: linear-gradient(
    0deg,
    rgba(45, 60, 253, 1) 45%,
    rgba(34, 195, 185, 0.7455357142857143) 100%
  );
  height: 100%;
  width: 100%;
}
</style>
