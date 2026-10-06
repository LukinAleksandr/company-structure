import type { Department } from "../types/department";

export function hasChildren(department: Department): boolean {
  return department.children !== null && department.children.length > 0;
}
