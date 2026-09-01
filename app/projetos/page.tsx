import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { projectHighlights } from "../site-data";

export const metadata: Metadata = {
  title: "Projetos do Instituto Cuidar",
  description:
    "Veja as frentes culturais e socioeducativas do Instituto Cuidar, com oficinas, eventos e formacao artistica.",
};

export default function ProjetosPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Projetos</p>
          <h1>Cada projeto e uma forma de crescer em comunidade.</h1>
          <p className="page-hero__lead">
            O portifolio do Instituto Cuidar reune acoes que misturam tradicao,
            aprendizagem e expressao artistica para fortalecer pessoas e
            territorios.
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
            <h2>Tradicoes e cultura popular</h2>
            <p>
              As acoes do instituto celebram a forca cultural de Sao Luis com
              experiencias ligadas a quadrilhas juninas, rodas de capoeira,
              danca, musicalizacao e eventos com artistas parceiros da
              comunidade.
            </p>
          </article>

          <article className="copy-card">
            <h2>Formacao artistica e cidada</h2>
            <p>
              Alem da cena e do palco, o instituto promove palestras, aulas de
              redacao e literatura e oficinas praticas que ampliam repertorio,
              estimulam a autonomia e ajudam a transformar realidades.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
