import { useVuelidate, ErrorObject } from '@vuelidate/core';
import {
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  between,
  alpha,
  alphaNum,
  numeric,
  integer,
  decimal,
  email,
  ipAddress,
  url,
  sameAs,
} from '@vuelidate/validators';

export const useForm = () => {
  // #region - Functions
  function getErrorMessage(errors: ErrorObject[], field?: string) {
    if (!errors?.length) return;
    const error = errors[0];
    return error?.$message.toString();
  }

  function getValidator(rules: object, form: object) {
    return useVuelidate(rules, form);
  }
  // #endregion

  return {
    // Properties
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    between,
    alpha,
    alphaNum,
    numeric,
    integer,
    decimal,
    email,
    ipAddress,
    url,
    sameAs,

    // Functions
    getErrorMessage,
    getValidator,
  };
};
