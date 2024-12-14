<template>
  <div v-if="ifelse">
    <h1>if true</h1>
  </div>
  <div v-else>
    <h1>else true</h1>
  </div>
  
  <button @click="ifelse = !ifelse">Toggle</button>
  
   <div  v-for="num in number" :key="num.id">{{ num.name }}</div>    
  <h2>Random Number: {{ randomName }}</h2>
  <button @click="Random">Random</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const ifelse = ref(true); 

    const change = () => {
      ifelse.value = !ifelse.value;
    };

    const number = ref([
      { id: 1, name: "one" },
      { id: 2, name: "two" },
      { id: 3, name: "three" },
      { id: 4, name: "four" },
      { id: 5, name: "five" },
      { id: 6, name: "six"},
    ]);

    const randomName = ref("");

    const Random = () => {
      const randomIndex = Math.floor(Math.random() * number.value.length);
      randomName.value = number.value[randomIndex].name;
    };

    return {
      ifelse,
      change,
      number,
      randomName,
      Random
    };
  }
};
</script>
