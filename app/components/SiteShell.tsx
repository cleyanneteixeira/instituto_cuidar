import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { contactInfo, navigation } from "../site-data";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="Instituto Cuidar - pagina inicial">
            <Image
              src="/instituto-cuidar-logo.png"
              alt="Logo do Instituto Cuidar"
              width={150}
              height={82}
              className="brand__logo"
              priority
            />
            <span className="brand__text">
              Cultura, integracao social e desenvolvimento com responsabilidade.
            </span>
          </Link>

          <nav className="site-nav" aria-label="Navegacao principal">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <p className="site-footer__title">Instituto Cuidar</p>
            <p className="site-footer__text">
              Cultura, integracao social, desenvolvimento, acao e meio ambiente
              com responsabilidade.
            </p>
          </div>
          <div>
            <p className="site-footer__title">Contato</p>
            <a className="site-footer__link" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
            <p className="site-footer__text">{contactInfo.address}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
