<template>
  <div class="profile">
    <h1>Hello {{ userName }}</h1>
    <!-- :src="profileImage" is the short hand way to bind the data.-->
    <img :src="profileImage" width="250" />
    <div class="bio">
      <p>{{ userBio }}</p>
      <ul>
        <!--This loops over the languages array. Needs key, value pair. -->
        <li v-for="(item, index) in languages" :key="index">
          {{ item.langName }} | Founded: {{ item.dateCreated }}
        </li>
      </ul>
      <button v-on:click="click" v-on:mouseover="mouseover">Click Me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      languages: [
        {
          langName: "Python",
          dateCreated: "1989",
        },
        {
          langName: "JavaScript",
          dateCreated: "1995",
        },
      ],
    };
  },
  methods: {
    click: function() {
      alert("Hello, you clicked the button!");
    },
    mouseover: function() {
      console.log("Your mouse moved over the button.");
    },
  },
  props: {
    userName: String,
    profileImage: String,
    userBio: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}

.bio {
  p {
    font-style: italic;
  }
  li {
    list-style-type: none;
  }
}
</style>
