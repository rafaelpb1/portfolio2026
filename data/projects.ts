export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

// Seleção curada por Rafael dos projetos mais representativos do seu percurso.
export const projects: Project[] = [
  {
    slug: "library-api",
    title: "Library API",
    description:
      "API REST para gerenciamento de biblioteca (autores e livros), com autenticação e autorização por perfil (OPERADOR/GERENTE) via Spring Security e regras de negócio de domínio, como o bloqueio de exclusão de autores com livros vinculados. Desenvolvido durante curso de Java/Spring, consolidando arquitetura em camadas, autenticação/autorização e tratamento de erros padronizado.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "HikariCP",
      "MapStruct",
      "Swagger/OpenAPI",
    ],
    githubUrl: "https://github.com/rafaelpb1/libraryapi",
  },
  {
    slug: "vehicle-sale",
    title: "Vehicle Sale",
    description:
      "Sistema de gestão para concessionária de veículos, com módulos de clientes, funcionários, veículos e vendas. Autenticação JWT com matriz de permissões por perfil (ADMIN/USER) e máquina de estados para o ciclo de vida do veículo (AVAILABLE → SOLD). Frontend em React em desenvolvimento, consumindo a API REST documentada via Swagger.",
    tech: [
      "Java 17",
      "Spring Boot 4",
      "Spring Security",
      "JWT",
      "React 19",
      "TypeScript",
      "Vite",
      "H2",
      "Swagger/OpenAPI",
    ],
    githubUrl: "https://github.com/rafaelpb1/vehiclesale",
  },
  {
    slug: "aws-sqs-lab",
    title: "AWS SQS Lab",
    description:
      "Laboratório de estudo sobre mensageria assíncrona com Amazon SQS, simulado localmente via LocalStack para praticar sem custos na conta AWS. Aplica princípios SOLID (Dependency Inversion, Single Responsibility) em um exemplo enxuto e bem documentado, com padrão Producer/Consumer. Desenvolvido como parte da preparação para a certificação AWS Cloud Practitioner (CLF-C02).",
    tech: ["Java 21", "Spring Boot 4", "Spring Cloud AWS", "AWS SDK v2", "LocalStack"],
    githubUrl: "https://github.com/rafaelpb1/awscloudsqs",
  },
  {
    slug: "apuraqui",
    title: "ApurAqui",
    // TODO: ajustar com a contribuição específica de Rafael no grupo antes de publicar.
    description:
      "Aplicativo mobile de apoio ao eleitor brasileiro, com santinhos digitais, comparador de propostas, checklist de votação e dashboard de apuração. Design system próprio adaptado do GOV.BR-DS, com boa separação entre dados mockados e futura integração com API. Projeto em equipe de 5 pessoas para a disciplina de Desenvolvimento Mobile do UNIPÊ.",
    tech: ["Flutter 3", "Dart 3", "Riverpod 3", "Drift (SQLite)"],
    githubUrl: "https://github.com/Giyuulol/apuraqui",
  },
];
