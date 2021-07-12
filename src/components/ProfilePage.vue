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
      <!-- prevents the default action of submitting the form onclick of the button. then the click method is called.-->
      <form v-on:submit.prevent="click">
        <input
          type="text"
          placeholder="Enter the new language"
          v-model="newLanguage"
        />
        <button v-on:mouseover="mouseover">Click Me</button>
      </form>

      <h2>Click Counter {{ counter }}</h2>
      <button v-on:click="incrementCounter">
        Add To The Counter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
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
      newLanguage: "",
      counter: 0,
    };
  },
  methods: {
    click: function() {
      this.newLanguage =
        "this was changed on the fly, this is in the component state";
    },
    mouseover: function() {
      console.log("Your mouse moved over the button.");
    },
    incrementCounter: function() {
      this.counter = this.counter + 1;
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
