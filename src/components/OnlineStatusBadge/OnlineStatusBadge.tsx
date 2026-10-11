import { MISSING_VALUE_PLACEHOLDER } from "../../constants/placeholders";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./OnlineStatusBadge.module.css";

type OnlineStatusBadgeProps = {
  // null — статус неизвестен: бекенд его пока не присылает
  isOnline: boolean | null;
};

export function OnlineStatusBadge({ isOnline }: OnlineStatusBadgeProps) {
  return (
    <span className={joinClassNames(styles.badge, isOnline ? styles.online : styles.offline)}>
      {isOnline === null ? MISSING_VALUE_PLACEHOLDER : isOnline ? "Онлайн" : "Офлайн"}
    </span>
  );
}
