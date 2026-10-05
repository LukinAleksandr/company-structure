import type { Department } from "../../types/department";
import { StaffList } from "../StaffList/StaffList";
import styles from "./RootDepartment.module.css";

type RootDepartmentProps = {
  department: Department;
};

export function RootDepartment({ department }: RootDepartmentProps) {
  return (
    <section className={styles.department}>
      <h1 className={styles.name}>{department.name}</h1>
      <p className={styles.description}>{department.description}</p>

      <div className={styles.staff}>
        <StaffList staff={department.staff} />
      </div>
    </section>
  );
}
