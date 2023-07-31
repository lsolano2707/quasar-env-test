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
        @click="goToCategoryPage"
        :label="$t('buttons.categories')"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Composables
import { useProduct } from 'src/modules/products/composables/useProducts';
import { useCategories } from 'src/modules/categories/composables/useCategories';

// Variables
const { goToHomePage: goToProductsPage } = useProduct();
const { goToHomePage: goToCategoryPage } = useCategories();
</script>
