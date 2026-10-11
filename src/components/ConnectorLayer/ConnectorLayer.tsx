import type { Ref } from "react";
import { LEVEL_GAP } from "../../constants/connectors";
import type { ConnectorLine } from "../../types/connectorLine";
import styles from "./ConnectorLayer.module.css";

type ConnectorLayerProps = {
  lines: ConnectorLine[];
  ref?: Ref<HTMLDivElement>;
};

export function ConnectorLayer({ lines, ref }: ConnectorLayerProps) {
  return (
    <div ref={ref} className={styles.layer}>
      <svg className={styles.canvas} width="100%" height={LEVEL_GAP} aria-hidden="true">
        {lines.map((line) => (
          <path key={line.path} className={styles.line} d={line.path} style={{ stroke: line.color }} />
        ))}
      </svg>
    </div>
  );
}
