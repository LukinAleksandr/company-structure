import type { Ref } from "react";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { hasChildren } from "../../utils/hasChildren";
import { DepartmentSection } from "../DepartmentSection/DepartmentSection";
import styles from "./DepartmentRow.module.css";

type DepartmentRowProps = {
  departments: Department[];
  staffLayout?: StaffLayout;
  openedDepartmentIds?: string[];
  onToggleDepartment?: (departmentId: string) => void;
  ref?: Ref<HTMLUListElement>;
};

export function DepartmentRow({
  departments,
  staffLayout,
  openedDepartmentIds = [],
  onToggleDepartment,
  ref,
}: DepartmentRowProps) {
  return (
    <ul ref={ref} className={styles.row}>
      {departments.map((department) => (
        <li key={department.id}>
          <DepartmentSection
            department={department}
            staffLayout={staffLayout}
            isOpened={openedDepartmentIds.includes(department.id)}
            onToggleOpen={
              onToggleDepartment && hasChildren(department) ? () => onToggleDepartment(department.id) : undefined
            }
          />
        </li>
      ))}
    </ul>
  );
}
