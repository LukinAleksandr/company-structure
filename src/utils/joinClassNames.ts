// Склеивает CSS-классы в одну строку, пропуская false/null/undefined.
// Пример: joinClassNames(styles.card, isActive && styles.active)
export function joinClassNames(...classNames: Array<string | false | null | undefined>): string {
  return classNames.filter(Boolean).join(" ");
}
