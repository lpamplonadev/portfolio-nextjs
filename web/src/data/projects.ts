export type ProjectTabKey = "about" | "tests" | "qa" | "architeture";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  repoUrl: string;
  tags: string[];
  tabs: {
    about: {
      overview: string;
      features: string[];
    };
    tests: {
      howToRun: string[];
      coverageNotes: string[];
    };
    qa: Array<{q: string; a: string}>;
    architecture?: {
      summary: string;
      bullets: string[];
    };
  };
};

export const projects: Project[] = [
  {
    slug: "user-management-api",
    title: "User Management API",
    subtitle: "CRUD de usuários + validação + base pronta para auth.",
    repoUrl: "https://github.com/SEU_USUARIO/user-management-api",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Swagger", "Tests"],
    tabs: {
      about: {
        overview:
          "API REST para gestão de usuários, organizada em camadas e com foco em boas práticas.",
        features: [
          "CRUD completo",
          "Validações e mensagens de erro padronizadas",
          "DTOs e mapeamento",
          "Documentação com Swagger/OpenAPI",
        ],
      },
      tests: {
        howToRun: ["mvn test", "mvn verify"],
        coverageNotes: [
          "Testes de unidade para services",
          "Testes de integração para controllers (planejado)",
        ],
      },
      qa: [
        { q: "Como rodar localmente?", a: "Suba o banco e rode a aplicação (detalhes no README do repo)." },
        { q: "Tem autenticação?", a: "Estrutura preparada; implementação pode ser adicionada depois." },
      ],
      architecture: {
        summary: "Arquitetura em camadas com separação clara de responsabilidades.",
        bullets: ["Controllers → Services → Repositories", "DTOs para boundary", "Handler global de exceptions"],
      },
    },
  },
];