import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { contactInfo, navigation } from "../site-data";
import { ThemeToggle } from "./ThemeToggle";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="Instituto Cuidar - página inicial">
            <span className="brand__logo-frame">
            <Image
              src="/instituto-cuidar-logo-colorida.svg"
              alt="Instituto Cuidar"
              width={436}
              height={268}
              className="brand__logo brand__logo--light"
              priority
            />
            <Image
              src="/instituto-cuidar-logo-branca.svg"
              alt=""
              aria-hidden="true"
              width={436}
              height={268}
              className="brand__logo brand__logo--dark"
              priority
            />
            </span>
            <span className="brand__text">
              Cultura, integração social e desenvolvimento com responsabilidade.
            </span>
          </Link>

          <div className="header-actions">
          <nav className="site-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>{children}</main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <p className="site-footer__title">Instituto Cuidar</p>
            <p className="site-footer__text">
              Cultura, integração social, desenvolvimento, ação e meio ambiente
              com responsabilidade.
            </p>
          </div>
          <div>
            <p className="site-footer__title">Contato</p>
            <p>
              <a className="site-footer__link" href={contactInfo.phoneHref}>
                {contactInfo.phone}
              </a>
            </p>
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
