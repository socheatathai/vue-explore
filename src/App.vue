<template>
  <Header /> <br />
  <router-view /> <br />
  <Footer :item="item" :itemTwo="itemTwo" />
</template>

<script>
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const item = ref("props From App.vue");
    const itemTwo = ref("props From App.vue Two");

    return {
      item,
      itemTwo
    };
  }
};
</script>
