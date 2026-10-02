/**
 * Viewport — это то, как мы смотрим на рабочую область:
 *  - offsetX, offsetY — сдвиг содержимого относительно левого верхнего угла экрана
 *  - scale — масштаб (1 = 100%)
 */
export type Viewport = {
  offsetX: number;
  offsetY: number;
  scale: number;
};
