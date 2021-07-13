<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'ContactUs', params: { userName: 'Ross' } }"
            >Contact Us</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view />
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
export default {
  name: "App",
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

nav ul li {
  margin-right: 20px;
  list-style-type: none;
  display: inline-block;
}
</style>
