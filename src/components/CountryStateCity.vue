<template>
  <q-select v-model="value" :options="options" :label="label" emit-value map-options options-dense :disable="disable">
    <template v-slot:selected-item="{ opt }">
      <q-icon v-if="opt.flag" :name="`img:/src/assets/icons/flags/${opt.flag}.svg`" size="18px" class="mr-1" />
      <span>
        {{ opt.label }}
      </span>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section v-if="scope.opt.flag" avatar>
          <q-icon :name="`img:/src/assets/icons/flags/${scope.opt.flag}.svg`" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script lang="ts" setup>
// #region - Imports
import { computed, onMounted, ref, watch } from 'vue';
import { getAllCountriesLite, getAllStatesByCountryLite, getAllCitiesByStateLite } from 'src/libs/country-state-city';
// #endregion

const props = defineProps<{
  modelValue: string | number | undefined;
  label: string,
  countryCode?: string,
  stateCode?: string,
  disable?: boolean,
}>();

const emit = defineEmits(['update:modelValue']);

const options = ref();
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

// Watchers
watch(
  () => props.countryCode,
  async () => {
    if (props.countryCode && !props.stateCode) {
      options.value = (await getAllStatesByCountryLite(props.countryCode))?.map((el) => ({
        value: el.stateCode,
        label: el.name,
      }));
    }
  },
  { immediate: true },
);

watch(
  () => props.stateCode,
  async () => {
    if (props.countryCode && props.stateCode) {
      options.value = (await getAllCitiesByStateLite(props.countryCode as string, props.stateCode as string)).map((el) => ({
        value: el.id,
        label: el.name,
      }));
    }
  },
  { immediate: true },
);

// Lifecycles
onMounted(async () => {
  if (!props.countryCode && !props.stateCode) {
    options.value = (await getAllCountriesLite())?.map((el) => ({
      value: el.iso2,
      label: el.name,
      flag: el.iso2?.toLowerCase(),
    }));
  }
});
</script>
