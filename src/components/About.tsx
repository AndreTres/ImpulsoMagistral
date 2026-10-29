import { images } from "../content/images.ts";
import { SectionTitle } from "./ui.tsx";

export function About() {
  return (
    <section className="band band--paper" aria-labelledby="quem-somos-titulo">
      <div className="split">
        <figure className="frame">
          <img
            src={images.meeting.src}
            alt={images.meeting.alt}
            width={images.meeting.width}
            height={images.meeting.height}
            loading="lazy"
          />
        </figure>
        <div>
          <SectionTitle id="quem-somos-titulo">Quem somos</SectionTitle>
          <p>
            A Impulso Magistral é uma consultoria dedicada ao desenvolvimento
            de farmácias de manipulação. Apoiamos proprietários, gestores e
            equipes na construção de negócios bem geridos, com pessoas
            preparadas e processos alinhados aos objetivos da empresa.
          </p>
          <p>
            Por meio de soluções personalizadas e orientação prática, ajudamos
            sua farmácia a transformar conhecimento em ação e a crescer de
            forma saudável e lucrativa.
          </p>
        </div>
      </div>
    </section>
  );
}
