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
          counter
          maxlength="10"
          required
          bottom-slots
          :error-message="getErrorMessage(v$.title?.$errors)"
          :error="v$.title?.$error"
          @blur="v$.title?.$touch()"
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
          required
          bottom-slots
          :error-message="getErrorMessage(v$.price?.$errors)"
          :error="v$.price?.$error"
          @blur="v$.price?.$touch()"
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
          counter
          maxlength="50"
          required
          bottom-slots
          :error-message="getErrorMessage(v$.description?.$errors)"
          :error="v$.description?.$error"
          @blur="v$.description?.$touch()"
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
import { computed, reactive } from 'vue';

// Composables
import { useForm } from 'src/modules/common/composables/useForm';
import { useI18n } from 'src/modules/common/composables/useI18n';
import { useProduct } from '../composables/useProducts';
import { useQuasar } from 'quasar';

// Types
import { CreateProductDTO } from '../types/product.type';

// Variables
const { t } = useI18n();
const { getValidator, required, maxLength, minValue, getErrorMessage } =
  useForm();
const { createProduct, goToHomePage } = useProduct();
const $q = useQuasar();

const form = reactive<CreateProductDTO>({
  title: '',
  price: 0,
  description: '',
  categoryId: 1,
  images: ['https://img2.rtve.es/i/?w=1600&i=1650645866401.jpg'],
});

const rules = computed(() => ({
  title: { required, maxLength: maxLength(10) },
  price: { required, minValue: minValue(1) },
  description: { required, maxLength: maxLength(50) },
}));

// Cruza el cumplimiento de las reglas en el formulario
const v$ = getValidator(rules, form);

// Functions
async function save() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    $q.notify({
      message: t('messages.formError'),
      type: 'negative',
      position: 'top-right',
    });
    return;
  }
  createProduct(form);
  $q.notify({
    message: t('messages.formSuccess'),
    type: 'positive',
    position: 'top-right',
  });
  goToHomePage();
}
</script>
