import { SectionTitle } from "./ui.tsx";

export function News() {
  return (
    <section className="band" id="noticias" aria-labelledby="noticias-titulo">
      <div className="band__content reveal">
      <SectionTitle id="noticias-titulo">Notícias</SectionTitle>
      <p>
        Artigos do CRF - seção em desenvolvimento.
      </p>
      </div>
    </section>
  );
}
