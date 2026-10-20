import type { Ref } from "react";
import { texts } from "../../texts/texts";
import type { Department } from "../../types/department";
import { getStaffByRole } from "../../utils/getStaffByRole";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { StaffList } from "../StaffList/StaffList";
import { StaffRows } from "../StaffRows/StaffRows";
import styles from "./DepartmentSection.module.css";

type DepartmentSectionProps = {
  department: Department;
  // У корня нет кнопки «Відкрити», поэтому он сразу показывает всех: начальников и сотрудников
  shouldShowAllStaff?: boolean;
  isOpened?: boolean;
  // Без обработчика кнопки «Відкрити» нет
  onToggleOpen?: () => void;
  ref?: Ref<HTMLElement>;
};

export function DepartmentSection({
  department,
  shouldShowAllStaff = false,
  isOpened,
  onToggleOpen,
  ref,
}: DepartmentSectionProps) {
  const heads = getStaffByRole(department, "head");

  return (
    <section ref={ref} className={styles.department}>
      <DepartmentHeader name={department.name} textColor={department.color} />

      {shouldShowAllStaff ? (
        <div className={styles.staff}>
          <StaffRows department={department} />
        </div>
      ) : (
        heads.length > 0 && (
          <div className={styles.staff}>
            <StaffList staff={heads} />
          </div>
        )
      )}

      {onToggleOpen && (
        <div className={styles.openButtonWrapper}>
          <button type="button" className={styles.openButton} onClick={onToggleOpen}>
            {isOpened ? texts.close : texts.open}
          </button>
        </div>
      )}
    </section>
  );
}
