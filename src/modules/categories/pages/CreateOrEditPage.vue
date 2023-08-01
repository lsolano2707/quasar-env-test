<template>
  <q-page class="q-pa-md">
    <div class="row">
      <!-- Name -->
      <div class="col-12 col-md-6 q-py-md q-px-md">
        <q-input
          v-model="form.name"
          :label="$t('labels.name')"
          outlined
          dense
          counter
          maxlength="20"
          required
          bottom-slots
          :error-message="getErrorMessage(v$.name?.$errors)"
          :error="v$.name?.$error"
          @blur="v$.name?.$touch()"
        />
      </div>
      <!-- /Name -->

      <!-- Image -->
      <div v-if="!isUpdate" class="col-12 col-md-6 q-py-md q-px-md">
        <q-input
          type="text"
          v-model="form.image"
          :label="$t('labels.image')"
          outlined
          dense
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
import { UpdateCategoryDTO } from '../types/category.type';

// Variables
const route = useRoute();
const { t } = useI18n();
const { getValidator, required, maxLength, getErrorMessage } = useForm();
const { createCategory, goToHomePage, fetchCategoryById, updateCategory } =
  useCategories();
const $q = useQuasar();
const isUpdate = computed<boolean>(() => route.meta.isUpdate as boolean);
const categoryId = computed(() => Number(route.params.categoryId as string));

const form = reactive<CreateCategoryDTO | UpdateCategoryDTO>({
  name: '',
  image:
    'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
});

const rules = computed(() => ({
  name: { required, maxLength: maxLength(20) },
  image: { required },
}));

// Cruza el cumplimiento de las reglas en el formulario
const v$ = getValidator(rules, form);

// Lifecycles
onMounted(() => {
  if (isUpdate.value) {
    fetchCategoryById(categoryId.value).then((value: Category | undefined) => {
      if (value) {
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

  if (isUpdate.value) {
    updateCategory(categoryId.value, form as UpdateCategoryDTO);
    $q.notify({
      message: t('messages.updateSuccess'),
      type: 'positive',
      position: 'top-right',
    });
  } else {
    createCategory(form as CreateCategoryDTO);
    $q.notify({
      message: t('messages.addSuccess'),
      type: 'positive',
      position: 'top-right',
    });
  }
  goToHomePage();
}
</script>
