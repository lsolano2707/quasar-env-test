<template>
  <p>{{ $t('message') }}</p>
  <p>{{ $t('greeting', { name: 'Leo' }) }}</p>
  <p>{{ $t('labels.product', 2) }}</p>
  <div class="row justify-end">
    <div class="col-auto">
      <q-btn rounded color="primary" icon="add" @click="goToCreatePage" />
    </div>
  </div>

  <CardGrid :items="products" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Components
import CardGrid from '../components/CardGrid.vue';

// Composables
import { useProduct } from '../composables/useProducts';

// Variables
const { products, fetchProducts, goToCreatePage } = useProduct();

// Lifecycle
onMounted(() => {
  fetchProducts();
});
</script>
