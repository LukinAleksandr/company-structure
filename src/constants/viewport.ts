import type { Viewport } from "../types/viewport";

export const MIN_SCALE = 0.1;
export const MAX_SCALE = 4;

export const BUTTON_ZOOM_FACTOR = 1.2;

export const WHEEL_ZOOM_SENSITIVITY = 0.01;
// Pinch на тачпаде присылает дельты 1–10px, а щелчок колеса мыши ~100px.
// Ограничение не даёт мыши менять масштаб скачками: щелчок ≈ 20%, pinch остаётся плавным
export const MAX_WHEEL_ZOOM_DELTA = 20;

export const GRID_STEP = 24;

// Отступы от краёв экрана до схемы при открытии страницы
export const START_VIEW_TOP_MARGIN = 80;
export const START_VIEW_SIDE_MARGIN = 40;

export const INITIAL_VIEWPORT: Viewport = {
  offsetX: 0,
  offsetY: 0,
  scale: 1,
};
