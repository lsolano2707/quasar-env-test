<template>
  <q-page class="row items-center justify-evenly">
    <h1>ENV TEST - QUASAR 2</h1>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('VITE_ENVIRONMENT', process.env.VITE_ENVIRONMENT);
  console.log('ENVIRONMENT', process.env.ENVIRONMENT);
  console.log('API_URL', process.env.API_URL);
});
</script>
