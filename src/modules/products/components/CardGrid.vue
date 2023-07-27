<template>
  <div v-if="items.length" class="row justify-center">
    <div
      class="col-12 col-sm-6 col-md-3 q-px-sm q-mb-md"
      v-for="item in items"
      :key="item.id"
    >
      <!-- {{ item }} -->
      <router-link
        :to="{
          name: 'products-detail',
          params: { productId: item.id },
        }"
      >
        <Card :item="item" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

//Components
import Card from '../components/Card.vue';

// Types
import { Product } from '../types/product.type';

defineProps({
  items: { type: Array as PropType<Product[]>, required: true },
});
</script>
