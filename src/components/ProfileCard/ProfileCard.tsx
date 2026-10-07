import { useState } from "react";
import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { OnlineDot } from "../OnlineDot/OnlineDot";
import { OnlineStatusBadge } from "../OnlineStatusBadge/OnlineStatusBadge";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  employee: Employee;
};

export function ProfileCard({ employee }: ProfileCardProps) {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const fullName = getEmployeeFullName(employee);

  return (
    <article className={styles.card}>
      {/* Невидимая кнопка на всю карточку: так карточка кликабельна и доступна с клавиатуры */}
      <button
        type="button"
        className={styles.openButton}
        onClick={() => setIsDetailsOpened(true)}
        aria-label={`Відкрити профіль: ${fullName}`}
      />

      <div className={styles.photo}>
        <EmployeePhoto photoUrl={employee.photoUrl} alt={fullName} />
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

      {isDetailsOpened && (
        <div className={styles.details}>
          <ProfileDetails employee={employee} onClose={() => setIsDetailsOpened(false)} />
        </div>
      )}
    </article>
  );
}
