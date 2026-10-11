import type { EmployeeStatus } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./StatusDot.module.css";

type StatusDotProps = {
  status: EmployeeStatus;
};

export function StatusDot({ status }: StatusDotProps) {
  return <span className={joinClassNames(styles.dot, styles[status])} aria-hidden="true" />;
}
