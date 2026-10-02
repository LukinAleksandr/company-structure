import type { CSSProperties } from "react";
import type { Department } from "../../types/department";
import styles from "./DepartmentCard.module.css";

type DepartmentCardProps = {
  department: Department;
};

// Карточка подразделения на полотне
export function DepartmentCard({ department }: DepartmentCardProps) {
  const positionStyle: CSSProperties = {
    left: department.position.x,
    top: department.position.y,
  };

  return (
    <div className={styles.card} style={positionStyle}>
      <div className={styles.name}>{department.name}</div>
      <div className={styles.headPosition}>{department.headPosition}</div>
      <div className={styles.headName}>{department.headName}</div>
    </div>
  );
}
