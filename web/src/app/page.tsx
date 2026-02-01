import Link from "next/link";
import {projects} from "@/data/projects";

export default function Home() {
  return (
    <main>
      <p>Olá, eu sou</p>
      <h1>Leonardo Pamplona</h1>
      <h2>Backend Developer • Java • Spring Boot • REST APIs</h2>
      <p>I build robust, scalable backend systems and APIs. Passionate about clean code, system design, and turning complex problems into elegant solutions. Currently focused on microservices architecture and distributed systems.</p>

      <section>
        <h2>Projects</h2>

        <ul>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
              <div>{p.subtitle}</div>
              <a href={p.repoUrl} target="_blank" rel="noreferrer">
                Repository
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
