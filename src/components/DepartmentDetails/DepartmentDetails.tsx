import { useState } from "react";
import { LIGHT_TEXT_COLOR, SHOULD_COLOR_DEPARTMENT_DETAILS } from "../../constants/colors";
import type { Department } from "../../types/department";
import { isDarkColor } from "../../utils/isDarkColor";
import { joinClassNames } from "../../utils/joinClassNames";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { StaffRows } from "../StaffRows/StaffRows";
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
  const backgroundColor = SHOULD_COLOR_DEPARTMENT_DETAILS ? department.color : null;
  const isDarkBackground = backgroundColor ? isDarkColor(backgroundColor) : false;

  return (
    <section
      className={joinClassNames(styles.details, isEvenDepth && styles.contrast, isDarkBackground && styles.dark)}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Закрити">
        <svg className={styles.closeIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6L18 18M18 6L6 18" />
        </svg>
      </button>

      <DepartmentHeader name={department.name} textColor={isDarkBackground ? LIGHT_TEXT_COLOR : undefined} />

      {/* Без людей стрелкам к подотделам не от чего начинаться — staffElement останется null */}
      <div className={styles.staff}>
        <StaffRows ref={setStaffElement} department={department} isOnDarkBackground={isDarkBackground} />
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
