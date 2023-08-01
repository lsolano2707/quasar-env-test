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
          maxlength="50"
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
      <div v-if="!isUpdate" class="col-12 q-py-md q-px-md">
        <q-input
          type="textarea"
          v-model="form.description"
          :label="$t('labels.description')"
          outlined
          autogrow
          counter
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
      <div class="col-auto q-mr-sm">
        <q-btn rounded @click="goToHomePage" :label="$t('buttons.cancel')" />
      </div>
      <div class="col-auto">
        <q-btn
          rounded
          color="primary"
          @click="save"
          :label="$t('buttons.save')"
        />
      </div>
    </div>
    <br />
    <br />
    form: {{ form }}
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Composables
import { useForm } from 'src/modules/common/composables/useForm';
import { useI18n } from 'src/modules/common/composables/useI18n';
import { useProduct } from '../composables/useProducts';
import { useQuasar } from 'quasar';

// Types
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '../types/product.type';

// Variables
const route = useRoute();
const { t } = useI18n();
const { getValidator, required, maxLength, minValue, getErrorMessage } =
  useForm();
const { createProduct, goToHomePage, fetchProductById, updateProduct } =
  useProduct();
const $q = useQuasar();
const isUpdate = computed<boolean>(() => route.meta.isUpdate as boolean);
const productId = computed(() => Number(route.params.productId as string));

const form = reactive<CreateProductDTO>({
  title: '',
  price: 0,
  description: '',
  categoryId: 1,
  images: ['https://img2.rtve.es/i/?w=1600&i=1650645866401.jpg'],
});

const rules = computed(() => ({
  title: { required, maxLength: maxLength(50) },
  price: { required, minValue: minValue(1) },
}));

// Cruza el cumplimiento de las reglas en el formulario
const v$ = getValidator(rules, form);

// Lifecycles
onMounted(() => {
  if (isUpdate.value) {
    fetchProductById(productId.value).then((value: Product | undefined) => {
      if (value) {
        form.title = value.title;
        form.price = value.price;
        form.description = value.description;
        form.categoryId = value.category.id;
        form.images = value.images;
      }
    });
  }
});

// Functions
async function save() {
  const isValid = await v$.value.$validate();
  console.log(v$.value);

  if (!isValid) {
    $q.notify({
      message: t('messages.formError'),
      type: 'negative',
      position: 'top-right',
    });
    return;
  }
  if (isUpdate.value) {
    updateProduct(productId.value, form as UpdateProductDTO);
    $q.notify({
      message: t('messages.updateSuccess'),
      type: 'positive',
      position: 'top-right',
    });
  } else {
    createProduct(form);
    $q.notify({
      message: t('messages.addSuccess'),
      type: 'positive',
      position: 'top-right',
    });
  }
  goToHomePage();
}
</script>
