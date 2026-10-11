import { useState } from "react";
import { MISSING_VALUE_PLACEHOLDER } from "../../constants/placeholders";
import type { Employee } from "../../types/employee";
import { getEmployeeFullName } from "../../utils/getEmployeeFullName";
import { EmployeePhoto } from "../EmployeePhoto/EmployeePhoto";
import { OnlineStatusBadge } from "../OnlineStatusBadge/OnlineStatusBadge";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
  employee: Employee;
  departmentName: string;
};

export function ProfileCard({ employee, departmentName }: ProfileCardProps) {
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
        <EmployeePhoto photoUrl={employee.photo} alt={fullName} />
      </div>

      {/* Временно: должности бекенд не присылает, вместо неё показываем type как есть */}
      <p className={styles.position}>{employee.type ?? MISSING_VALUE_PLACEHOLDER}</p>
      <h2 className={styles.name}>
        <span className={styles.lastName}>{employee.surname}</span>
        <span className={styles.firstName}>{employee.name}</span>
      </h2>

      <div className={styles.status}>
        <OnlineStatusBadge isOnline={null} />
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
