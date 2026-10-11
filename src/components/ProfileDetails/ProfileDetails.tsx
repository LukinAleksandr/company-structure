import closeIconUrl from "../../assets/icons/close.svg";
import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { ProfileActions } from "../ProfileActions/ProfileActions";
import { ProfileContacts } from "../ProfileContacts/ProfileContacts";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import styles from "./ProfileDetails.module.css";

type ProfileDetailsProps = {
  employee: Employee;
  onClose: () => void;
};

export function ProfileDetails({ employee, onClose }: ProfileDetailsProps) {
  return (
    <dialog open className={styles.details} aria-label={getEmployeeFullName(employee)}>
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Закрити">
        <img className={styles.closeIcon} src={closeIconUrl} alt="" />
      </button>

      <ProfileHeader departmentName={employee.departmentName} city={employee.city} isOnline={employee.isOnline} />

      <div className={styles.main}>
        <EmployeePhoto photoUrl={employee.photoUrl} alt={getEmployeeFullName(employee)} size="large" />

        <div>
          <p className={styles.position}>{employee.position}</p>
          <h2 className={styles.name}>
            <span className={styles.lastAndFirstName}>
              {employee.lastName} {employee.firstName}
            </span>
            <span className={styles.patronymic}>{employee.patronymic}</span>
          </h2>
          <hr className={styles.divider} />
          <ProfileContacts phone={employee.phone} email={employee.email} />
        </div>
      </div>

      <div className={styles.actions}>
        <ProfileActions phone={employee.phone} email={employee.email} />
      </div>
    </dialog>
  );
}
