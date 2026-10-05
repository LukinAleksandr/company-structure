import type { CSSProperties } from "react";
import type { Department } from "../../types/department";
import type { Point } from "../../types/geometry";
import { getDepartmentHead } from "../../utils/getDepartmentHead";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import styles from "./DepartmentCard.module.css";

type DepartmentCardProps = {
  department: Department;
  // В координатах полотна, а не экрана
  position: Point;
};

export function DepartmentCard({ department, position }: DepartmentCardProps) {
  const head = getDepartmentHead(department);

  const positionStyle: CSSProperties = {
    left: position.x,
    top: position.y,
  };

  return (
    <div className={styles.card} style={positionStyle}>
      <div className={styles.name}>{department.name}</div>
      <div className={styles.headPosition}>{head.position}</div>
      <div className={styles.headName}>{getEmployeeFullName(head)}</div>
    </div>
  );
}
