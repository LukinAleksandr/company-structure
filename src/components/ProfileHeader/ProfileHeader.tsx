import locationIconUrl from "../../assets/icons/location.svg";
import { MISSING_VALUE_PLACEHOLDER } from "../../constants/placeholders";
import { OnlineDot } from "../OnlineDot/OnlineDot";
import { OnlineStatusBadge } from "../OnlineStatusBadge/OnlineStatusBadge";
import styles from "./ProfileHeader.module.css";

type ProfileHeaderProps = {
  departmentName: string;
  city: string | null;
  isOnline: boolean | null;
};

export function ProfileHeader({ departmentName, city, isOnline }: ProfileHeaderProps) {
  return (
    <header className={styles.header}>
      <p className={styles.department}>{departmentName}</p>

      <div className={styles.locationAndStatus}>
        <p className={styles.city}>
          <img className={styles.locationIcon} src={locationIconUrl} alt="" />
          {city === null ? MISSING_VALUE_PLACEHOLDER : `м.${city}`}
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
