import type { Point } from "./geometry";

// Подразделение предприятия
export type Department = {
  id: string;
  name: string;
  headName: string;
  headPosition: string;
  // Координаты карточки на полотне (в пикселях при масштабе 100%)
  position: Point;
};
