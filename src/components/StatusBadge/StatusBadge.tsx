import { texts } from "../../texts/texts";
import type { EmployeeStatus } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./StatusBadge.module.css";

type StatusBadgeProps = {
  status: EmployeeStatus;
  variant?: "text" | "pill";
};

export function StatusBadge({ status, variant = "text" }: StatusBadgeProps) {
  return (
    <span className={joinClassNames(styles.badge, styles[status], variant === "pill" && styles.pill)}>
      {texts.employeeStatuses[status]}
    </span>
  );
}
