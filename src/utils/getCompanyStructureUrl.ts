import { COMPANY_STRUCTURE_ENDPOINT } from "../constants/api";
import { LANGUAGE_QUERY_PARAMETER } from "../constants/languages";
import type { Language } from "../types/language";

// Параметры адреса страницы отдаём бекенду как есть, кроме lang: его заменяем на язык интерфейса,
// чтобы данные пришли на том же языке (например, ?lang=de показывает интерфейс на uk — и бекенд получит uk)
export function getCompanyStructureUrl(pageQuery: string, language: Language): string {
  const requestUrl = new URL(COMPANY_STRUCTURE_ENDPOINT);
  requestUrl.search = pageQuery;
  requestUrl.searchParams.set(LANGUAGE_QUERY_PARAMETER, language);
  return requestUrl.toString();
}
