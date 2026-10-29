import { instagramUrl, navigation } from "../content/site.ts";
import { WhatsAppLink } from "./WhatsAppLink.tsx";

const footerNavigation = navigation.filter((item) => item.public);

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <p className="site-footer__name">Impulso Magistral</p>
        <nav aria-label="Rodapé">
          <ul className="site-nav__list">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <a className="site-nav__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p>
          <WhatsAppLink className="site-footer__phone">+55 (44) 99987-6764</WhatsAppLink>
        </p>
        <WhatsAppLink className="contact-button">
          Fale com nossos especialistas
        </WhatsAppLink>
        {instagramUrl ? (
          <a
            className="instagram-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span className="visually-hidden">Instagram. Abre em uma nova aba.</span>
          </a>
        ) : (
          <span className="instagram-link" role="img" aria-label="Instagram">
            <InstagramIcon />
          </span>
        )}
        <p className="site-footer__legal">
          © {new Date().getFullYear()} Impulso Magistral. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
