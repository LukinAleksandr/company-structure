import type { Ref } from "react";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { canOpenDepartment } from "../../utils/canOpenDepartment";
import type { CenteringPadding } from "../../utils/getMiddleItemCenteringPadding";
import { DepartmentSection } from "../DepartmentSection/DepartmentSection";
import styles from "./DepartmentRow.module.css";

type DepartmentRowProps = {
  departments: Department[];
  staffLayout?: StaffLayout;
  openedDepartmentIds?: number[];
  onToggleDepartment?: (departmentId: number) => void;
  centeringPadding?: CenteringPadding | null;
  ref?: Ref<HTMLUListElement>;
};

export function DepartmentRow({
  departments,
  staffLayout,
  openedDepartmentIds = [],
  onToggleDepartment,
  centeringPadding,
  ref,
}: DepartmentRowProps) {
  return (
    <ul ref={ref} className={styles.row} style={centeringPadding ?? undefined}>
      {departments.map((department) => (
        <li key={department.id} className={styles.item}>
          <DepartmentSection
            department={department}
            staffLayout={staffLayout}
            isOpened={openedDepartmentIds.includes(department.id)}
            onToggleOpen={
              onToggleDepartment && canOpenDepartment(department) ? () => onToggleDepartment(department.id) : undefined
            }
          />
        </li>
      ))}
    </ul>
  );
}
