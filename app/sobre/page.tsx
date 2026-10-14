import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { audiences, impactStats, pillars } from "../site-data";

export const metadata: Metadata = {
  title: "Sobre o Instituto Cuidar",
  description:
    "Conheça a história, os pilares de atuação e o impacto comunitário do Instituto Cuidar em São Luís (MA).",
};

export default function SobrePage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Sobre nós</p>
          <h1>Uma instituição que usa a cultura para gerar pertencimento.</h1>
          <p className="page-hero__lead">
            O Instituto Cuidar desenvolve projetos que valorizam a comunidade
            local, ampliam o acesso a experiências artísticas e fortalecem a
            economia criativa com responsabilidade social.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <article className="copy-card">
            <h2>Apresentação</h2>
            <p>
              A atuação do instituto parte da ideia de que cultura também é
              cuidado. Por isso, as ações combinam arte, convivência e
              formação, levando música, dança, esportes de matriz cultural e
              oficinas para pessoas em situação de vulnerabilidade e para
              comunidades com pouco acesso às atividades culturais.
            </p>
          </article>

          <article className="copy-card copy-card--accent">
            <h2>Histórico de atuação</h2>
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
            <h2>Trabalho de base, linguagem artística e impacto contínuo.</h2>
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
            <p className="eyebrow">Públicos atendidos</p>
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
