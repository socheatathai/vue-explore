

<template>
  <Header />
  <router-view /> 
  <input type="text" placeholder="Enter your name" v-model="name" />
  <button @click="submit">Submit</button>
  <Footer />
</template>

<script>
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import Header from "./components/header.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const name = ref("");

    const submit = () => {
      alert(name.value.length);
    };

    return {
      name,
      submit,
    };
  },
};
</script>
