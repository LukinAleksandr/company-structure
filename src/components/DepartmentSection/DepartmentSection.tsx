import type { Ref } from "react";
import { MISSING_VALUE_PLACEHOLDER } from "../../constants/placeholders";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { getStaffByRole } from "../../utils/getStaffByRole";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { StaffList } from "../StaffList/StaffList";
import { StaffRows } from "../StaffRows/StaffRows";
import styles from "./DepartmentSection.module.css";

type DepartmentSectionProps = {
  department: Department;
  staffLayout?: StaffLayout;
  // У корня нет кнопки «Відкрити», поэтому он сразу показывает всех: начальников и сотрудников
  shouldShowAllStaff?: boolean;
  isOpened?: boolean;
  // Без обработчика кнопки «Відкрити» нет
  onToggleOpen?: () => void;
  ref?: Ref<HTMLElement>;
};

export function DepartmentSection({
  department,
  staffLayout,
  shouldShowAllStaff = false,
  isOpened,
  onToggleOpen,
  ref,
}: DepartmentSectionProps) {
  // В свёрнутом виде — только начальники, остальные сотрудники видны после открытия
  const heads = getStaffByRole(department, "head");

  return (
    <section ref={ref} className={styles.department}>
      <DepartmentHeader name={department.name} description={MISSING_VALUE_PLACEHOLDER} />

      {shouldShowAllStaff ? (
        <div className={styles.staff}>
          <StaffRows department={department} />
        </div>
      ) : (
        heads.length > 0 && (
          <div className={styles.staff}>
            <StaffList staff={heads} departmentName={department.name} layout={staffLayout} />
          </div>
        )
      )}

      {onToggleOpen && (
        <div className={styles.openButtonWrapper}>
          <button type="button" className={styles.openButton} onClick={onToggleOpen}>
            {isOpened ? "Закрити" : "Відкрити"}
          </button>
        </div>
      )}
    </section>
  );
}
