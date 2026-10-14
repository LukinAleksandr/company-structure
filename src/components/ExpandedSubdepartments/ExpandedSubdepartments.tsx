import { useState } from "react";
import { useMiddleItemCentering } from "../../hooks/useMiddleItemCentering";
import type { Department } from "../../types/department";
import { Connectors } from "../Connectors/Connectors";
import { ExpandedDepartment } from "../ExpandedDepartment/ExpandedDepartment";
import styles from "./ExpandedSubdepartments.module.css";

type ExpandedSubdepartmentsProps = {
  // От этого элемента идут стрелки к ряду подразделений
  parentElement: HTMLElement | null;
  departments: Department[];
};

// Без обёртки: стрелки и ряд должны лежать прямо в колонке родителя и иметь с ним общий offsetParent
export function ExpandedSubdepartments({ parentElement, departments }: ExpandedSubdepartmentsProps) {
  // В state, а не в useRef: стрелки должны перерисоваться, когда элемент появится
  const [rowElement, setRowElement] = useState<HTMLUListElement | null>(null);
  const rowCenteringPadding = useMiddleItemCentering(rowElement);

  return (
    <>
      <Connectors
        parentElement={parentElement}
        childrenListElement={rowElement}
        childColors={departments.map((department) => department.color)}
      />
      <ul ref={setRowElement} className={styles.row} style={rowCenteringPadding ?? undefined}>
        {departments.map((department) => (
          <li key={department.id}>
            <ExpandedDepartment department={department} nestingLevel={1} />
          </li>
        ))}
      </ul>
    </>
  );
}
