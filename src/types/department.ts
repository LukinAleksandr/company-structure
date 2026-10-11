import type { Employee } from "./employee";

// Поля названы как в ответе бекенда (snake_case) — временно, пока нет преобразования ответа в наши типы
export type Department = {
  id: number;
  name: string;
  type: "founders" | "department" | "division";
  parent_id: number | null;
  // Пока у всех null
  color: string | null;
  staff: Employee[] | null;
  children: Department[] | null;
};
