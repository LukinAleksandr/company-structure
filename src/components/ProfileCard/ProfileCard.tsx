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
        <EmployeePhoto photoUrl={employee.photo} alt={fullName} />
      </div>

      <p className={styles.position}>{MISSING_VALUE_PLACEHOLDER}</p>
      <h2 className={styles.name}>
        <span className={styles.lastAndFirstName}>
          {employee.surname} {employee.name}
        </span>
        <span className={styles.patronymic}>{MISSING_VALUE_PLACEHOLDER}</span>
      </h2>

      <div className={styles.status}>
        <OnlineStatusBadge isOnline={null} />
      </div>

      {isDetailsOpened && (
        <div className={styles.details}>
          <ProfileDetails employee={employee} onClose={() => setIsDetailsOpened(false)} />
        </div>
      )}
    </article>
  );
}
