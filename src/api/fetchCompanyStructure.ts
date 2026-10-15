import { SHOULD_MOCK_DEPARTMENT_COLORS } from "../constants/api";
import type { Department } from "../types/department";
import { fillMissingDepartmentColors } from "../utils/fillMissingDepartmentColors";
import { getCompanyStructureUrl } from "../utils/getCompanyStructureUrl";
import { requestJson } from "./requestJson";

export async function fetchCompanyStructure(signal: AbortSignal): Promise<Department> {
  const rootDepartment = await requestJson<Department>(getCompanyStructureUrl(window.location.search), signal);
  return SHOULD_MOCK_DEPARTMENT_COLORS ? fillMissingDepartmentColors(rootDepartment) : rootDepartment;
}
