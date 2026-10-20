import { DEFAULT_LANGUAGE, LANGUAGE_QUERY_PARAMETER, SUPPORTED_LANGUAGES } from "../constants/languages";
import type { Language } from "../types/language";

function isSupportedLanguage(value: string): value is Language {
  return SUPPORTED_LANGUAGES.some((language) => language === value);
}

export function getPageLanguage(pageSearch: string): Language {
  const requestedLanguage = new URLSearchParams(pageSearch).get(LANGUAGE_QUERY_PARAMETER);

  if (requestedLanguage && isSupportedLanguage(requestedLanguage)) {
    return requestedLanguage;
  }

  return DEFAULT_LANGUAGE;
}
