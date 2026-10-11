import type { Department } from "../types/department";
import type { Employee } from "../types/employee";

export function getStaffByRole(department: Department, role: Employee["department_role"]): Employee[] {
  return (department.staff ?? []).filter((employee) => employee.department_role === role);
}
