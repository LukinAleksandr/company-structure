import type { Ref } from "react";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { StaffList } from "../StaffList/StaffList";
import styles from "./DepartmentSection.module.css";

type DepartmentSectionProps = {
  department: Department;
  staffLayout?: StaffLayout;
  isOpened?: boolean;
  // Без обработчика кнопки «Відкрити» нет
  onToggleOpen?: () => void;
  ref?: Ref<HTMLElement>;
};

export function DepartmentSection({ department, staffLayout, isOpened, onToggleOpen, ref }: DepartmentSectionProps) {
  return (
    <section ref={ref} className={styles.department}>
      <DepartmentHeader name={department.name} description={department.description} />

      <div className={styles.staff}>
        <StaffList staff={department.staff} layout={staffLayout} />
      </div>

      {onToggleOpen && (
        <button type="button" className={styles.openButton} onClick={onToggleOpen}>
          {isOpened ? "Закрити" : "Відкрити"}
        </button>
      )}
    </section>
  );
}
