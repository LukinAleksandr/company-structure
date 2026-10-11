import type { Ref } from "react";
import type { Department } from "../../types/department";
import { getStaffByRole } from "../../utils/getStaffByRole";
import { StaffList } from "../StaffList/StaffList";
import styles from "./StaffRows.module.css";

type StaffRowsProps = {
  department: Department;
  ref?: Ref<HTMLDivElement>;
};

export function StaffRows({ department, ref }: StaffRowsProps) {
  const heads = getStaffByRole(department, "head");
  const regularStaff = getStaffByRole(department, "staff");

  if (heads.length === 0 && regularStaff.length === 0) return null;

  return (
    <div ref={ref} className={styles.rows}>
      {heads.length > 0 && <StaffList staff={heads} departmentName={department.name} />}
      {regularStaff.length > 0 && <StaffList staff={regularStaff} departmentName={department.name} />}
    </div>
  );
}
