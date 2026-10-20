import type { Texts } from "../types/language";

export const UKRAINIAN_TEXTS: Texts = {
  pageTitle: "Структура підприємства",
  loading: "Завантаження структури…",
  loadingError: "Не вдалося завантажити структуру підприємства",
  open: "Відкрити",
  close: "Закрити",
  openProfile: (fullName) => `Відкрити профіль: ${fullName}`,
  writeToTelegram: "Написати в Telegram",
  writeEmail: "Написати email",
  phone: "Телефон",
  email: "Email",
  cityPrefix: "м.",
  zoomIn: "Збільшити",
  zoomOut: "Зменшити",
  resetZoom: "Скинути масштаб",
  employeeTypes: {
    founder: "Засновник",
    manager: "Керівник",
    team_lead: "Тімлід",
    subordinate: "Співробітник",
  },
  employeeStatuses: {
    green: "Онлайн",
    yellow: "Відійшов",
    gray: "Офлайн",
  },
};
