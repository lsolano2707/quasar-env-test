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
          name: 'categories-detail',
          params: { categoryId: item.id },
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
import Card from 'src/modules/categories/components/Card.vue';

// Types
import { Category } from '../types/category.type';

defineProps({
  items: { type: Array as PropType<Category[]>, required: true },
});
</script>
