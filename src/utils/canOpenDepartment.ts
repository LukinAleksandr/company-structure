import type { Department } from "../types/department";
import { getStaffByRole } from "./getStaffByRole";
import { hasChildren } from "./hasChildren";

// Открывать есть смысл, только если в раскрытом виде появится что-то новое: подотделы или рядовые сотрудники
export function canOpenDepartment(department: Department): boolean {
  return hasChildren(department) || getStaffByRole(department, "staff").length > 0;
}
