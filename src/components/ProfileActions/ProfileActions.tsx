import mailIconUrl from "../../assets/icons/mail-dark.svg";
import telegramIconUrl from "../../assets/icons/telegram.svg";
import { texts } from "../../texts/texts";
import { getTelegramUrl } from "../../utils/getTelegramUrl";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./ProfileActions.module.css";

type ProfileActionsProps = {
  telegram: string | null;
  email: string;
};

export function ProfileActions({ telegram, email }: ProfileActionsProps) {
  const telegramUrl = getTelegramUrl(telegram);
  const telegramClassName = joinClassNames(styles.action, styles.telegram);
  const telegramContent = (
    <>
      <img className={styles.icon} src={telegramIconUrl} alt="" />
      <span className={styles.label}>{texts.writeToTelegram}</span>
    </>
  );

  return (
    <div className={styles.actions}>
      <a className={joinClassNames(styles.action, styles.email)} href={`mailto:${email}`}>
        <img className={styles.icon} src={mailIconUrl} alt="" />
        <span className={styles.label}>{texts.writeEmail}</span>
      </a>
      {telegramUrl ? (
        <a className={telegramClassName} href={telegramUrl} target="_blank" rel="noreferrer">
          {telegramContent}
        </a>
      ) : (
        // У ссылки нет disabled, поэтому без Telegram показываем выключенную кнопку того же вида
        <button type="button" className={telegramClassName} disabled>
          {telegramContent}
        </button>
      )}
    </div>
  );
}
