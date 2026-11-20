import { lazy, Suspense, useEffect } from "react";
import { About } from "./components/About.tsx";
import { Hero } from "./components/Hero.tsx";
import { News } from "./components/News.tsx";
import { ServiceOverview } from "./components/ServiceOverview.tsx";
import { SiteFooter } from "./components/SiteFooter.tsx";
import { SiteHeader } from "./components/SiteHeader.tsx";
import { WhatsAppButton } from "./components/WhatsAppButton.tsx";

const serviceRoutes = {
  "/servicos/impulso-id": lazy(() =>
    import("./components/ImpulsoId.tsx").then(({ ImpulsoId }) => ({
      default: ImpulsoId,
    })),
  ),
  "/servicos/comunidade-magistral": lazy(() =>
    import("./components/Comunidade.tsx").then(({ Comunidade }) => ({
      default: Comunidade,
    })),
  ),
  "/servicos/formacao-representante-magistral": lazy(() =>
    import("./components/Formacao.tsx").then(({ Formacao }) => ({
      default: Formacao,
    })),
  ),
} as const;

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const ServiceRoute = serviceRoutes[path as keyof typeof serviceRoutes];

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [path]);

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo-principal">
        {ServiceRoute ? (
          <div className="service-page">
            <a className="service-page__back" href="/#solucoes" aria-label="Voltar às soluções">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m15 5-7 7 7 7" />
              </svg>
              <span className="visually-hidden">Voltar às soluções</span>
            </a>
            <div className="reveal">
              <Suspense
                fallback={
                  <p className="route-loading" role="status">
                    Carregando solução...
                  </p>
                }
              >
                <ServiceRoute />
              </Suspense>
            </div>
          </div>
        ) : path === "/" ? (
          <>
            <Hero />
            <About />
            <ServiceOverview />
            <News />
          </>
        ) : (
          <section className="band" aria-labelledby="not-found-title">
            <div className="band__content">
              <h1 className="section-title" id="not-found-title">
                Página não encontrada
              </h1>
              <a className="text-link" href="/#inicio">
                Voltar ao início
              </a>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
