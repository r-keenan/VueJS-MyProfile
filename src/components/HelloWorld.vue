<template>
  <div class="profile">
    <h1>Hello {{ userName }}</h1>
    <!-- :src="profileImage" is the short hand way to bind the data.-->
    <img :src="profileImage" width="250" />
    <div class="bio">
      <p>{{ userBio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    userName: String,
    profileImage: String,
    userBio: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}

.bio p {
  font-style: italic;
}
</style>
