import { useState } from "react";

export function useOpenedDepartments() {
  const [openedDepartmentIds, setOpenedDepartmentIds] = useState<string[]>([]);

  function toggleDepartment(departmentId: string) {
    setOpenedDepartmentIds((currentIds) =>
      currentIds.includes(departmentId)
        ? currentIds.filter((currentId) => currentId !== departmentId)
        : [...currentIds, departmentId],
    );
  }

  function closeDepartment(departmentId: string) {
    setOpenedDepartmentIds((currentIds) => currentIds.filter((currentId) => currentId !== departmentId));
  }

  return { openedDepartmentIds, toggleDepartment, closeDepartment };
}
