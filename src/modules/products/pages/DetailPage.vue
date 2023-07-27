<template>
  <q-page>
    <div>
      <h4>Detail page</h4>
      {{ product }}
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Composables
import { useProduct } from '../composables/useProducts';

// Variables
const route = useRoute();

const { fetchProductById, product } = useProduct();
const productId = computed(() => Number(route.params.productId as string));

// Lifecycle
onMounted(() => {
  fetchProductById(productId.value);
});
</script>
