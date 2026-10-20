import { texts } from "../../texts/texts";
import styles from "./ZoomControls.module.css";

type ZoomControlsProps = {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
};

export function ZoomControls({ scale, onZoomIn, onZoomOut, onReset }: ZoomControlsProps) {
  const scaleInPercent = Math.round(scale * 100);

  return (
    <div className={styles.panel}>
      <button type="button" className={styles.button} onClick={onZoomOut} title={texts.zoomOut}>
        −
      </button>
      <button type="button" className={styles.scaleValue} onClick={onReset} title={texts.resetZoom}>
        {scaleInPercent}%
      </button>
      <button type="button" className={styles.button} onClick={onZoomIn} title={texts.zoomIn}>
        +
      </button>
    </div>
  );
}
