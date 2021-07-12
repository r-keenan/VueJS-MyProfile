<template>
  <div class="profile">
    <h1>Hello {{ userName }}</h1>
    <!-- :src="profileImage" is the short hand way to bind the data.-->
    <img :src="profileImage" width="250" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    userName: String,
    profileImage: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
