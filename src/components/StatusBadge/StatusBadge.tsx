import { texts } from "../../texts/texts";
import type { EmployeeStatus } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./StatusBadge.module.css";

type StatusBadgeProps = {
  status: EmployeeStatus;
  size?: "small" | "medium";
};

export function StatusBadge({ status, size = "medium" }: StatusBadgeProps) {
  return (
    <span className={joinClassNames(styles.badge, styles[status], size === "small" && styles.small)}>
      {texts.employeeStatuses[status]}
    </span>
  );
}
