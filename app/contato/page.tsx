import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { contactInfo } from "../site-data";

export const metadata: Metadata = {
  title: "Contato do Instituto Cuidar",
  description:
    "Entre em contato com o Instituto Cuidar para parcerias, apoio institucional e informações sobre os projetos.",
};

export default function ContatoPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contato</p>
          <h1>Vamos construir novas oportunidades juntos.</h1>
          <p className="page-hero__lead">
            O Instituto Cuidar está aberto a parcerias, articulações locais,
            convites para projetos e conversas sobre impacto cultural.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <article className="copy-card copy-card--accent">
            <h2>Fale com a equipe</h2>
            <p>
              <a className="contact-link" href={contactInfo.phoneHref}>
                {contactInfo.phone}
              </a>
            </p>
            <a className="contact-link" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
            <p>{contactInfo.address}</p>
          </article>

          <article className="copy-card">
            <h2>Como podemos apoiar</h2>
            <ul className="contact-list">
              <li>Parcerias para eventos, oficinas e apresentações.</li>
              <li>Apoio institucional a projetos de base comunitária.</li>
              <li>Conexões com artistas, educadores e lideranças locais.</li>
              <li>Informações sobre atendimento e participação nas atividades.</li>
            </ul>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
