<template>
  <q-page class="q-pa-md">
    <div class="row">
      <!-- name -->
      <div class="col-12 q-py-md q-px-md">
        <q-input
          type="text"
          v-model="form.name"
          :label="$t('labels.name')"
          outlined
          dense
          required
          bottom-slots
          :error-message="getErrorMessage(v$.name?.$errors)"
          :error="v$.name?.$error"
          @blur="v$.name?.$touch()"
        />
      </div>
      <!-- /name -->

      <!-- image -->
      <div class="col-12 q-py-md q-px-md">
        <q-input
          type="textarea"
          v-model="form.image"
          :label="$t('labels.image')"
          outlined
          autogrow
          counter
          maxlength="50"
          required
          bottom-slots
          :error-message="getErrorMessage(v$.image?.$errors)"
          :error="v$.image?.$error"
          @blur="v$.image?.$touch()"
        />
      </div>
      <!-- /image -->
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
import { useCategories } from '../composables/useCategories';
import { useQuasar } from 'quasar';

// Types
import { CreateCategoryDTO, Category } from '../types/category.type';

// Variables
const route = useRoute();
const { t } = useI18n();
const { getValidator, required, maxLength, getErrorMessage } = useForm();
const { createCategory, goToHomePage, fetchCategoryById } = useCategories();
const $q = useQuasar();
const isUpdate = computed<boolean>(() => route.meta.isUpdate as boolean);
const categoryId = computed(() => Number(route.params.categoryId as string));

const form = reactive<CreateCategoryDTO>({
  id: 1,
  name: '',
  image: '',
  categoryName: '',
  categoryImage: [],
});

const rules = computed(() => ({
  id: { required, maxLength: maxLength(10) },
  name: { required, maxLength: maxLength(50) },
  image: { required, maxLength: maxLength(50) },
}));

// Cruza el cumplimiento de las reglas en el formulario
const v$ = getValidator(rules, form);

// Lifecycles
onMounted(() => {
  if (isUpdate.value) {
    fetchCategoryById(categoryId.value).then((value: Category | undefined) => {
      if (value) {
        form.id = value.id;
        form.name = value.name;
        form.image = value.image;
      }
    });
  }
});

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
  createCategory(form);
  $q.notify({
    message: t('messages.formSuccess'),
    type: 'positive',
    position: 'top-right',
  });
  goToHomePage();
}
</script>
