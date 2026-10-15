import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { ProfileActions } from "../ProfileActions/ProfileActions";
import { ProfileContacts } from "../ProfileContacts/ProfileContacts";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import { StatusDot } from "../StatusDot/StatusDot";
import styles from "./ProfileDetails.module.css";

type ProfileDetailsProps = {
  employee: Employee;
  departmentName: string;
  onClose: () => void;
};

export function ProfileDetails({ employee, onClose }: ProfileDetailsProps) {
  const fullName = getEmployeeFullName(employee);

  return (
    <dialog open className={styles.details} aria-label={fullName}>
      <ProfileHeader city={employee.city} status={employee.status} type={employee.type} onClose={onClose} />
      <div className={styles.main}>
        <div className={styles.photo}>
          <EmployeePhoto photoUrl={employee.photo} alt={fullName} size="large" />
          <div className={styles.statusDot}>
            <StatusDot status={employee.status} size="large" />
          </div>
        </div>

        <div className={styles.data}>
          <p className={styles.position}>{employee.position}</p>
          <h2 className={styles.name}>
            {employee.surname} {employee.name}
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
