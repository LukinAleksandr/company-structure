import styles from "./DepartmentHeader.module.css";

type DepartmentHeaderProps = {
  name: string;
};

export function DepartmentHeader({ name }: DepartmentHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.name}>{name}</h2>
    </header>
  );
}
