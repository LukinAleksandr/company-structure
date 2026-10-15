import { MAX_STAFF_PER_ROW } from "../../constants/layout";
import type { Employee } from "../../types/employee";
import type { StaffLayout } from "../../types/staffLayout";
import { joinClassNames } from "../../utils/joinClassNames";
import { sortStaffByType } from "../../utils/sortStaffByType";
import { splitIntoChunks } from "../../utils/splitIntoChunks";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import styles from "./StaffList.module.css";

type StaffListProps = {
  staff: Employee[];
  layout?: StaffLayout;
};

export function StaffList({ staff, layout = "row" }: StaffListProps) {
  const isColumn = layout === "column";
  const sortedStaff = sortStaffByType(staff);
  const staffRows = isColumn ? [sortedStaff] : splitIntoChunks(sortedStaff, MAX_STAFF_PER_ROW);

  return (
    <div className={joinClassNames(styles.rows, isColumn && styles.stretched)}>
      {staffRows.map((rowStaff) => (
        <ul key={rowStaff[0].id} className={joinClassNames(styles.list, isColumn && styles.column)}>
          {rowStaff.map((employee) => (
            <li key={employee.id}>
              <ProfileCard employee={employee} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
