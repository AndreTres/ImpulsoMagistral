import { SectionTitle } from "./ui.tsx";

export function ServiceOverview() {
  return (
    <section className="band" id="solucoes" aria-labelledby="solucoes-titulo">
      <div className="band__content">
      <SectionTitle id="solucoes-titulo">Soluções</SectionTitle>
      <div className="offer-grid">
        <article className="offer offer--lead">
          <p className="offer__name">Impulso ID</p>
          <h3>Novas possibilidades para sua prateleira. Mais oportunidades para sua farmácia.</h3>
          <p>
            Sua farmácia pode transformar os recursos que já possui em uma
            linha de produtos com identidade própria e alinhada ao seu público.
          </p>
          <p>
            Com o Impulso ID, desenvolvemos formulações personalizadas a partir
            dos seus insumos e embalagens ou inspiradas nas tendências e nos
            produtos em destaque no mercado. Cada proposta considera a
            realidade do seu negócio, ampliando as opções de revenda e dando à
            sua equipe comercial novos produtos para apresentar aos clientes.
          </p>
          <a className="text-link" href="#impulso-id">
            Veja como funciona
          </a>
        </article>
        <article className="offer offer--navy">
          <p className="offer__name">Comunidade Magistral</p>
          <h3>Mais clareza para gerir. Mais preparo para crescer.</h3>
          <p>
            O dia a dia da sua farmácia exige decisões, organização e uma
            equipe capaz de transformar os objetivos da empresa em resultados.
          </p>
          <p>
            A Comunidade Magistral é uma consultoria de gestão em grupo que
            apoia proprietários, gestores e lideranças a conduzir o negócio
            com mais direção e segurança. Trabalhamos o planejamento
            estratégico, a gestão de pessoas e a melhoria dos processos,
            preparando os líderes de cada setor para orientar suas equipes e
            desenvolver o potencial de cada profissional.
          </p>
          <p>
            Na gestão comercial, desenvolvemos scripts de atendimento, técnicas
            de vendas e práticas voltadas à experiência do cliente, ajudando a
            equipe a oferecer um atendimento mais consistente e a aproveitar
            melhor as oportunidades de venda.
          </p>
          <p>
            Tudo isso em um ambiente de aprendizado e troca entre farmácias,
            com orientação para aplicar o conhecimento à realidade de cada
            empresa e construir um crescimento saudável e lucrativo.
          </p>
          <a className="text-link" href="#comunidade">
            Conheça a Comunidade Magistral
          </a>
        </article>
        <article className="offer">
          <p className="offer__name">Formação de Representante Comercial</p>
          <h3>
            Mais preparo para representar sua farmácia. Mais direção para
            desenvolver relacionamentos.
          </h3>
          <p>
            O relacionamento com prescritores começa com um profissional que
            conhece sua farmácia, comunica seus diferenciais e conduz cada
            visita com propósito.
          </p>
          <p>
            Nesta consultoria individualizada, capacitamos seu colaborador
            para atuar como representante comercial, desenvolvendo suas
            habilidades de comunicação, organização e relacionamento com
            prescritores.
          </p>
          <p>
            Auxiliamos na construção do painel de prescritores, acompanhamos a
            montagem da agenda semanal e analisamos os resultados das visitas
            para orientar os próximos passos. Também entregamos quatro
            materiais personalizados por mês, alinhados à proposta da sua
            farmácia e aos temas trabalhados na visitação.
          </p>
          <p>
            Um acompanhamento para transformar visitas em oportunidades de
            relacionamento e contribuir para a geração de receitas para sua
            farmácia.
          </p>
          <a className="text-link" href="#formacao">
            Formação de Representante Comercial
          </a>
        </article>
      </div>
      </div>
    </section>
  );
}
