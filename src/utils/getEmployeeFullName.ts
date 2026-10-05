import type { Employee } from "../types/employee";

export function getEmployeeFullName(employee: Employee): string {
  return `${employee.lastName} ${employee.firstName} ${employee.patronymic}`;
}
