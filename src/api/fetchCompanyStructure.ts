import { COMPANY_STRUCTURE_ENDPOINT } from "../constants/api";
import type { Department } from "../types/department";
import { requestJson } from "./requestJson";

export async function fetchCompanyStructure(signal: AbortSignal): Promise<Department> {
  // Бекенд присылает массив корней, но корень у предприятия один
  const rootDepartments = await requestJson<Department[]>(COMPANY_STRUCTURE_ENDPOINT, signal);
  const [rootDepartment] = rootDepartments;

  if (!rootDepartment) {
    throw new Error("Бекенд прислал пустую структуру предприятия");
  }

  return rootDepartment;
}
