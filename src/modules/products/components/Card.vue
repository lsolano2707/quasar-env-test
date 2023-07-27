<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <div class="col-12 q-my-md">
      <q-card class="full-height" flat bordered>
        <img :src="item.images[0]" :alt="item.category.image" />
        <q-card-section-compact>
          <div class="text-subtitle1 text-center">
            {{ item.title }}
          </div>

          <div class="text-caption text-grey">
            <p>{{ item.description }}</p>
          </div>

          <q-card-actions>
            <div class="col-8 q-ml-lg custom-input custom">
              <q-input
                outlined
                bottom-slots
                readonly
                v-model="undefined"
                :label="` ${item.price}, US`"
              >
                <template v-slot:before>
                  <q-icon name="attach_money" color="blue" size="28px" />
                </template>
              </q-input>
            </div>
          </q-card-actions>
        </q-card-section-compact>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: { type: Object, required: true },
});

function addToCart() {
  // agregar funcionalidad
}
</script>
