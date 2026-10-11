import mailIconUrl from "../../assets/icons/mail-dark.svg";
import telegramIconUrl from "../../assets/icons/telegram.svg";
import { getTelegramUrl } from "../../utils/getTelegramUrl";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./ProfileActions.module.css";

type ProfileActionsProps = {
  phone: string;
  email: string;
};

export function ProfileActions({ phone, email }: ProfileActionsProps) {
  return (
    <div className={styles.actions}>
      <a className={joinClassNames(styles.action, styles.email)} href={`mailto:${email}`}>
        <img className={styles.icon} src={mailIconUrl} alt="" />
        <span className={styles.label}>Написати email</span>
      </a>
      <a
        className={joinClassNames(styles.action, styles.telegram)}
        href={getTelegramUrl(phone)}
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.icon} src={telegramIconUrl} alt="" />
        <span className={styles.label}>Написати в Telegram</span>
      </a>
    </div>
  );
}
