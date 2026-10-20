import type { EmployeeStatus, EmployeeType } from "./employee";

export type Language = "uk" | "en" | "pl";

export type Texts = {
  pageTitle: string;
  loading: string;
  loadingError: string;
  open: string;
  close: string;
  openProfile: (fullName: string) => string;
  writeToTelegram: string;
  writeEmail: string;
  phone: string;
  email: string;
  // В украинском перед городом пишут «м.» (місто), в других языках префикса нет
  cityPrefix: string;
  zoomIn: string;
  zoomOut: string;
  resetZoom: string;
  employeeTypes: Record<EmployeeType, string>;
  employeeStatuses: Record<EmployeeStatus, string>;
};
