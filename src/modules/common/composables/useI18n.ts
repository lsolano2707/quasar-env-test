import { DEFAULT_LOCALE, i18n, LOCALES } from 'src/boot/i18n';

export const useI18n = () => {
  const { t, locale } = i18n.global;
  return {
    t,
    locale,
    DEFAULT_LOCALE,
    LOCALES,
  };
};
