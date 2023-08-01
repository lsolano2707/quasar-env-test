<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    borderless
    emit-value
    map-options
    options-dense
    class="w-16"
  >
  </q-select>
  <!-- <q-select v-model="locale" :options="localeOptions" dense borderless emit-value map-options options-dense /> -->
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// Composables
import { useI18n } from 'src/modules/common/composables/useI18n';

// Variables
const { locale } = useI18n();

const localeOptions = reactive([
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
]);
</script>
