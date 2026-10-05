import type { Viewport } from "../types/viewport";

export const MIN_SCALE = 0.1;
export const MAX_SCALE = 4;

export const BUTTON_ZOOM_FACTOR = 1.2;

// Чувствительность зума колесом мыши: один щелчок колеса (~100px) ≈ 20% масштаба
export const WHEEL_ZOOM_SENSITIVITY = 0.002;

export const GRID_STEP = 24;

export const INITIAL_VIEWPORT: Viewport = {
  offsetX: 0,
  offsetY: 0,
  scale: 1,
};
