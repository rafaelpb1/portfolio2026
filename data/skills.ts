export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Linguagens",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    category: "Frameworks & Bibliotecas",
    items: ["React", "Spring Boot", "Express", "Bootstrap"],
  },
  {
    category: "Dados",
    items: ["MySQL", "PostgreSQL", "Oracle Database", "JPA / Hibernate", "PL/SQL"],
  },
  {
    category: "Ferramentas & Práticas",
    items: [
      "Git / GitHub",
      "DBeaver",
      "Postman",
      "Swagger / OpenAPI",
      "Cypress",
      "API REST",
      "AWS (em estudo)",
    ],
  },
];

export const certifications = [
  {
    title: "Introdução à Análise de Dados com Power BI",
    issuer: "Curso livre",
    hours: "5h",
  },
  {
    title: "Fundamentos de HTML",
    issuer: "DevMedia",
    hours: "7h",
  },
  {
    title: "CSS: Propriedades",
    issuer: "DevMedia",
    hours: "11h",
  },
] as const;
