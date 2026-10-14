import type { EmployeeStatus } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./StatusBadge.module.css";

const STATUS_LABELS: Record<EmployeeStatus, string> = {
  green: "Онлайн",
  yellow: "Відійшов",
  gray: "Офлайн",
};

type StatusBadgeProps = {
  status: EmployeeStatus;
  size?: "small" | "medium";
};

export function StatusBadge({ status, size = "medium" }: StatusBadgeProps) {
  return (
    <span className={joinClassNames(styles.badge, styles[status], size === "small" && styles.small)}>
      {STATUS_LABELS[status]}
    </span>
  );
}
