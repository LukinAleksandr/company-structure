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
  // Карточки полупрозрачные — сквозь них виден фон подразделения, и на тёмном фоне текст должен быть светлым
  isOnDarkBackground?: boolean;
};

export function StaffList({ staff, departmentName, layout = "row", isOnDarkBackground = false }: StaffListProps) {
  return (
    <ul className={joinClassNames(styles.list, layout === "column" && styles.column)}>
      {staff.map((employee) => (
        <li key={employee.id}>
          <ProfileCard employee={employee} departmentName={departmentName} isOnDarkBackground={isOnDarkBackground} />
        </li>
      ))}
    </ul>
  );
}
