import type { ReactNode } from "react";
import type { Viewport } from "../../types/viewport";
import styles from "./WorkspaceContent.module.css";

type WorkspaceContentProps = {
  viewport: Viewport;
  children: ReactNode;
};

export function WorkspaceContent({ viewport, children }: WorkspaceContentProps) {
  const transform = `translate(${viewport.offsetX}px, ${viewport.offsetY}px) scale(${viewport.scale})`;

  return (
    <div className={styles.content} style={{ transform }}>
      {children}
    </div>
  );
}
