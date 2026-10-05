import { LEVEL_GAP } from "../../constants/connectors";
import type { ConnectorAnchors } from "../../hooks/useConnectorAnchors";
import { getConnectorPaths } from "../../utils/getConnectorPaths";
import styles from "./Connectors.module.css";

type ConnectorsProps = {
  // null — пока блоки ещё не измерены
  anchors: ConnectorAnchors | null;
};

export function Connectors({ anchors }: ConnectorsProps) {
  const paths = anchors ? getConnectorPaths(anchors.parentCenterX, anchors.childCentersX) : [];

  return (
    <svg className={styles.connectors} height={LEVEL_GAP} aria-hidden="true">
      {paths.map((path) => (
        <path key={path} className={styles.line} d={path} />
      ))}
    </svg>
  );
}
