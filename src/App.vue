<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld
      userName="RossKeenan"
      profileImage="https://rosskeenan.com/wp-content/uploads/2020/07/Photo-Jul-10-7-22-30-PMsmaller-2.jpg"
    />
    <!--
    <Commmenting out Bob. We only want one profile in the view at a time.
      HelloWorld
      userName="Bob"
      profileImage="https://happymag.tv/wp-content/uploads/2020/09/bob-ross-FP.jpg"
    />
    -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
