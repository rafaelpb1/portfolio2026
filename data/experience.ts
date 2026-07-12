export type ExperienceItem = {
  type: "work" | "workshop";
  title: string;
  organization: string;
  location?: string;
  period: string;
  current?: boolean;
  description?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    type: "work",
    title: "Estagiário de TI",
    organization: "Unimed João Pessoa",
    location: "João Pessoa, PB",
    period: "Desde dez/2025",
    current: true,
    description:
      "Atuação em ambiente corporativo com foco em suporte, análise de requisitos e participação em desenvolvimento de soluções internas.",
    highlights: [
      "Levantamento e documentação de requisitos de sistemas",
      "Atendimento e resolução de chamados técnicos de baixa e média complexidade",
      "Apoio em análise de regras de negócio e consultas em banco de dados via PL/SQL",
      "Participação no desenvolvimento de Totem de Autoatendimento para identificação e pronto atendimento (PA)",
      "Apoio em integrações entre múltiplos sistemas corporativos",
      "Contato direto com arquitetura backend em Java utilizando Spring Framework",
    ],
  },
  {
    type: "workshop",
    title: "Workshop de Qualidade de Software (QA)",
    organization: "UNIPÊ, Centro Universitário de João Pessoa",
    period: "Março/2025",
    highlights: [
      "Elaboração e execução de casos de teste manuais",
      "Desenvolvimento de testes automatizados com Cypress",
      "Documentação completa de testes para um sistema front-end",
    ],
  },
];
