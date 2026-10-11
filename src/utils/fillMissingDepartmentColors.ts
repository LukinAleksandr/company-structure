import type { Department } from "../types/department";
import { getRandomHexColor } from "./getRandomHexColor";

export function fillMissingDepartmentColors(department: Department): Department {
  return {
    ...department,
    color: department.color ?? getRandomHexColor(),
    children: department.children?.map(fillMissingDepartmentColors) ?? null,
  };
}
