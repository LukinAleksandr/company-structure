import type { EmployeeType } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./EmployeeTypeBadge.module.css";

const EMPLOYEE_TYPE_LABELS: Record<EmployeeType, string> = {
  founder: "Засновник",
  manager: "Керівник",
  team_lead: "Тімлід",
  subordinate: "Співробітник",
};

// Классы в CSS — camelCase, а team_lead приходит из бекенда в snake_case, поэтому сопоставляем явно
const EMPLOYEE_TYPE_CLASS_NAMES: Record<EmployeeType, string | undefined> = {
  founder: styles.founder,
  manager: styles.manager,
  team_lead: styles.teamLead,
  subordinate: styles.subordinate,
};

type EmployeeTypeBadgeProps = {
  type: EmployeeType;
  size?: "medium" | "large";
};

export function EmployeeTypeBadge({ type, size = "medium" }: EmployeeTypeBadgeProps) {
  return (
    <span className={joinClassNames(styles.badge, EMPLOYEE_TYPE_CLASS_NAMES[type], size === "large" && styles.large)}>
      {EMPLOYEE_TYPE_LABELS[type]}
    </span>
  );
}
