import { useRef } from "react";
import { useConnectorAnchors } from "../../hooks/useConnectorAnchors";
import type { Department } from "../../types/department";
import { Connectors } from "../Connectors/Connectors";
import { DepartmentRow } from "../DepartmentRow/DepartmentRow";
import { DepartmentSection } from "../DepartmentSection/DepartmentSection";
import styles from "./OrgChart.module.css";

type OrgChartProps = {
  rootDepartment: Department;
};

export function OrgChart({ rootDepartment }: OrgChartProps) {
  const rootRef = useRef<HTMLElement>(null);
  const childrenRowRef = useRef<HTMLUListElement>(null);
  const connectorAnchors = useConnectorAnchors(rootRef, childrenRowRef);

  return (
    <div className={styles.chart}>
      <DepartmentSection ref={rootRef} department={rootDepartment} />

      {rootDepartment.children && (
        <>
          <Connectors anchors={connectorAnchors} />
          <DepartmentRow ref={childrenRowRef} departments={rootDepartment.children} />
        </>
      )}
    </div>
  );
}
