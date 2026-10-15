import styles from "./DepartmentHeader.module.css";

type DepartmentHeaderProps = {
  name: string;
  textColor: string | null;
};

export function DepartmentHeader({ name, textColor }: DepartmentHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.name} style={textColor ? { color: textColor } : undefined}>
        {name}
      </h2>
    </header>
  );
}
