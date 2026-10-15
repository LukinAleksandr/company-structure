import closeIconUrl from "../../assets/icons/close.svg";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./CloseButton.module.css";

type CloseButtonProps = {
  onClick: () => void;
  size?: "medium" | "large";
  className?: string;
};

export function CloseButton({ onClick, size = "medium", className }: CloseButtonProps) {
  return (
    <button
      type="button"
      className={joinClassNames(styles.button, styles[size], className)}
      onClick={onClick}
      aria-label="Закрити"
    >
      <img className={styles.icon} src={closeIconUrl} alt="" />
    </button>
  );
}
