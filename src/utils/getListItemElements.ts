export function getListItemElements(listElement: HTMLElement): HTMLElement[] {
  return Array.from(listElement.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
}
