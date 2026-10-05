import type { Employee } from "./employee";
import type { NonEmptyArray } from "./nonEmptyArray";

export type Department = {
  id: string;
  name: string;
  description: string;
  staff: NonEmptyArray<Employee>;
  children: Department[] | null;
};
