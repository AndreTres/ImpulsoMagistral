import { images } from "../content/images.ts";
import { WhatsAppLink } from "./WhatsAppLink.tsx";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="inicio-titulo">
      <div className="hero__layout">
        <div>
          <h1 id="inicio-titulo">
            Sua farmácia de manipulação tem potencial. Vamos impulsionar o
            próximo passo.
          </h1>
          <p>
            Consultoria para fortalecer a gestão, desenvolver equipes e
            transformar planejamento em ação, ajudando sua farmácia a crescer
            de forma saudável e lucrativa.
          </p>
          <WhatsAppLink className="contact-button">
            Fale com nossos especialistas
          </WhatsAppLink>
        </div>
        <figure className="frame">
          <img
            src={images.compounding.src}
            alt={images.compounding.alt}
            width={images.compounding.width}
            height={images.compounding.height}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  );
}
