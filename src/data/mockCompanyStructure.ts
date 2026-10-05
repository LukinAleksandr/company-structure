import type { Department } from "../types/department";

// Временные данные. Позже будут приходить с бекенда.
// Уровни: предприятие → департаменты → отделы → секторы → группы
export const mockCompanyStructure: Department = {
  id: "company",
  name: "ТОВ «Ромашка»",
  description: "Виробництво та продаж побутової хімії",
  staff: [
    { id: "employee-1", fullName: "Іваненко Іван Іванович", position: "Генеральний директор", isHead: true },
    { id: "employee-2", fullName: "Шевченко Марія Петрівна", position: "Помічник директора", isHead: false },
  ],
  children: [
    {
      id: "commercial",
      name: "Комерційний департамент",
      description: "Продажі та просування продукції",
      staff: [
        { id: "employee-3", fullName: "Петренко Олена Василівна", position: "Комерційний директор", isHead: true },
      ],
      children: [
        {
          id: "sales",
          name: "Відділ продажів",
          description: "Робота з клієнтами та укладання договорів",
          staff: [
            {
              id: "employee-4",
              fullName: "Коваленко Андрій Миколайович",
              position: "Начальник відділу продажів",
              isHead: true,
            },
          ],
          children: [
            {
              id: "retail-sales",
              name: "Сектор роздрібних продажів",
              description: "Продажі через магазини та маркетплейси",
              staff: [
                {
                  id: "employee-5",
                  fullName: "Шевчук Ірина Олегівна",
                  position: "Керівник сектору",
                  isHead: true,
                },
              ],
              children: [
                {
                  id: "sales-kyiv",
                  name: "Група продажів «Київ»",
                  description: "Київ та Київська область",
                  staff: [
                    {
                      id: "employee-6",
                      fullName: "Бондар Максим Сергійович",
                      position: "Керівник групи",
                      isHead: true,
                    },
                    {
                      id: "employee-7",
                      fullName: "Ткаченко Юлія Андріївна",
                      position: "Менеджер з продажу",
                      isHead: false,
                    },
                  ],
                  children: null,
                },
                {
                  id: "sales-lviv",
                  name: "Група продажів «Львів»",
                  description: "Львів та західні області",
                  staff: [
                    { id: "employee-8", fullName: "Мельник Тарас Ігорович", position: "Керівник групи", isHead: true },
                  ],
                  children: null,
                },
              ],
            },
            {
              id: "wholesale-sales",
              name: "Сектор оптових продажів",
              description: "Дистриб'ютори та мережі",
              staff: [
                { id: "employee-9", fullName: "Кравченко Дмитро Петрович", position: "Керівник сектору", isHead: true },
              ],
              children: null,
            },
          ],
        },
        {
          id: "marketing",
          name: "Відділ маркетингу",
          description: "Реклама, бренд та аналітика ринку",
          staff: [
            {
              id: "employee-10",
              fullName: "Олійник Наталія Андріївна",
              position: "Начальник відділу маркетингу",
              isHead: true,
            },
            { id: "employee-11", fullName: "Савченко Олег Вікторович", position: "Маркетолог", isHead: false },
          ],
          children: null,
        },
      ],
    },
    {
      id: "finance",
      name: "Фінансовий департамент",
      description: "Облік, звітність та фінансове планування",
      staff: [
        { id: "employee-12", fullName: "Лисенко Сергій Олександрович", position: "Фінансовий директор", isHead: true },
      ],
      children: [
        {
          id: "accounting",
          name: "Бухгалтерія",
          description: "Бухгалтерський та податковий облік",
          staff: [
            { id: "employee-13", fullName: "Руденко Тетяна Миколаївна", position: "Головний бухгалтер", isHead: true },
            { id: "employee-14", fullName: "Марченко Оксана Іванівна", position: "Бухгалтер", isHead: false },
          ],
          children: null,
        },
        {
          id: "financial-planning",
          name: "Відділ фінансового планування",
          description: "Бюджетування та контроль витрат",
          staff: [
            { id: "employee-15", fullName: "Захарченко Віктор Іванович", position: "Начальник відділу", isHead: true },
          ],
          children: null,
        },
      ],
    },
    {
      id: "it",
      name: "Департамент інформаційних технологій",
      description: "Розробка та підтримка IT-систем компанії",
      staff: [{ id: "employee-16", fullName: "Поліщук Артем Вікторович", position: "IT-директор", isHead: true }],
      children: [
        {
          id: "development",
          name: "Відділ розробки",
          description: "Внутрішні сервіси та інтеграції",
          staff: [
            { id: "employee-17", fullName: "Гончаренко Богдан Юрійович", position: "Начальник відділу", isHead: true },
          ],
          children: [
            {
              id: "frontend",
              name: "Сектор фронтенду",
              description: "Вебінтерфейси та мобільні застосунки",
              staff: [
                { id: "employee-18", fullName: "Кузьменко Анна Сергіївна", position: "Керівник сектору", isHead: true },
                {
                  id: "employee-19",
                  fullName: "Павленко Денис Олегович",
                  position: "Frontend-розробник",
                  isHead: false,
                },
              ],
              children: null,
            },
            {
              id: "backend",
              name: "Сектор бекенду",
              description: "Серверна частина та бази даних",
              staff: [
                { id: "employee-20", fullName: "Левченко Роман Олегович", position: "Керівник сектору", isHead: true },
              ],
              children: null,
            },
          ],
        },
        {
          id: "support",
          name: "Відділ технічної підтримки",
          description: "Допомога співробітникам та обслуговування техніки",
          staff: [
            { id: "employee-21", fullName: "Клименко Василь Петрович", position: "Начальник відділу", isHead: true },
          ],
          children: null,
        },
      ],
    },
  ],
};
