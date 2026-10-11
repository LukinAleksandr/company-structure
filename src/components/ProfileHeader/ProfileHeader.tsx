import locationIconUrl from "../../assets/icons/location.svg";
import type { EmployeeStatus } from "../../types/employee";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { StatusDot } from "../StatusDot/StatusDot";
import styles from "./ProfileHeader.module.css";

type ProfileHeaderProps = {
  departmentName: string;
  city: string;
  status: EmployeeStatus;
};

export function ProfileHeader({ departmentName, city, status }: ProfileHeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.department}>{departmentName}</p>

      <div className={styles.locationAndStatus}>
        <p className={styles.city}>
          <img className={styles.locationIcon} src={locationIconUrl} alt="" />
          м.{city}
        </p>
        <span className={styles.divider} aria-hidden="true" />
        <p className={styles.status}>
          <StatusBadge status={status} />
          <StatusDot status={status} />
        </p>
      </div>
    </header>
  );
}
