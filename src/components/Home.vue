<template>
  <button @click="increment">Increment</button>
  <h1>this is count {{ count }}</h1>
  <button @click="decrement">Decrement</button>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../pinia/Store";

export default {

  setup() {

    const { increment , decrement } = useCounterStore();
    const count = storeToRefs(useCounterStore()).count;

    return {
      count,
      increment,
      decrement
    };
  }
};
</script>
