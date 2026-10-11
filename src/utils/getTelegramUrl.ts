const TELEGRAM_LINK_PREFIX = /^(https?:\/\/)?t\.me\//;
// Правила Telegram для username: латиница, цифры и подчёркивание, от 5 до 32 символов
const TELEGRAM_USERNAME = /^[A-Za-z0-9_]{5,32}$/;

// Бекенд присылает telegram в свободной форме, поэтому ссылку строим только из того, что похоже на username
export function getTelegramUrl(telegram: string | null): string | null {
  if (telegram === null) return null;

  const username = telegram.trim().replace(TELEGRAM_LINK_PREFIX, "").replace(/^@/, "");
  if (!TELEGRAM_USERNAME.test(username)) return null;

  return `https://t.me/${username}`;
}
