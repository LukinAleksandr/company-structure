import type { Ref } from "react";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { getStaffByRole } from "../../utils/getStaffByRole";
import { joinClassNames } from "../../utils/joinClassNames";
import { StaffList } from "../StaffList/StaffList";
import styles from "./StaffRows.module.css";

type StaffRowsProps = {
  department: Department;
  layout?: StaffLayout;
  ref?: Ref<HTMLDivElement>;
};

export function StaffRows({ department, layout, ref }: StaffRowsProps) {
  const heads = getStaffByRole(department, "head");
  const regularStaff = getStaffByRole(department, "staff");

  if (heads.length === 0 && regularStaff.length === 0) return null;

  return (
    <div ref={ref} className={joinClassNames(styles.rows, layout === "column" && styles.stretched)}>
      {heads.length > 0 && <StaffList staff={heads} departmentName={department.name} layout={layout} />}
      {regularStaff.length > 0 && <StaffList staff={regularStaff} departmentName={department.name} layout={layout} />}
    </div>
  );
}
