import type { Ref } from "react";
import type { Department } from "../../types/department";
import { DepartmentDetails } from "../DepartmentDetails/DepartmentDetails";
import styles from "./DepartmentDetailsRow.module.css";

type DepartmentDetailsRowProps = {
  departments: Department[];
  depth: number;
  onCloseDepartment: (departmentId: string) => void;
  ref?: Ref<HTMLUListElement>;
};

export function DepartmentDetailsRow({ departments, depth, onCloseDepartment, ref }: DepartmentDetailsRowProps) {
  return (
    <ul ref={ref} className={styles.row}>
      {departments.map((department) => (
        <li key={department.id}>
          <DepartmentDetails department={department} depth={depth} onClose={() => onCloseDepartment(department.id)} />
        </li>
      ))}
    </ul>
  );
}
