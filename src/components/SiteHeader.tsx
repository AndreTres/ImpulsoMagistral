import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { navigation } from "../content/site.ts";
import { WhatsAppLink } from "./WhatsAppLink.tsx";

const publicNavigation = navigation.filter((item) => item.public);

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a className="site-logo-link" href="#inicio" aria-label="Impulso Magistral">
          <img
            className="site-logo"
            src={logo}
            alt=""
            width={1967}
            height={800}
            fetchPriority="high"
          />
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__icon" aria-hidden="true" />
          <span className="visually-hidden">
            {menuOpen ? "Fechar menu" : "Abrir menu"}
          </span>
        </button>

        <nav
          id="menu-principal"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Principal"
        >
          <ul className="site-nav__list">
            {publicNavigation.map((item) => (
              <li key={item.href}>
                <a className="site-nav__link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppLink className="contact-button" >
            Fale com nossos especialistas
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
