import styles from "./DepartmentHeader.module.css";

type DepartmentHeaderProps = {
  name: string;
  description: string;
};

export function DepartmentHeader({ name, description }: DepartmentHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </header>
  );
}
