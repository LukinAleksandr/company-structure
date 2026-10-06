import { useMemo, useState } from "react";
import { useOpenedDepartments } from "../../hooks/useOpenedDepartments";
import type { Department } from "../../types/department";
import type { StaffLayout } from "../../types/staffLayout";
import { findIndexesByIds } from "../../utils/findIndexesByIds";
import { Connectors } from "../Connectors/Connectors";
import { DepartmentDetailsRow } from "../DepartmentDetailsRow/DepartmentDetailsRow";
import { DepartmentRow } from "../DepartmentRow/DepartmentRow";
import { PairedConnectors } from "../PairedConnectors/PairedConnectors";

type SubdepartmentsProps = {
  // От этого элемента идут стрелки к ряду подразделений
  parentElement: HTMLElement | null;
  departments: Department[];
  staffLayout: StaffLayout;
  // Сколько блоков с деталями вложено друг в друга над этим рядом
  detailsDepth: number;
};

// Без обёртки: стрелки и ряды должны лежать прямо в колонке родителя и иметь с ним общий offsetParent
export function Subdepartments({ parentElement, departments, staffLayout, detailsDepth }: SubdepartmentsProps) {
  // Элементы в state, а не в useRef: стрелки должны перерисоваться, когда элемент появится
  const [rowElement, setRowElement] = useState<HTMLUListElement | null>(null);
  const [detailsRowElement, setDetailsRowElement] = useState<HTMLUListElement | null>(null);

  const { openedDepartmentIds, toggleDepartment, closeDepartment } = useOpenedDepartments();
  const openedDepartments = departments.filter((department) => openedDepartmentIds.includes(department.id));
  const openedCardIndexes = useMemo(
    () => findIndexesByIds(departments, openedDepartmentIds),
    [departments, openedDepartmentIds],
  );

  return (
    <>
      <Connectors parentElement={parentElement} childrenListElement={rowElement} />
      <DepartmentRow
        ref={setRowElement}
        departments={departments}
        staffLayout={staffLayout}
        openedDepartmentIds={openedDepartmentIds}
        onToggleDepartment={toggleDepartment}
      />

      {openedDepartments.length > 0 && (
        <>
          <PairedConnectors
            parentsListElement={rowElement}
            parentIndexes={openedCardIndexes}
            childrenListElement={detailsRowElement}
          />
          <DepartmentDetailsRow
            ref={setDetailsRowElement}
            departments={openedDepartments}
            depth={detailsDepth + 1}
            onCloseDepartment={closeDepartment}
          />
        </>
      )}
    </>
  );
}
