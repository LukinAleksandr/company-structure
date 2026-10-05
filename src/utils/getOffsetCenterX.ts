// offsetLeft/offsetWidth не зависят от transform, поэтому зум полотна не влияет на результат
export function getOffsetCenterX(element: HTMLElement): number {
  return element.offsetLeft + element.offsetWidth / 2;
}
