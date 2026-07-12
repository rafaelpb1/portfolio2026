export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

// Conteúdo inicial extraído do CV e do GitHub (rafaelpb1). Rafael vai enviar
// descrições e links mais detalhados depois, basta editar este arquivo.
export const projects: Project[] = [
  {
    slug: "concessionaria-api",
    title: "Sistema de Gestão de Concessionária",
    description:
      "API REST para gerenciamento completo de uma concessionária: usuários, clientes, funcionários, veículos e vendas. Autenticação JWT com perfis ADMIN/USER, arquitetura em camadas (controller/service/repository), DTOs para desacoplamento, mapeamento com MapStruct e documentação interativa com Swagger/OpenAPI.",
    tech: ["Java", "Spring Boot", "JWT", "Swagger/OpenAPI", "MapStruct"],
    githubUrl: "https://github.com/rafaelpb1/vehiclesale",  },
  {
    slug: "todo-list-api",
    title: "Sistema de Gerenciamento de Tarefas (ToDo List)",
    description:
      "Backend completo com autenticação de usuários e CRUD de tarefas, construído com foco em escalabilidade, organização de código e integração entre camadas.",
    tech: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/rafaelpb1/api-express-typescript",  },
  {
    slug: "sistema-biblioteca",
    title: "Sistema de Biblioteca",
    description:
      "Simulação de uma biblioteca com cadastro e listagem de livros, usuários e empréstimos. Planejado com diagrama UML antes da implementação, aplicando encapsulamento, herança e polimorfismo, com interface via terminal.",
    tech: ["Java", "POO", "UML"],
    githubUrl: "https://github.com/rafaelpb1/sis_biblioteca",  },
  {
    slug: "gerenciamento-contatos",
    title: "Gerenciamento de Contatos Pessoais",
    description:
      "Aplicação web para organizar contatos pessoais, pensada para ser multifuncional e adaptável a diferentes necessidades, sejam pessoais ou profissionais.",
    tech: ["PHP", "JavaScript", "SQL"],
  },
  {
    slug: "jogo-da-forca",
    title: "Jogo da Forca",
    description:
      "Programa em que o jogador tenta adivinhar uma palavra oculta, letra por letra, dentro de um número limitado de tentativas, praticando manipulação de strings e estruturas de repetição.",
    tech: ["C"],
  },
];
