import type { Employee, EmployeeType } from "../types/employee";

const EMPLOYEE_TYPE_ORDER: Record<EmployeeType, number> = {
  founder: 0,
  manager: 1,
  team_lead: 2,
  subordinate: 3,
};

export function sortStaffByType(staff: Employee[]): Employee[] {
  return [...staff].sort(
    (firstEmployee, secondEmployee) =>
      EMPLOYEE_TYPE_ORDER[firstEmployee.type] - EMPLOYEE_TYPE_ORDER[secondEmployee.type],
  );
}
