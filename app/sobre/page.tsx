import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { audiences, impactStats, pillars } from "../site-data";

export const metadata: Metadata = {
  title: "Sobre o Instituto Cuidar",
  description:
    "Conheca a historia, os pilares de atuacao e o impacto comunitario do Instituto Cuidar em Sao Luis - MA.",
};

export default function SobrePage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Sobre nos</p>
          <h1>Uma instituicao que usa a cultura para gerar pertencimento.</h1>
          <p className="page-hero__lead">
            O Instituto Cuidar desenvolve projetos que valorizam a comunidade
            local, ampliam o acesso a experiencias artisticas e fortalecem a
            economia criativa com responsabilidade social.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <article className="copy-card">
            <h2>Apresentacao</h2>
            <p>
              A atuacao do instituto parte da ideia de que cultura tambem e
              cuidado. Por isso, as acoes combinam arte, convivencia e
              formacao, levando musica, danca, esportes de matriz cultural e
              oficinas para pessoas em situacao de vulnerabilidade e para
              comunidades com pouco acesso a atividades culturais.
            </p>
          </article>

          <article className="copy-card copy-card--accent">
            <h2>Historico de atuacao</h2>
            <div className="stat-list stat-list--compact">
              {impactStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Como atuamos</p>
            <h2>Trabalho de base, linguagem artistica e impacto continuo.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Publicos atendidos</p>
            <h2>Programas pensados para diferentes idades e realidades.</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <article key={audience} className="info-card">
                <p>{audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
