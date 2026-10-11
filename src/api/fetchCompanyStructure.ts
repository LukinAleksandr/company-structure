import { COMPANY_STRUCTURE_ENDPOINT, SHOULD_MOCK_DEPARTMENT_COLORS } from "../constants/api";
import type { Department } from "../types/department";
import { fillMissingDepartmentColors } from "../utils/fillMissingDepartmentColors";
import { requestJson } from "./requestJson";

export async function fetchCompanyStructure(signal: AbortSignal): Promise<Department> {
  const rootDepartment = await requestJson<Department>(COMPANY_STRUCTURE_ENDPOINT, signal);
  return SHOULD_MOCK_DEPARTMENT_COLORS ? fillMissingDepartmentColors(rootDepartment) : rootDepartment;
}
