import type { Viewport } from "../types/viewport";

// Ограничения масштаба рабочей области
export const MIN_SCALE = 0.1;
export const MAX_SCALE = 4;

// Во сколько раз меняется масштаб при нажатии кнопок "+" и "−"
export const BUTTON_ZOOM_FACTOR = 1.2;

// Чувствительность зума колесом мыши / жестом pinch на тачпаде
export const WHEEL_ZOOM_SENSITIVITY = 0.01;

// Шаг точечной сетки на фоне (в пикселях при масштабе 100%)
export const GRID_STEP = 24;

// Положение и масштаб рабочей области при открытии
export const INITIAL_VIEWPORT: Viewport = {
  offsetX: 0,
  offsetY: 0,
  scale: 1,
};
