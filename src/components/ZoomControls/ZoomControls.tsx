import styles from "./ZoomControls.module.css";

type ZoomControlsProps = {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
};

// Панель управления масштабом в правом нижнем углу
export function ZoomControls({ scale, onZoomIn, onZoomOut, onReset }: ZoomControlsProps) {
  const scaleInPercent = Math.round(scale * 100);

  return (
    <div className={styles.panel}>
      <button type="button" className={styles.button} onClick={onZoomOut} title="Уменьшить">
        −
      </button>
      <button type="button" className={styles.scaleValue} onClick={onReset} title="Сбросить масштаб">
        {scaleInPercent}%
      </button>
      <button type="button" className={styles.button} onClick={onZoomIn} title="Увеличить">
        +
      </button>
    </div>
  );
}
