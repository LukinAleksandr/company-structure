import type { Department } from "../../types/department";
import { joinClassNames } from "../../utils/joinClassNames";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { StaffRows } from "../StaffRows/StaffRows";
import styles from "./ExpandedDepartment.module.css";

type ExpandedDepartmentProps = {
  department: Department;
  // 1 — подразделение прямо в раскрытом блоке, 2 — внутри него и т.д.
  nestingLevel: number;
};

// Подразделения ниже второго уровня сразу показаны целиком, без кнопки «Відкрити»
export function ExpandedDepartment({ department, nestingLevel }: ExpandedDepartmentProps) {
  const children = department.children ?? [];
  // Вложенные блоки чередуют оттенок, чтобы отличаться от родительского
  const isEvenLevel = nestingLevel % 2 === 0;

  return (
    <section className={joinClassNames(styles.department, isEvenLevel && styles.contrast)}>
      <DepartmentHeader name={department.name} textColor={department.color} />

      <div className={styles.staff}>
        <StaffRows department={department} layout="column" />
      </div>

      {children.length > 0 && (
        <ul className={styles.children}>
          {children.map((child) => (
            <li key={child.id}>
              <ExpandedDepartment department={child} nestingLevel={nestingLevel + 1} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
