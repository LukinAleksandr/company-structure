// Массив, в котором гарантированно есть хотя бы один элемент
export type NonEmptyArray<Item> = [Item, ...Item[]];
