import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { projectHighlights } from "../site-data";

export const metadata: Metadata = {
  title: "Projetos do Instituto Cuidar",
  description:
    "Veja as frentes culturais e socioeducativas do Instituto Cuidar, com oficinas, eventos e formação artística.",
};

export default function ProjetosPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Projetos</p>
          <h1>Cada projeto é uma forma de crescer em comunidade.</h1>
          <p className="page-hero__lead">
            O portfólio do Instituto Cuidar reúne ações que misturam tradição,
            aprendizagem e expressão artística para fortalecer pessoas e
            territórios.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container project-grid">
          {projectHighlights.map((project) => (
            <article key={project.title} className="project-card project-card--large">
              <p className="project-card__tag">Programa cultural</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container two-column">
          <article className="copy-card">
            <h2>Tradições e cultura popular</h2>
            <p>
              As ações do instituto celebram a força cultural de São Luís com
              experiências ligadas a quadrilhas juninas, rodas de capoeira,
              dança, musicalização e eventos com artistas parceiros da
              comunidade.
            </p>
          </article>

          <article className="copy-card">
            <h2>Formação artística e cidadã</h2>
            <p>
              Além da cena e do palco, o instituto promove palestras, aulas de
              redação e literatura e oficinas práticas que ampliam repertório,
              estimulam a autonomia e ajudam a transformar realidades.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
