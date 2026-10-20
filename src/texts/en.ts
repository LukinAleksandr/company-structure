import type { Texts } from "../types/language";

export const ENGLISH_TEXTS: Texts = {
  pageTitle: "Company structure",
  loading: "Loading structure…",
  loadingError: "Failed to load the company structure",
  open: "Open",
  close: "Close",
  openProfile: (fullName) => `Open profile: ${fullName}`,
  writeToTelegram: "Message on Telegram",
  writeEmail: "Send email",
  phone: "Phone",
  email: "Email",
  cityPrefix: "",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  resetZoom: "Reset zoom",
  employeeTypes: {
    founder: "Founder",
    manager: "Manager",
    team_lead: "Team lead",
    subordinate: "Employee",
  },
  employeeStatuses: {
    green: "Online",
    yellow: "Away",
    gray: "Offline",
  },
};
