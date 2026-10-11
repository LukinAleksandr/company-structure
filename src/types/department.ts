import type { Employee } from "./employee";

// Поля названы как в ответе бекенда (snake_case) — временно, пока нет преобразования ответа в наши типы
export type Department = {
  id: number;
  name: string;
  type: "department" | "division" | null;
  parent_id: number | null;
  staff: Employee[] | null;
  children: Department[] | null;
};
