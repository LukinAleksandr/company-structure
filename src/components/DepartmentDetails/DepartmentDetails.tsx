import { useState } from "react";
import type { Department } from "../../types/department";
import { joinClassNames } from "../../utils/joinClassNames";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { StaffList } from "../StaffList/StaffList";
import { Subdepartments } from "../Subdepartments/Subdepartments";
import styles from "./DepartmentDetails.module.css";

type DepartmentDetailsProps = {
  department: Department;
  // 1 — блок верхнего уровня, 2 — блок внутри него и т.д.
  depth: number;
  onClose: () => void;
};

export function DepartmentDetails({ department, depth, onClose }: DepartmentDetailsProps) {
  // В state, а не в useRef: стрелки должны перерисоваться, когда элемент появится
  const [staffElement, setStaffElement] = useState<HTMLDivElement | null>(null);
  // Вложенные блоки чередуют фон, чтобы отличаться от родительского
  const isEvenDepth = depth % 2 === 0;

  return (
    <section className={joinClassNames(styles.details, isEvenDepth && styles.contrast)}>
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Закрити">
        <svg className={styles.closeIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6L18 18M18 6L6 18" />
        </svg>
      </button>

      <DepartmentHeader name={department.name} description={department.description} />

      <div ref={setStaffElement} className={styles.staff}>
        <StaffList staff={department.staff} />
      </div>

      {department.children && (
        <Subdepartments
          parentElement={staffElement}
          departments={department.children}
          staffLayout="column"
          detailsDepth={depth}
        />
      )}
    </section>
  );
}
