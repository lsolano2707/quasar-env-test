<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <div class="col-12 q-my-md">
      <q-card class="full-height" flat bordered>
        <img :src="item.image" :alt="item.image" />
        <q-card-section-compact>
          <div class="text-caption text-grey"></div>

          <div class="text-caption text-grey">
            <p>{{ item.name }}</p>
          </div>
        </q-card-section-compact>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Category } from '../types/category.type';

defineProps({
  item: { type: Object as PropType<Category>, required: true },
});
</script>
