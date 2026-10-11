export type EmployeeStatus = "green" | "yellow" | "gray";

// Поля названы как в ответе бекенда (snake_case) — временно, пока нет преобразования ответа в наши типы
export type Employee = {
  id: number;
  name: string;
  surname: string;
  // Может прийти пустой строкой
  phone: string;
  // Приходит в произвольном виде: "@nick", "nick", ссылка t.me, а иногда вообще не ник
  telegram: string | null;
  email: string;
  birthday: string | null;
  photo: string;
  // green — онлайн, yellow — отошёл, gray — офлайн
  status: EmployeeStatus;
  type: "founder" | "manager" | "team_lead" | "subordinate";
  position: string;
  city: string;
  department_role: "head" | "staff";
};
