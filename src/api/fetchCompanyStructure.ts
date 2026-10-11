import { COMPANY_STRUCTURE_ENDPOINT } from "../constants/api";
import type { Department } from "../types/department";
import { requestJson } from "./requestJson";

export async function fetchCompanyStructure(signal: AbortSignal): Promise<Department> {
  return requestJson<Department>(COMPANY_STRUCTURE_ENDPOINT, signal);
}
