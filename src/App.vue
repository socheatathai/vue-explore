<script>
export default {
  data: () => ({
    jsFrameworks: ["react.js", "vue.js", "angular"],
    backendFrameworks: [],
  }),
  methods: {
    handleChange(tags) {
      this.jsFrameworks = [...tags];
    },
  },
};
</script>

<template>
  <h1>Your favorite frameworks</h1>
  <div>{{ jsFrameworks }}</div>
  <tags-input :selected-tags="jsFrameworks" @change="handleChange" />

  <div>{{ backendFrameworks }}</div>
  <tags-input
    :selected-tags="backendFrameworks"
    @change="backendFrameworks = [...$event]"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: blue;
}
</style>
