export function findIndexesByIds(items: { id: number }[], ids: number[]): number[] {
  const indexes: number[] = [];

  items.forEach((item, index) => {
    if (ids.includes(item.id)) indexes.push(index);
  });

  return indexes;
}
