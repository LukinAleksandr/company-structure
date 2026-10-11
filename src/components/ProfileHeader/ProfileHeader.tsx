import locationIconUrl from "../../assets/icons/location.svg";
import { OnlineDot } from "../OnlineDot/OnlineDot";
import { OnlineStatusBadge } from "../OnlineStatusBadge/OnlineStatusBadge";
import styles from "./ProfileHeader.module.css";

type ProfileHeaderProps = {
  departmentName: string;
  city: string;
  isOnline: boolean;
};

export function ProfileHeader({ departmentName, city, isOnline }: ProfileHeaderProps) {
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
          <OnlineStatusBadge isOnline={isOnline} />
          {isOnline && <OnlineDot />}
        </p>
      </div>
    </header>
  );
}
