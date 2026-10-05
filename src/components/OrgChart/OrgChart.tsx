import { type Ref, useRef } from "react";
import { useConnectorAnchors } from "../../hooks/useConnectorAnchors";
import type { Department } from "../../types/department";
import { Connectors } from "../Connectors/Connectors";
import { DepartmentRow } from "../DepartmentRow/DepartmentRow";
import { DepartmentSection } from "../DepartmentSection/DepartmentSection";
import styles from "./OrgChart.module.css";

type OrgChartProps = {
  rootDepartment: Department;
  ref?: Ref<HTMLDivElement>;
};

export function OrgChart({ rootDepartment, ref }: OrgChartProps) {
  const rootDepartmentRef = useRef<HTMLElement>(null);
  const childrenRowRef = useRef<HTMLUListElement>(null);
  const connectorAnchors = useConnectorAnchors(rootDepartmentRef, childrenRowRef);

  return (
    <div ref={ref} className={styles.chart}>
      <DepartmentSection ref={rootDepartmentRef} department={rootDepartment} />

      {rootDepartment.children && (
        <>
          <Connectors anchors={connectorAnchors} />
          <DepartmentRow ref={childrenRowRef} departments={rootDepartment.children} />
        </>
      )}
    </div>
  );
}
