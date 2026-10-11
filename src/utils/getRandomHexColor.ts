const MAX_RGB_VALUE = 0xffffff;

export function getRandomHexColor(): string {
  const colorNumber = Math.floor(Math.random() * (MAX_RGB_VALUE + 1));
  return `#${colorNumber.toString(16).padStart(6, "0")}`;
}
