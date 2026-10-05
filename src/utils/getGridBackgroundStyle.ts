import type { CSSProperties } from "react";
import { GRID_STEP } from "../constants/viewport";
import type { Viewport } from "../types/viewport";

export function getGridBackgroundStyle(viewport: Viewport): CSSProperties {
  const scaledGridStep = GRID_STEP * viewport.scale;

  return {
    backgroundSize: `${scaledGridStep}px ${scaledGridStep}px`,
    backgroundPosition: `${viewport.offsetX}px ${viewport.offsetY}px`,
  };
}
