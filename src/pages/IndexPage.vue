<template>
  <q-page class="row q-pa-md">
    <div class="col-12">
      <h4>ENV TEST - QUASAR 2</h4>
    </div>
    <div class="col-4">

      <CountryStateCity v-model="country" label="label" />
      <br>
      country: {{ country }}
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import CountryStateCity from '../components/CountryStateCity.vue';

const country = ref();

onMounted(() => {
  console.log('TEST', process.env.TEST);
  console.log('ENVIRONMENT', process.env.ENVIRONMENT);
  console.log('API_URL', process.env.API_URL);
  console.log('ENVs', process.env);
});
</script>
