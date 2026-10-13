export function splitIntoChunks<Item>(items: Item[], chunkSize: number): Item[][] {
  const chunks: Item[][] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
}
