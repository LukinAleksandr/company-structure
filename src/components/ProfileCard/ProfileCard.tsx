import { useState } from "react";
import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { joinClassNames } from "../../utils/joinClassNames";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { StatusDot } from "../StatusDot/StatusDot";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  employee: Employee;
  departmentName: string;
  isOnDarkBackground?: boolean;
};

export function ProfileCard({ employee, departmentName, isOnDarkBackground = false }: ProfileCardProps) {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const fullName = getEmployeeFullName(employee);

  return (
    <article className={joinClassNames(styles.card, isOnDarkBackground && styles.dark)}>
      {/* Невидимая кнопка на всю карточку: так карточка кликабельна и доступна с клавиатуры */}
      <button
        type="button"
        className={styles.openButton}
        onClick={() => setIsDetailsOpened(true)}
        aria-label={`Відкрити профіль: ${fullName}`}
      />

      <div className={styles.photo}>
        <EmployeePhoto photoUrl={employee.photo} alt={fullName} isOnDarkBackground={isOnDarkBackground} />
        <div className={styles.statusDot}>
          <StatusDot status={employee.status} />
        </div>
      </div>

      <p className={styles.position}>{employee.position}</p>
      <h2 className={styles.name}>
        <span className={styles.lastName}>{employee.surname}</span>
        <span className={styles.firstName}>{employee.name}</span>
      </h2>

      <div className={styles.status}>
        <StatusBadge status={employee.status} />
      </div>

      {isDetailsOpened && (
        <div className={styles.details}>
          <ProfileDetails
            employee={employee}
            departmentName={departmentName}
            onClose={() => setIsDetailsOpened(false)}
          />
        </div>
      )}
    </article>
  );
}
