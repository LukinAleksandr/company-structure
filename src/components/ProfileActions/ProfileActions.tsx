import mailIconUrl from "../../assets/icons/mail-dark.svg";
import profileIconUrl from "../../assets/icons/profile.svg";
import telegramIconUrl from "../../assets/icons/telegram.svg";
import { texts } from "../../texts/texts";
import { getEmployeeProfileUrl } from "../../utils/getEmployeeProfileUrl";
import { getTelegramUrl } from "../../utils/getTelegramUrl";
import { joinClassNames } from "../../utils/joinClassNames";
import styles from "./ProfileActions.module.css";

type ProfileActionsProps = {
  employeeId: number;
  telegram: string | null;
  email: string;
};

export function ProfileActions({ employeeId, telegram, email }: ProfileActionsProps) {
  const telegramUrl = getTelegramUrl(telegram);
  const telegramClassName = joinClassNames(styles.action, styles.telegram);
  const telegramContent = (
    <>
      <img className={styles.icon} src={telegramIconUrl} alt="" />
      {texts.telegram}
    </>
  );

  return (
    <div className={styles.actions}>
      <a className={joinClassNames(styles.action, styles.email)} href={`mailto:${email}`}>
        <img className={styles.icon} src={mailIconUrl} alt="" />
        {texts.email}
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
      <a
        className={joinClassNames(styles.action, styles.profile)}
        href={getEmployeeProfileUrl(employeeId)}
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.icon} src={profileIconUrl} alt="" />
        {texts.profile}
      </a>
    </div>
  );
}
