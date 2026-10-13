import { MAX_STAFF_PER_ROW } from "../../constants/layout";
import type { Employee } from "../../types/employee";
import type { StaffLayout } from "../../types/staffLayout";
import { joinClassNames } from "../../utils/joinClassNames";
import { splitIntoChunks } from "../../utils/splitIntoChunks";
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
  const staffRows = layout === "row" ? splitIntoChunks(staff, MAX_STAFF_PER_ROW) : [staff];

  return (
    <div className={styles.rows}>
      {staffRows.map((rowStaff) => (
        <ul key={rowStaff[0].id} className={joinClassNames(styles.list, layout === "column" && styles.column)}>
          {rowStaff.map((employee) => (
            <li key={employee.id}>
              <ProfileCard
                employee={employee}
                departmentName={departmentName}
                isOnDarkBackground={isOnDarkBackground}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
