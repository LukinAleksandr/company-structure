import type { Employee } from "../../types/employee";
import type { StaffLayout } from "../../types/staffLayout";
import { joinClassNames } from "../../utils/joinClassNames";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import styles from "./StaffList.module.css";

type StaffListProps = {
  staff: Employee[];
  // Бекенд не присылает подразделение у работника — берём его из дерева
  departmentName: string;
  layout?: StaffLayout;
};

export function StaffList({ staff, departmentName, layout = "row" }: StaffListProps) {
  return (
    <ul className={joinClassNames(styles.list, layout === "column" && styles.column)}>
      {staff.map((employee) => (
        <li key={employee.id}>
          <ProfileCard employee={employee} departmentName={departmentName} />
        </li>
      ))}
    </ul>
  );
}
