// Работник подразделения
export type Employee = {
  id: string;
  fullName: string;
  position: string;
  // Начальник подразделения. В каждом подразделении должен быть ровно один
  isHead: boolean;
};
