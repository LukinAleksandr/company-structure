import { useState } from "react";

export function useOpenedDepartments() {
  const [openedDepartmentIds, setOpenedDepartmentIds] = useState<number[]>([]);

  function toggleDepartment(departmentId: number) {
    setOpenedDepartmentIds((currentIds) =>
      currentIds.includes(departmentId)
        ? currentIds.filter((currentId) => currentId !== departmentId)
        : [...currentIds, departmentId],
    );
  }

  function closeDepartment(departmentId: number) {
    setOpenedDepartmentIds((currentIds) => currentIds.filter((currentId) => currentId !== departmentId));
  }

  return { openedDepartmentIds, toggleDepartment, closeDepartment };
}
