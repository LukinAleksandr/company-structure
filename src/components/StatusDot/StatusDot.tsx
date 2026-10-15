import type { EmployeeStatus } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./StatusDot.module.css";

type StatusDotProps = {
  status: EmployeeStatus;
  size?: "medium" | "large";
};

export function StatusDot({ status, size = "medium" }: StatusDotProps) {
  return (
    <span className={joinClassNames(styles.dot, styles[status], size === "large" && styles.large)} aria-hidden="true" />
  );
}
