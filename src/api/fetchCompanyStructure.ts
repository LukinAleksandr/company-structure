import { COMPANY_STRUCTURE_ENDPOINT, MOCK_RESPONSE_DELAY_MS, SHOULD_USE_MOCK_API } from "../constants/api";
import { mockCompanyStructure } from "../data/mockCompanyStructure";
import type { Department } from "../types/department";
import { wait } from "../utils/wait";
import { requestJson } from "./requestJson";

export async function fetchCompanyStructure(signal: AbortSignal): Promise<Department> {
  if (SHOULD_USE_MOCK_API) {
    await wait(MOCK_RESPONSE_DELAY_MS, signal);
    return mockCompanyStructure;
  }

  return requestJson<Department>(COMPANY_STRUCTURE_ENDPOINT, signal);
}
