import closeIconUrl from "../../assets/icons/close.svg";
import { MISSING_VALUE_PLACEHOLDER } from "../../constants/placeholders";
import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { ProfileActions } from "../ProfileActions/ProfileActions";
import { ProfileContacts } from "../ProfileContacts/ProfileContacts";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import styles from "./ProfileDetails.module.css";

type ProfileDetailsProps = {
  employee: Employee;
  departmentName: string;
  onClose: () => void;
};

export function ProfileDetails({ employee, departmentName, onClose }: ProfileDetailsProps) {
  return (
    <dialog open className={styles.details} aria-label={getEmployeeFullName(employee)}>
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Закрити">
        <img className={styles.closeIcon} src={closeIconUrl} alt="" />
      </button>

      <ProfileHeader departmentName={departmentName} city={null} isOnline={null} />

      <div className={styles.main}>
        <EmployeePhoto photoUrl={employee.photo} alt={getEmployeeFullName(employee)} size="large" />

        <div>
          {/* Временно: должности бекенд не присылает, вместо неё показываем type как есть */}
          <p className={styles.position}>{employee.type ?? MISSING_VALUE_PLACEHOLDER}</p>
          <h2 className={styles.name}>
            <span className={styles.lastName}>{employee.surname}</span>
            <span className={styles.firstName}>{employee.name}</span>
          </h2>
          <hr className={styles.divider} />
          <ProfileContacts phone={employee.phone} email={employee.email} />
        </div>
      </div>

      <div className={styles.actions}>
        <ProfileActions telegram={employee.telegram} email={employee.email} />
      </div>
    </dialog>
  );
}
