export function findIndexesByIds(items: { id: string }[], ids: string[]): number[] {
  const indexes: number[] = [];

  items.forEach((item, index) => {
    if (ids.includes(item.id)) indexes.push(index);
  });

  return indexes;
}
