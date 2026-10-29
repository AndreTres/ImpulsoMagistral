import {
  ClosingBand,
  FaqList,
  PlainList,
  PriceCard,
  SectionTitle,
} from "./ui.tsx";

const steps = [
  {
    title: "1. Conhecemos sua farmácia.",
    text: "Conversamos sobre o perfil da empresa, seu público e seus objetivos comerciais para orientar o desenvolvimento dos produtos.",
  },
  {
    title: "2. Avaliamos os recursos e as oportunidades.",
    text: "Levantamos os insumos e as embalagens disponíveis e definimos com você o caminho da linha: aproveitar esses recursos, explorar referências do mercado ou combinar as duas possibilidades.",
  },
  {
    title: "3. Desenvolvemos as formulações.",
    text: "Elaboramos fórmulas personalizadas, considerando a proposta dos produtos e a realidade da sua farmácia.",
  },
  {
    title: "4. Definimos as embalagens.",
    text: "Orientamos a escolha das embalagens adequadas às formulações e à apresentação da linha.",
  },
  {
    title: "5. Organizamos o material de apoio.",
    text: "Reunimos as fórmulas, as descrições dos ativos e as informações sobre os produtos em um e-book para apoiar a capacitação da equipe comercial.",
  },
] as const;

export function ImpulsoId() {
  return (
    <section className="band band--paper" id="impulso-id" aria-labelledby="impulso-titulo">
      <div className="band__content">
      <SectionTitle id="impulso-titulo">Impulso ID</SectionTitle>
      <p className="kicker">Sua farmácia tem recursos. Vamos explorar suas possibilidades.</p>
      <p>
        Escolher quais produtos desenvolver exige conhecer o público, avaliar
        os recursos disponíveis e encontrar oportunidades que combinem com a
        empresa.
      </p>
      <p>
        O Impulso ID oferece orientação e desenvolvimento personalizado para
        transformar essas possibilidades em uma linha que sua equipe comercial
        possa conhecer, apresentar e trabalhar com os clientes.
      </p>

      <h3>Essa consultoria é para sua farmácia se você deseja:</h3>
      <PlainList
        items={[
          "Aproveitar os insumos e as embalagens disponíveis para desenvolver novos produtos.",
          "Ampliar as opções de revenda com uma linha alinhada ao seu público.",
          "Explorar tendências do mercado com produtos que preservem a identidade da sua empresa.",
          "Oferecer à equipe comercial materiais de apoio para conhecer e apresentar a linha.",
        ]}
      />

      <h3>Como construímos sua linha de produtos de revenda</h3>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.title}>
            <strong>{step.title}</strong>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>

      <h3>O que sua farmácia recebe</h3>
      <PlainList
        items={[
          "Reunião para conhecer a farmácia e um diagnóstico de quais produtos seriam mais relevantes para sua empresa.",
          "Desenvolvimento personalizado das fórmulas.",
          "Orientação para definição das embalagens.",
          "E-book com fórmulas, descrições dos ativos e informações de apoio ao time de vendas.",
        ]}
      />
      <p>
        A quantidade de fórmulas, o prazo de entrega e as revisões incluídas
        serão apresentados na proposta comercial.
      </p>
      <p>
        Também oferecemos suporte e uma equipe de marketing que desenvolve
        toda parte dos rótulos personalizados.
      </p>
      <PriceCard
        amount="R$ 1.470,00"
        detail="Pagamento em 3 parcelas de R$ 490,00. Atendimentos on-line, conforme a organização e o escopo da proposta."
      />

      <h3>Perguntas frequentes</h3>
      <FaqList
        items={[
          {
            question: "Preciso comprar novos insumos?",
            answer:
              "Podemos desenvolver a linha a partir dos insumos que sua farmácia já possui. Caso você queira explorar outras possibilidades, eventuais necessidades de aquisição serão alinhadas durante o projeto.",
          },
          {
            question: "Posso desenvolver produtos inspirados nas tendências do mercado?",
            answer:
              "Sim. As tendências e os produtos em destaque podem servir como referências para desenvolver formulações personalizadas, alinhadas ao seu público e à identidade da sua farmácia.",
          },
          {
            question: "Minha equipe terá apoio para conhecer os produtos?",
            answer:
              "Sim. O e-book reúne informações sobre as fórmulas e os ativos para apoiar a capacitação da equipe e a apresentação da linha aos clientes.",
          },
          {
            question: "Como acontecem os atendimentos?",
            answer:
              "Os atendimentos são realizados on-line, conforme a organização e o escopo definidos na proposta.",
          },
        ]}
      />

      <ClosingBand
        title="Vamos descobrir as possibilidades da sua próxima linha?"
        text="Conte sobre sua farmácia e o que você deseja desenvolver. Nossa equipe ajudará a avaliar como o Impulso ID pode contribuir para o seu negócio."
        label="Falar com a Impulso Magistral"
      />
      </div>
    </section>
  );
}
