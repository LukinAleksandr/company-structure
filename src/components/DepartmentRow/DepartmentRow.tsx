import type { Ref } from "react";
import type { Department } from "../../types/department";
import { DepartmentSection } from "../DepartmentSection/DepartmentSection";
import styles from "./DepartmentRow.module.css";

type DepartmentRowProps = {
  departments: Department[];
  ref?: Ref<HTMLUListElement>;
};

export function DepartmentRow({ departments, ref }: DepartmentRowProps) {
  return (
    <ul ref={ref} className={styles.row}>
      {departments.map((department) => (
        <li key={department.id}>
          <DepartmentSection department={department} />
        </li>
      ))}
    </ul>
  );
}
