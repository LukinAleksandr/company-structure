import { type Ref, useState } from "react";
import type { Department } from "../../types/department";
import { DepartmentSection } from "../DepartmentSection/DepartmentSection";
import { Subdepartments } from "../Subdepartments/Subdepartments";
import styles from "./OrgChart.module.css";

type OrgChartProps = {
  rootDepartment: Department;
  ref?: Ref<HTMLDivElement>;
};

export function OrgChart({ rootDepartment, ref }: OrgChartProps) {
  // В state, а не в useRef: стрелки должны перерисоваться, когда элемент появится
  const [rootDepartmentElement, setRootDepartmentElement] = useState<HTMLElement | null>(null);

  return (
    <div ref={ref} className={styles.chart}>
      <DepartmentSection ref={setRootDepartmentElement} department={rootDepartment} />

      {rootDepartment.children && (
        <Subdepartments
          parentElement={rootDepartmentElement}
          departments={rootDepartment.children}
          staffLayout="row"
          detailsDepth={0}
        />
      )}
    </div>
  );
}
