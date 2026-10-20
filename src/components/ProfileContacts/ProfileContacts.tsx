import mailIconUrl from "../../assets/icons/mail.svg";
import phoneIconUrl from "../../assets/icons/phone.svg";
import { MISSING_VALUE_PLACEHOLDER } from "../../constants/placeholders";
import { texts } from "../../texts/texts";
import styles from "./ProfileContacts.module.css";

type ProfileContactsProps = {
  phone: string;
  email: string;
};

export function ProfileContacts({ phone, email }: ProfileContactsProps) {
  return (
    <ul className={styles.contacts}>
      <li className={styles.contact}>
        <img className={styles.icon} src={phoneIconUrl} alt={texts.phone} />
        <span>{phone || MISSING_VALUE_PLACEHOLDER}</span>
      </li>
      <li className={styles.contact}>
        <img className={styles.icon} src={mailIconUrl} alt={texts.email} />
        <span>{email}</span>
      </li>
    </ul>
  );
}
