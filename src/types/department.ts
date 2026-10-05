import type { Employee } from "./employee";
import type { NonEmptyArray } from "./nonEmptyArray";

// Подразделение предприятия. Само предприятие — тоже подразделение, корень дерева
export type Department = {
  id: string;
  name: string;
  description: string;
  // Хотя бы один работник есть всегда — у подразделения должен быть начальник
  staff: NonEmptyArray<Employee>;
  // Подчинённые подразделения. null — если подчинённых нет
  children: Department[] | null;
};
