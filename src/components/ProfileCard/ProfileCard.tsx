import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { OnlineDot } from "../OnlineDot/OnlineDot";
import { OnlineStatusBadge } from "../OnlineStatusBadge/OnlineStatusBadge";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  employee: Employee;
};

export function ProfileCard({ employee }: ProfileCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <EmployeePhoto photoUrl={employee.photoUrl} alt={getEmployeeFullName(employee)} />
        {employee.isOnline && (
          <div className={styles.onlineDot}>
            <OnlineDot />
          </div>
        )}
      </div>

      <p className={styles.position}>{employee.position}</p>
      <h2 className={styles.name}>
        <span className={styles.lastAndFirstName}>
          {employee.lastName} {employee.firstName}
        </span>
        <span className={styles.patronymic}>{employee.patronymic}</span>
      </h2>

      <div className={styles.status}>
        <OnlineStatusBadge isOnline={employee.isOnline} />
      </div>
    </article>
  );
}
