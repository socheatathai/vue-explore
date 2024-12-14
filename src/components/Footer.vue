<template>
  <div>
    <h1>Footer</h1>
    <h2>{{ item }}</h2>
    <h2>{{ itemTwo }}</h2>
  </div>
</template>

<script>


export default {
  props: ["item", "itemTwo"],
  setup(props) {
    return {
      ...props
    };
  }
};
</script>
