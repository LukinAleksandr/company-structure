import { useState } from "react";
import type { Department } from "../../types/department";
import { CloseButton } from "../CloseButton/CloseButton";
import { DepartmentHeader } from "../DepartmentHeader/DepartmentHeader";
import { ExpandedSubdepartments } from "../ExpandedSubdepartments/ExpandedSubdepartments";
import { StaffRows } from "../StaffRows/StaffRows";
import styles from "./DepartmentDetails.module.css";

type DepartmentDetailsProps = {
  department: Department;
  onClose: () => void;
};

export function DepartmentDetails({ department, onClose }: DepartmentDetailsProps) {
  // В state, а не в useRef: стрелки должны перерисоваться, когда элемент появится
  const [staffElement, setStaffElement] = useState<HTMLDivElement | null>(null);

  return (
    <section className={styles.details}>
      <CloseButton className={styles.closeButton} onClick={onClose} />

      <DepartmentHeader name={department.name} textColor={department.color ?? undefined} />

      {/* Без людей стрелкам к подотделам не от чего начинаться — staffElement останется null */}
      <div className={styles.staff}>
        <StaffRows ref={setStaffElement} department={department} layout="column" />
      </div>

      {department.children && <ExpandedSubdepartments parentElement={staffElement} departments={department.children} />}
    </section>
  );
}
