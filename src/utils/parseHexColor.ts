import type { RgbColor } from "../types/rgbColor";

// #rgb, #rrggbb или #rrggbbaa. Прозрачность отбрасываем: для выбора цвета текста хватает самого цвета
const HEX_COLOR_PATTERN = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export function parseHexColor(color: string): RgbColor | null {
  const match = HEX_COLOR_PATTERN.exec(color.trim());
  if (!match) return null;

  const hexDigits = match[1];
  const fullHex =
    hexDigits.length === 3
      ? hexDigits
          .split("")
          .map((digit) => digit + digit)
          .join("")
      : hexDigits;

  return {
    red: Number.parseInt(fullHex.slice(0, 2), 16),
    green: Number.parseInt(fullHex.slice(2, 4), 16),
    blue: Number.parseInt(fullHex.slice(4, 6), 16),
  };
}
