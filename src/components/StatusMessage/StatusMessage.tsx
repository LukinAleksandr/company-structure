import styles from "./StatusMessage.module.css";

type StatusMessageProps = {
  text: string;
};

export function StatusMessage({ text }: StatusMessageProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text} role="status">
        {text}
      </p>
    </div>
  );
}
