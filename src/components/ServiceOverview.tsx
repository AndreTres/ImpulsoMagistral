import { useEffect, useState } from "react";
import { SectionTitle } from "./ui.tsx";

const services = [
  {
    name: "Impulso ID",
    headline:
      "Novas possibilidades para sua prateleira. Mais oportunidades para sua farmácia.",
    summary:
      "Sua farmácia pode transformar os recursos que já possui em uma linha de produtos com identidade própria e alinhada ao seu público.",
    href: "/servicos/impulso-id",
  },
  {
    name: "Comunidade Magistral",
    headline: "Mais clareza para gerir. Mais preparo para crescer.",
    summary:
      "O dia a dia da sua farmácia exige decisões, organização e uma equipe capaz de transformar os objetivos da empresa em resultados.",
    href: "/servicos/comunidade-magistral",
  },
  {
    name: "Formação de Representante Magistral",
    headline:
      "Mais preparo para representar sua farmácia. Mais direção para desenvolver relacionamentos.",
    summary:
      "O relacionamento com prescritores começa com um profissional que conhece sua farmácia, comunica seus diferenciais e conduz cada visita com propósito.",
    href: "/servicos/formacao-representante-magistral",
  },
] as const;

export function ServiceOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const service = services[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % services.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + services.length) % services.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % services.length);
  }

  return (
    <section className="band" id="solucoes" aria-labelledby="solucoes-titulo">
      <div className="band__content">
        <SectionTitle id="solucoes-titulo">Soluções</SectionTitle>
        <div
          className="service-carousel reveal"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Serviços Impulso Magistral"
        >
          <article
            key={service.name}
            className="service-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} de ${services.length}`}
            aria-live="polite"
          >
            <div className="service-slide__image" aria-hidden="true">
              <span>Imagem do serviço em breve</span>
            </div>
            <div className="service-slide__content">
              <p className="offer__name">{service.name}</p>
              <h3>{service.headline}</h3>
              <p>{service.summary}</p>
              <a className="text-link" href={service.href}>
                Saiba mais
              </a>
            </div>
          </article>
          <div className="service-carousel__controls">
            <button
              className="carousel-arrow carousel-arrow--previous"
              type="button"
              onClick={showPrevious}
              aria-label="Serviço anterior"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m15 5-7 7 7 7" />
              </svg>
            </button>
            <button
              className="carousel-arrow carousel-arrow--next"
              type="button"
              onClick={showNext}
              aria-label="Próximo serviço"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="service-carousel__dots" aria-label="Selecionar serviço">
            {services.map((item, index) => (
              <button
                key={item.name}
                className={
                  index === activeIndex
                    ? "carousel-dot is-active"
                    : "carousel-dot"
                }
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar ${item.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
