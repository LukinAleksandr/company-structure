import mailIconUrl from "../../assets/icons/mail-dark.svg";
import telegramIconUrl from "../../assets/icons/telegram.svg";
import { getTelegramUrl } from "../../utils/getTelegramUrl";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./ProfileActions.module.css";

type ProfileActionsProps = {
  telegram: string | null;
  email: string;
};

export function ProfileActions({ telegram, email }: ProfileActionsProps) {
  const telegramUrl = getTelegramUrl(telegram);

  return (
    <div className={styles.actions}>
      <a className={joinClassNames(styles.action, styles.email)} href={`mailto:${email}`}>
        <img className={styles.icon} src={mailIconUrl} alt="" />
        <span className={styles.label}>Написати email</span>
      </a>
      {telegramUrl ? (
        <a
          className={joinClassNames(styles.action, styles.telegram)}
          href={telegramUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.icon} src={telegramIconUrl} alt="" />
          <span className={styles.label}>Написати в Telegram</span>
        </a>
      ) : (
        // У ссылки нет disabled, поэтому без Telegram показываем выключенную кнопку того же вида
        <button type="button" className={joinClassNames(styles.action, styles.telegram)} disabled>
          <img className={styles.icon} src={telegramIconUrl} alt="" />
          <span className={styles.label}>Написати в Telegram</span>
        </button>
      )}
    </div>
  );
}
