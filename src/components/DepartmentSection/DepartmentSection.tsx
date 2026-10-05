import type { Ref } from "react";
import type { Department } from "../../types/department";
import { StaffList } from "../StaffList/StaffList";
import styles from "./DepartmentSection.module.css";

type DepartmentSectionProps = {
  department: Department;
  ref?: Ref<HTMLElement>;
};

export function DepartmentSection({ department, ref }: DepartmentSectionProps) {
  return (
    <section ref={ref} className={styles.department}>
      <h2 className={styles.name}>{department.name}</h2>
      <p className={styles.description}>{department.description}</p>

      <div className={styles.staff}>
        <StaffList staff={department.staff} />
      </div>
    </section>
  );
}
