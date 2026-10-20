import type { Language, Texts } from "../types/language";
import { getPageLanguage } from "../utils/getPageLanguage";
import { ENGLISH_TEXTS } from "./en";
import { POLISH_TEXTS } from "./pl";
import { UKRAINIAN_TEXTS } from "./uk";

const TEXTS_BY_LANGUAGE: Record<Language, Texts> = {
  uk: UKRAINIAN_TEXTS,
  en: ENGLISH_TEXTS,
  pl: POLISH_TEXTS,
};

// Язык задаётся адресом страницы и без перезагрузки не меняется, поэтому выбираем его один раз
export const pageLanguage = getPageLanguage(window.location.search);
export const texts = TEXTS_BY_LANGUAGE[pageLanguage];
