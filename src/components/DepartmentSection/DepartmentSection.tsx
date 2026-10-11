import type { Ref } from "react";
import { DARK_TEXT_COLOR, DEFAULT_DEPARTMENT_COLOR, LIGHT_TEXT_COLOR } from "../../constants/colors";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { getStaffByRole } from "../../utils/getStaffByRole";
import { isDarkColor } from "../../utils/isDarkColor";
import { joinClassNames } from "../../utils/joinClassNames";
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
  const backgroundColor = department.color ?? DEFAULT_DEPARTMENT_COLOR;
  const isDarkBackground = isDarkColor(backgroundColor);

  return (
    <section
      ref={ref}
      className={joinClassNames(styles.department, isDarkBackground && styles.dark)}
      style={{ backgroundColor }}
    >
      <DepartmentHeader name={department.name} textColor={isDarkBackground ? LIGHT_TEXT_COLOR : DARK_TEXT_COLOR} />

      {shouldShowAllStaff ? (
        <div className={styles.staff}>
          <StaffRows department={department} isOnDarkBackground={isDarkBackground} />
        </div>
      ) : (
        heads.length > 0 && (
          <div className={styles.staff}>
            <StaffList
              staff={heads}
              departmentName={department.name}
              layout={staffLayout}
              isOnDarkBackground={isDarkBackground}
            />
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
