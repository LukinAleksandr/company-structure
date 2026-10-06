// Временно: бекенда ещё нет — запросы возвращают моки из src/data/. Когда API появится, ставим false
export const SHOULD_USE_MOCK_API = true;

// Задержка мок-ответа, чтобы состояние загрузки было видно так же, как при настоящем запросе
export const MOCK_RESPONSE_DELAY_MS = 400;

export const API_BASE_URL = "/api";
export const COMPANY_STRUCTURE_ENDPOINT = `${API_BASE_URL}/company-structure`;
