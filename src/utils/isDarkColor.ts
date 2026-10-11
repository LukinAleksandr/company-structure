import { DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from "../constants/colors";
import { getRelativeLuminance } from "./getRelativeLuminance";
import { parseHexColor } from "./parseHexColor";

// Тёмный — если белый текст на нём контрастнее, чем тёмный (контраст по WCAG 2).
// Если цвет не hex — считаем его светлым: тёмный текст это значение по умолчанию
export function isDarkColor(color: string): boolean {
  const background = parseHexColor(color);
  const darkText = parseHexColor(DARK_TEXT_COLOR);
  const lightText = parseHexColor(LIGHT_TEXT_COLOR);
  if (!background || !darkText || !lightText) return false;

  const backgroundLuminance = getRelativeLuminance(background);
  const contrastWithDark = getContrastRatio(backgroundLuminance, getRelativeLuminance(darkText));
  const contrastWithLight = getContrastRatio(backgroundLuminance, getRelativeLuminance(lightText));

  return contrastWithLight > contrastWithDark;
}

function getContrastRatio(firstLuminance: number, secondLuminance: number): number {
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}
