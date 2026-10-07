import mailIconUrl from "../../assets/icons/mail.svg";
import phoneIconUrl from "../../assets/icons/phone.svg";
import styles from "./ProfileContacts.module.css";

type ProfileContactsProps = {
  phone: string;
  email: string;
};

export function ProfileContacts({ phone, email }: ProfileContactsProps) {
  return (
    <ul className={styles.contacts}>
      <li className={styles.contact}>
        <img className={styles.icon} src={phoneIconUrl} alt="Телефон" />
        <span>{phone}</span>
      </li>
      <li className={styles.contact}>
        <img className={styles.icon} src={mailIconUrl} alt="Email" />
        <span>{email}</span>
      </li>
    </ul>
  );
}
