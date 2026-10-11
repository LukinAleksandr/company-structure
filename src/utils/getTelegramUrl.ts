// У работников нет ника в Telegram, поэтому открываем чат по номеру телефона: t.me/+380...
export function getTelegramUrl(phone: string): string {
  const phoneDigits = phone.replace(/\D/g, "");
  return `https://t.me/+${phoneDigits}`;
}
