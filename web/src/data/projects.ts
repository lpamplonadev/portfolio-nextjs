export type ProjectTabKey = "about" | "tests" | "qa" | "architeture";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  repoUrl: string;
  tags: string[];
  tabs?: {
    about: {
      overview: string;
      features: string[];
    };
    tests: {
      howToRun: string[];
      coverageNotes: string[];
    };
    qa: Array<{ q: string; a: string }>;
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
    subtitle: "A complete REST API for user authentication and management with JWT, role-based access control, and comprehensive validation.",
    repoUrl: "https://github.com/lpamplonadev/user-management-api",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker", "JUnit"],
    tabs: {
      about: {
        overview:
          "This User Management API was built to provide a robust, secure foundation for any application requiring user authentication. It implements industry-standard security practices including bcrypt password hashing, JWT token rotation, and comprehensive input validation.\nThe API follows RESTful conventions and includes complete Swagger documentation. It's designed to be easily extendable and can be deployed as a standalone service or integrated into a microservices architecture.",
        features: [
          "JWT token generation and validation",
          "OAuth2 provider integration",
          "Role-based access control (RBAC)",
          "Email verification flow",
          "Password reset functionality",
          "Rate limiting and brute force protection",
        ],
      },
      tests: {
        howToRun: ["mvn test", "mvn verify"],
        coverageNotes: [
          "Unit tests for all service layer methods",
          "Integration tests for REST endpoints",
          "Security tests for authentication flows",
          "Validation tests for DTO constraint",
        ],
      },
      qa: [
        {
          q: "How do I configure the database connection?",
          a: "Set the DATABASE_URL, DB_USERNAME, and DB_PASSWORD environment variables, or configure them in application.yml for local development.",
        },
        {
          q: "How do I run the project locally?",
          a: "1. Clone the repo\n2. Run 'docker-compose up -d' for PostgreSQL\n3. Run 'mvn spring-boot:run'\n4. Access Swagger at http://localhost:8080/swagger-ui.html",
        },
      ],
      architecture: {
        summary:
          "The project follows a layered architecture with clear separation between Controllers, Services, and Repositories. DTOs are used for request/response mapping, and entities are isolated from the API layer.",
        bullets: [
          "Controllers → Services → Repositories",
          "DTOs para boundary",
          "Handler global de exceptions",
        ],
      },
    },
  },
  {
    slug: "order-management-api",
    title: "Order Management API",
    subtitle: "Manipulação de pedidos + associação cliente -> pedido + validação.",
    repoUrl: "https://github.com/lpamplonadev/order-management-api",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Swagger", "Tests"],
  },
];
