import type { Employee } from "../../types/employee";
import type { StaffLayout } from "../../types/staffLayout";
import { joinClassNames } from "../../utils/joinClassNames";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import styles from "./StaffList.module.css";

type StaffListProps = {
  staff: Employee[];
  layout?: StaffLayout;
};

export function StaffList({ staff, layout = "row" }: StaffListProps) {
  return (
    <ul className={joinClassNames(styles.list, layout === "column" && styles.column)}>
      {staff.map((employee) => (
        <li key={employee.id}>
          <ProfileCard employee={employee} />
        </li>
      ))}
    </ul>
  );
}
