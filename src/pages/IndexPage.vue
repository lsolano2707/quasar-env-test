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
    environment: {{ environment }}
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Composables
import { useProduct } from 'src/modules/products/composables/useProducts';
import { useCategories } from 'src/modules/categories/composables/useCategories';

// Constants
import { ENVIRONMENT } from 'src/modules/common/constants/env.constant';

// Variables
const { goToHomePage: goToProductsPage } = useProduct();
const { goToHomePage: goToCategoryPage } = useCategories();
const environment = ref(ENVIRONMENT);
</script>
