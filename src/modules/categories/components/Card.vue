<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <div class="col-12 q-my-md">
      <q-card class="full-height" flat bordered>
        <!-- <img :src="item.image" :alt="item.category.image" /> -->
        <q-card-section-compact>
          <div class="text-subtitle1 text-center">
            {{ item.id }}
          </div>

          <div class="text-caption text-grey">
            <p>{{ item.name }}</p>
          </div>

          <div class="text-caption text-grey">
            <p>{{ item.image }}</p>
          </div>
        </q-card-section-compact>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: { type: Object, required: true },
});
</script>
