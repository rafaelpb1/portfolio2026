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
  {
    category: "Soft Skills",
    items: [
      "Gerenciamento de tempo",
      "Comunicação",
      "Trabalho em equipe",
      "Adaptabilidade",
      "Resolução de problemas",
    ],
  },
];
