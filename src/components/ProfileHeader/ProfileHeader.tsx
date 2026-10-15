import locationIconUrl from "../../assets/icons/location.svg";
import type { EmployeeStatus, EmployeeType } from "../../types/employee";
import { CloseButton } from "../CloseButton/CloseButton";
import { EmployeeTypeBadge } from "../EmployeeTypeBadge/EmployeeTypeBadge";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { StatusDot } from "../StatusDot/StatusDot";
import styles from "./ProfileHeader.module.css";

type ProfileHeaderProps = {
  city: string;
  status: EmployeeStatus;
  type: EmployeeType;
  onClose: () => void;
};

export function ProfileHeader({ city, status, type, onClose }: ProfileHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.locationAndStatus}>
        <p className={styles.city}>
          <img src={locationIconUrl} alt="" />
          м.{city}
        </p>
        <span className={styles.divider} aria-hidden="true" />
        <p className={styles.status}>
          <StatusBadge status={status} />
          <StatusDot status={status} />
        </p>
      </div>

      <div className={styles.typeAndClose}>
        <EmployeeTypeBadge type={type} size="large" />
        <CloseButton size="large" onClick={onClose} />
      </div>
    </header>
  );
}
