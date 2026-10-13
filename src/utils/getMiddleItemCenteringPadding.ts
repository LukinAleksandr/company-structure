import { getOffsetCenterX } from "./getOffsetCenterX";

export type CenteringPadding = {
  paddingLeft: number;
  paddingRight: number;
};

/**
 * Отступы ряда, при которых средний элемент окажется ровно по центру ряда, а значит и под родителем:
 * ряд центрируется под ним. Нужны только при нечётном количестве — при чётном среднего элемента нет.
 * Считаем по самим элементам, а не по ширине ряда, чтобы уже добавленные отступы не влияли на результат.
 */
export function getMiddleItemCenteringPadding(itemElements: HTMLElement[]): CenteringPadding | null {
  const isOddCount = itemElements.length % 2 === 1;
  const firstItem = itemElements[0];
  const lastItem = itemElements[itemElements.length - 1];
  const middleItem = itemElements[Math.floor(itemElements.length / 2)];
  if (!isOddCount || !firstItem || !lastItem || !middleItem) return null;

  const itemsCenterX = (firstItem.offsetLeft + lastItem.offsetLeft + lastItem.offsetWidth) / 2;
  // Положительное — средний элемент правее центра, и ряд нужно дополнить справа
  const middleOffsetX = getOffsetCenterX(middleItem) - itemsCenterX;

  return {
    paddingLeft: Math.max(0, -middleOffsetX * 2),
    paddingRight: Math.max(0, middleOffsetX * 2),
  };
}
