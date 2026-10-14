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
};

export function StaffList({ staff, departmentName, layout = "row" }: StaffListProps) {
  const isColumn = layout === "column";
  const staffRows = isColumn ? [staff] : splitIntoChunks(staff, MAX_STAFF_PER_ROW);

  return (
    <div className={joinClassNames(styles.rows, isColumn && styles.stretched)}>
      {staffRows.map((rowStaff) => (
        <ul key={rowStaff[0].id} className={joinClassNames(styles.list, isColumn && styles.column)}>
          {rowStaff.map((employee) => (
            <li key={employee.id}>
              <ProfileCard employee={employee} departmentName={departmentName} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
