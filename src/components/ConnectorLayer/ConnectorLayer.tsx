import type { Ref } from "react";
import { LEVEL_GAP } from "../../constants/connectors";
import styles from "./ConnectorLayer.module.css";

type ConnectorLayerProps = {
  paths: string[];
  ref?: Ref<HTMLDivElement>;
};

export function ConnectorLayer({ paths, ref }: ConnectorLayerProps) {
  return (
    <div ref={ref} className={styles.layer}>
      <svg className={styles.canvas} width="100%" height={LEVEL_GAP} aria-hidden="true">
        {paths.map((path) => (
          <path key={path} className={styles.line} d={path} />
        ))}
      </svg>
    </div>
  );
}
