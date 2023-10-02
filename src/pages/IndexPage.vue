<template>
  <q-page class="row items-center justify-evenly">
    <h1>ENV TEST - QUASAR</h1>
    <!-- <div class="col-auto q-mr-sm">
      <q-btn
        color="primary"
        rounded
        @click="goToProductsPage"
        :label="$t('buttons.products')"
      />
    </div>
    <div class="col-auto q-mr-sm">
      <q-btn
        color="primary"
        rounded
        @click="goToCategoryPage"
        :label="$t('buttons.categories')"
      />
    </div> -->
    <!-- environment:: {{ process.env.ENVIRONMENT }} -->
    <br>
    environment 1:: {{ environment }}
    <br>
    environment 2:: {{ environment2 }}
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('ENVIRONMENT', process.env.ENVIRONMENT);
  console.log('API_URL', process.env.API_URL);
});
</script>
