import type { Employee } from "../../types/employee";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import styles from "./StaffList.module.css";

type StaffListProps = {
  staff: Employee[];
};

export function StaffList({ staff }: StaffListProps) {
  return (
    <ul className={styles.list}>
      {staff.map((employee) => (
        <li key={employee.id}>
          <ProfileCard employee={employee} />
        </li>
      ))}
    </ul>
  );
}
