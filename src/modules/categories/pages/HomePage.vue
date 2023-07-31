<template>
  <p>{{ $t('labels.categories', 2) }}</p>
  <div class="row justify-end">
    <div class="col-auto">
      <q-btn rounded color="primary" icon="add" @click="goToCreatePage" />
    </div>
  </div>

  <CardGrid :items="categories" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Components
import CardGrid from 'src/modules/categories/components/CardGrid.vue';

// Composables
import { useCategories } from '../composables/useCategories';

// Variables
const { categories, fetchCategories, goToCreatePage } = useCategories();

// Lifecycle
onMounted(() => {
  fetchCategories();
});
</script>
