<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-auto q-mr-sm">
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
        @click="goToProductsPage"
        :label="$t('buttons.categories')"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Composables
import { useProduct } from 'src/modules/products/composables/useProducts';

// Variables
const { goToHomePage: goToProductsPage } = useProduct();
</script>
