import type { Department } from "../types/department";
import type { Employee } from "../types/employee";

// Начальник подразделения. Если флаг isHead ни у кого не стоит — считаем начальником первого в списке
export function getDepartmentHead(department: Department): Employee {
  return department.staff.find((employee) => employee.isHead) ?? department.staff[0];
}
