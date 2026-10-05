import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./OnlineStatusBadge.module.css";

type OnlineStatusBadgeProps = {
  isOnline: boolean;
};

export function OnlineStatusBadge({ isOnline }: OnlineStatusBadgeProps) {
  return (
    <div className={joinClassNames(styles.badge, isOnline ? styles.online : styles.offline)}>
      {isOnline ? "Онлайн" : "Офлайн"}
    </div>
  );
}
