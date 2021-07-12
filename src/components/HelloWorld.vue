<template>
  <div class="profile">
    <h1>Hello {{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    userName: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
