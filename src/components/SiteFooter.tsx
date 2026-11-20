import { instagramUrl } from "../content/site.ts";
import { InstagramIcon } from "./InstagramIcon.tsx";
import { WhatsAppLink } from "./WhatsAppLink.tsx";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <p className="site-footer__name">Impulso Magistral</p>
        <p className="site-footer__email">
          contato@impulsomagistral.com
        </p>
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
          © {currentYear} Impulso Magistral. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
