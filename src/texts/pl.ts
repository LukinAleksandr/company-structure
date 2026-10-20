import type { Texts } from "../types/language";

export const POLISH_TEXTS: Texts = {
  pageTitle: "Struktura firmy",
  loading: "Ładowanie struktury…",
  loadingError: "Nie udało się załadować struktury firmy",
  open: "Otwórz",
  close: "Zamknij",
  openProfile: (fullName) => `Otwórz profil: ${fullName}`,
  writeToTelegram: "Napisz na Telegramie",
  writeEmail: "Napisz e-mail",
  phone: "Telefon",
  email: "E-mail",
  cityPrefix: "",
  zoomIn: "Powiększ",
  zoomOut: "Pomniejsz",
  resetZoom: "Resetuj powiększenie",
  employeeTypes: {
    founder: "Założyciel",
    manager: "Kierownik",
    team_lead: "Lider zespołu",
    subordinate: "Pracownik",
  },
  employeeStatuses: {
    green: "Online",
    yellow: "Zaraz wracam",
    gray: "Offline",
  },
};
