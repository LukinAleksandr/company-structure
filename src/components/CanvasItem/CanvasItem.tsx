import type { ReactNode } from "react";
import type { Point } from "../../types/geometry";
import styles from "./CanvasItem.module.css";

type CanvasItemProps = {
  // В координатах полотна, а не экрана
  position: Point;
  children: ReactNode;
};

export function CanvasItem({ position, children }: CanvasItemProps) {
  return (
    <div className={styles.item} style={{ left: position.x, top: position.y }}>
      {children}
    </div>
  );
}
