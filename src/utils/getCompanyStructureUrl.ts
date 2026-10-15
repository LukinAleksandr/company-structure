import { COMPANY_STRUCTURE_ENDPOINT } from "../constants/api";

// Параметры не проверяем: всё, что пришло в адресе страницы (например, ?lang=uk), отдаём бекенду как есть
export function getCompanyStructureUrl(pageQuery: string): string {
  const requestUrl = new URL(COMPANY_STRUCTURE_ENDPOINT);
  requestUrl.search = pageQuery;
  return requestUrl.toString();
}
