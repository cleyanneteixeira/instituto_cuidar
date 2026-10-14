import Link from "next/link";
import { SiteShell } from "./components/SiteShell";
import {
  audiences,
  impactStats,
  pillars,
  projectHighlights,
} from "./site-data";

export default function Home() {
  return (
    <SiteShell>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Instituto Cuidar</p>
            <h1>
              Projetos culturais que acolhem, formam e transformam comunidades.
            </h1>
            <p className="hero__lead">
              Em São Luís (MA), o Instituto Cuidar promove cultura, integração
              social e desenvolvimento local com ações que colocam crianças,
              jovens, adultos e idosos no centro da mudança.
            </p>
            <div className="hero__actions">
              <Link href="/projetos" className="button button--primary">
                Conheça os projetos
              </Link>
              <Link href="/contato" className="button button--ghost">
                Fale com o instituto
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <p className="hero-card__label">Impacto em movimento</p>
            <div className="stat-list">
              {impactStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <p className="hero-card__note">
              O portfólio da instituição revela uma atuação contínua em
              eventos, oficinas e experiências artísticas com foco comunitário.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Quem atendemos</p>
            <h2>Uma rede de cuidado que alcança diferentes fases da vida.</h2>
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

      <section className="section section--tinted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Pilares de atuação</p>
            <h2>Arte, pertencimento e oportunidades reais para o território.</h2>
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
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Projetos em destaque</p>
              <h2>Uma agenda cultural que forma talento e fortalece identidade.</h2>
            </div>
            <Link href="/projetos" className="text-link">
              Ver página completa de projetos
            </Link>
          </div>
          <div className="project-grid">
            {projectHighlights.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Parcerias e apoio</p>
            <h2>Quer apoiar novas histórias de aprendizagem e cultura?</h2>
          </div>
          <Link href="/contato" className="button button--primary">
            Entrar em contato
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
