<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-10">
        <h4>Detail page</h4>
        {{ category }}
      </div>
    </div>
    <div class="row">
      <div class="col-auto">
        <q-btn
          rounded
          color="primary"
          @click="goToEditPage(categoryId)"
          :label="$t('buttons.edit')"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Composables
import { useCategories } from '../composables/useCategories';

// Variables
const route = useRoute();

const { fetchCategoryById, category, goToEditPage } = useCategories();
const categoryId = computed(() => Number(route.params.categoryId as string));

// Lifecycle
onMounted(() => {
  fetchCategoryById(categoryId.value);
});
</script>
