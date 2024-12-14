<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <RouterLink :to="{name: 'Home'}">Home</RouterLink>
        <br>
        <RouterLink :to="{name: 'About'}">About</RouterLink>
    </div>
</template>