import type { Department } from "../../types/department";
import { getDepartmentHead } from "../../utils/getDepartmentHead";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import styles from "./DepartmentCard.module.css";

type DepartmentCardProps = {
  department: Department;
};

export function DepartmentCard({ department }: DepartmentCardProps) {
  const head = getDepartmentHead(department);

  return (
    <div className={styles.card}>
      <div className={styles.name}>{department.name}</div>
      <div className={styles.headPosition}>{head.position}</div>
      <div className={styles.headName}>{getEmployeeFullName(head)}</div>
    </div>
  );
}
