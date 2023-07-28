<template>
  <q-page class="q-pa-md">
    <div class="row">
      <!-- Title -->
      <div class="col-12 col-md-6 q-py-md q-px-md">
        <q-input
          v-model="form.title"
          :label="$t('labels.title')"
          outlined
          dense
        />
      </div>
      <!-- /Title -->

      <!-- Price -->
      <div class="col-12 col-md-6 q-py-md q-px-md">
        <q-input
          type="number"
          v-model="form.price"
          :label="$t('labels.price')"
          outlined
          dense
        />
      </div>
      <!-- /Price -->

      <!-- Description -->
      <div class="col-12 q-py-md q-px-md">
        <q-input
          type="textarea"
          v-model="form.description"
          :label="$t('labels.description')"
          outlined
          autogrow
        />
      </div>
      <!-- /Description -->
    </div>

    <div class="row">
      <div class="col-auto">
        <q-btn rounded color="primary" icon="add" @click="save" />
      </div>
    </div>
    <br />
    <br />
    form: {{ form }}
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// Composables
import { useProduct } from '../composables/useProducts';

// Types
import { CreateProductDTO } from '../types/product.type';

// Variables
const { createProduct, goToHomePage } = useProduct();

const form = reactive<CreateProductDTO>({
  title: '',
  price: 0,
  description: '',
  categoryId: 1,
  images: ['https://img2.rtve.es/i/?w=1600&i=1650645866401.jpg'],
});

// Functions
function save() {
  createProduct(form);
  goToHomePage();
}
</script>
