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
    <article className={styles.card}>
      <h2 className={styles.name}>{department.name}</h2>
      <p className={styles.headPosition}>{head.position}</p>
      <p className={styles.headName}>{getEmployeeFullName(head)}</p>
    </article>
  );
}
