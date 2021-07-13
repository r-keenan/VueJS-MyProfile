<template>
  <div>
    <h1>Contact Us</h1>
    <p>Hello {{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      userName: this.$route.params.userName,
    };
  },
};
</script>
