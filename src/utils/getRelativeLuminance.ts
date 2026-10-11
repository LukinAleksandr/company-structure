import type { RgbColor } from "../types/rgbColor";

// Формула относительной яркости из WCAG 2: каналы переводятся из sRGB в линейные и смешиваются с весами,
// которые учитывают, что зелёный глаз видит ярче всего, а синий — темнее всего
export function getRelativeLuminance({ red, green, blue }: RgbColor): number {
  return 0.2126 * toLinearChannel(red) + 0.7152 * toLinearChannel(green) + 0.0722 * toLinearChannel(blue);
}

function toLinearChannel(channel: number): number {
  const normalized = channel / 255;
  return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
}
