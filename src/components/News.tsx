import { SectionTitle } from "./ui.tsx";

export function News() {
  return (
    <section className="band" id="noticias" aria-labelledby="noticias-titulo">
      <div className="band__content">
      <SectionTitle id="noticias-titulo">Notícias</SectionTitle>
      <p>
        Os artigos aprovados pelo CRF ainda não foram incluídos nesta seção.
      </p>
      </div>
    </section>
  );
}
