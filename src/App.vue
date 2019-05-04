<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "anatta-design-app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
