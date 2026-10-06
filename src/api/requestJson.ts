export async function requestJson<Data>(url: string, signal: AbortSignal): Promise<Data> {
  const response = await fetch(url, { signal, headers: { Accept: "application/json" } });

  if (!response.ok) {
    throw new Error(`Запрос ${url} завершился ошибкой ${response.status}`);
  }

  // Ответ не валидируем: доверяем, что бекенд присылает данные в формате наших типов
  return response.json();
}
