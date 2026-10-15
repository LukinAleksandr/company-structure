import type { EmployeeStatus } from "../../types/employee";
import { joinClassNames } from "../../utils/joinClassNames";
import { StatusDot } from "../StatusDot/StatusDot";
import styles from "./EmployeePhoto.module.css";

type EmployeePhotoProps = {
  photoUrl: string | null;
  alt: string;
  status: EmployeeStatus;
  size?: "medium" | "large";
};

export function EmployeePhoto({ photoUrl, alt, status, size = "medium" }: EmployeePhotoProps) {
  return (
    <div className={joinClassNames(styles.wrapper, size === "large" && styles.large)}>
      {photoUrl ? (
        <img className={styles.photo} src={photoUrl} alt={alt} />
      ) : (
        <div className={styles.photo} role="img" aria-label={alt} />
      )}
      <div className={styles.statusDot}>
        <StatusDot status={status} size={size} />
      </div>
    </div>
  );
}
