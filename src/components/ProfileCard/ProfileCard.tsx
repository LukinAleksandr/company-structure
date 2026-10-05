import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { OnlineStatusBadge } from "../OnlineStatusBadge/OnlineStatusBadge";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  employee: Employee;
};

export function ProfileCard({ employee }: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <EmployeePhoto photoUrl={employee.photoUrl} alt={getEmployeeFullName(employee)} />
      </div>

      <div className={styles.position}>{employee.position}</div>
      <div className={styles.lastAndFirstName}>
        {employee.lastName} {employee.firstName}
      </div>
      <div className={styles.patronymic}>{employee.patronymic}</div>

      <div className={styles.status}>
        <OnlineStatusBadge isOnline={employee.isOnline} />
      </div>
    </div>
  );
}
