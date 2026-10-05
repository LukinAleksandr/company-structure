import type { CSSProperties } from "react";
import type { Department } from "../../types/department";
import type { Point } from "../../types/geometry";
import { getDepartmentHead } from "../../utils/getDepartmentHead";
import styles from "./DepartmentCard.module.css";

type DepartmentCardProps = {
  department: Department;
  // Координаты карточки на полотне (в пикселях при масштабе 100%)
  position: Point;
};

// Карточка подразделения на полотне
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
      <div className={styles.headName}>{head.fullName}</div>
    </div>
  );
}
