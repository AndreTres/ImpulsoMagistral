import { About } from "./components/About.tsx";
import { Comunidade } from "./components/Comunidade.tsx";
import { Formacao } from "./components/Formacao.tsx";
import { Hero } from "./components/Hero.tsx";
import { ImpulsoId } from "./components/ImpulsoId.tsx";
import { News } from "./components/News.tsx";
import { ServiceOverview } from "./components/ServiceOverview.tsx";
import { SiteFooter } from "./components/SiteFooter.tsx";
import { SiteHeader } from "./components/SiteHeader.tsx";
import { WhatsAppButton } from "./components/WhatsAppButton.tsx";

export function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <ServiceOverview />
        <ImpulsoId />
        <Comunidade />
        <Formacao />
        <News />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
