import type { Department } from "../../types/department";
import { administrationDepartment } from "./administrationDepartment";
import { commercialDepartment } from "./commercialDepartment";
import { marketingDepartment } from "./marketingDepartment";
import { operationsDepartment } from "./operationsDepartment";
import { personnelDepartment } from "./personnelDepartment";

export const mockCompanyStructure: Department = {
  id: "founders",
  name: "Засновники",
  description: "Founders",
  staff: [
    {
      id: "employee-1",
      lastName: "Іваненко",
      firstName: "Іван",
      patronymic: "Іванович",
      photoUrl: null,
      position: "Засновник",
      departmentName: "Засновники",
      city: "Київ",
      phone: "+380 67 101 07 13",
      email: "i.ivanenko@romashka.ua",
      isOnline: true,
      isHead: true,
    },
    {
      id: "employee-2",
      lastName: "Коваль",
      firstName: "Олена",
      patronymic: "Петрівна",
      photoUrl: `${import.meta.env.BASE_URL}profile.png`,
      position: "Засновниця",
      departmentName: "Засновники",
      city: "Київ",
      phone: "+380 67 102 14 26",
      email: "o.koval@romashka.ua",
      isOnline: true,
      isHead: true,
    },
  ],
  children: [
    commercialDepartment,
    marketingDepartment,
    personnelDepartment,
    administrationDepartment,
    operationsDepartment,
  ],
};
