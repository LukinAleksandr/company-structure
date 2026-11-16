import { EMPLOYEE_PROFILE_BASE_URL } from "../constants/api";

export function getEmployeeProfileUrl(employeeId: number): string {
  return `${EMPLOYEE_PROFILE_BASE_URL}/${employeeId}`;
}
