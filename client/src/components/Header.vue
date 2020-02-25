<template>
  <div class="header"></div>
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
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
  width: 100%;
  height: 80px;
  color: beige;
  text-align: center;
  font-size: 25px;
}
</style>