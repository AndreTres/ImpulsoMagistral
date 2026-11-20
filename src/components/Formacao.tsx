import {
  ClosingBand,
  FaqList,
  PlainList,
  TopicList,
} from "./ui.tsx";

function Stage({
  title,
  summary,
  intro,
  topics,
  note,
  application,
}: {
  title: string;
  summary: string;
  intro: readonly string[];
  topics?: readonly { title: string; text: string }[];
  note?: string;
  application?: string;
}) {
  return (
    <article className="stage">
      <h3>{title}</h3>
      <p className="kicker">{summary}</p>
      {intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {topics ? <TopicList items={topics} /> : null}
      {note ? <p>{note}</p> : null}
      {application ? <p>{application}</p> : null}
    </article>
  );
}

export function Formacao() {
  return (
    <section className="band" id="formacao" aria-labelledby="formacao-titulo">
      <div className="band__content">
      <h1 className="section-title" id="formacao-titulo">
        Formação de Representante Magistral
      </h1>
      <p>
        O relacionamento com prescritores começa com um profissional que
        conhece sua farmácia, comunica seus diferenciais e conduz cada visita
        com propósito.
      </p>
      <p>
        Nesta consultoria individualizada, capacitamos seu colaborador para
        atuar como representante magistral, desenvolvendo suas habilidades de
        comunicação, organização e relacionamento com prescritores.
      </p>
      <p>
        Auxiliamos na construção do painel de prescritores, acompanhamos a
        montagem da agenda semanal e analisamos os resultados das visitas para
        orientar os próximos passos. Também entregamos quatro materiais
        personalizados por mês, alinhados à proposta da sua farmácia e aos
        temas trabalhados na visitação.
      </p>
      <p>
        Um acompanhamento para transformar visitas em oportunidades de
        relacionamento e contribuir para a geração de receitas para sua
        farmácia.
      </p>
      <p className="kicker">Sua farmácia bem representada em cada visita.</p>
      <p>
        Uma atuação comercial consistente exige conhecer a farmácia, compreender
        o perfil dos prescritores e dar continuidade aos relacionamentos.
      </p>
      <p>
        A Formação de Representante Magistral é uma consultoria individualizada
        que capacita seu colaborador para realizar visitas com organização,
        segurança e clareza. Acompanhamos a estruturação do trabalho, da
        construção do painel de prescritores à análise dos resultados, ajudando
        o profissional a desenvolver oportunidades para sua farmácia.
      </p>

      <h3>Como funciona a consultoria</h3>
      <p>
        O acompanhamento combina capacitação e orientação para aplicação na
        rotina de visitação.
      </p>
      <p>
        Trabalhamos as habilidades do representante, auxiliamos no planejamento
        das visitas e analisamos os resultados para direcionar os próximos
        passos. Os atendimentos são on-line, com contratação mínima de seis
        meses.
      </p>
      <p>
        As frentes de trabalho se conectam ao longo da consultoria, permitindo
        que o profissional aprenda, aplique e aperfeiçoe sua atuação.
      </p>
      <Stage
        title="1. Preparação do representante"
        summary="Conhecimento e postura para representar sua farmácia"
        intro={[
          "Começamos pelo entendimento do papel do representante e da empresa que ele apresentará aos prescritores.",
        ]}
        topics={[
          {
            title: "Papel do representante magistral:",
            text: "responsabilidades na visitação, no relacionamento e no desenvolvimento de oportunidades.",
          },
          {
            title: "Conhecimento da farmácia:",
            text: "história, posicionamento, diferenciais, serviços e capacidade de atendimento.",
          },
          {
            title: "Comunicação profissional:",
            text: "apresentação clara, escuta e perguntas para compreender o contexto do prescritor.",
          },
          {
            title: "Postura nas visitas:",
            text: "respeito ao tempo, à rotina e às preferências de cada profissional.",
          },
          {
            title: "Apresentação de valor:",
            text: "como relacionar os diferenciais da farmácia às necessidades identificadas na conversa.",
          },
          {
            title: "Preparação para dúvidas:",
            text: "como responder com segurança e encaminhar questões que exigem apoio técnico.",
          },
        ]}
        application="O representante desenvolve uma apresentação da farmácia e se prepara para conduzir as primeiras abordagens."
      />

      <Stage
        title="2. Construção do painel de prescritores"
        summary="Clareza sobre quem visitar e como organizar o relacionamento"
        intro={[
          "Auxiliamos na construção e na organização do painel médico e de outros prescritores pertinentes à atuação da farmácia.",
        ]}
        topics={[
          {
            title: "Perfil dos prescritores:",
            text: "identificar especialidades e profissionais alinhados à proposta da farmácia.",
          },
          {
            title: "Organização dos contatos:",
            text: "reunir as informações necessárias para planejar e acompanhar a visitação.",
          },
          {
            title: "Priorização:",
            text: "definir critérios para organizar os contatos e direcionar os esforços do representante.",
          },
          {
            title: "Histórico do relacionamento:",
            text: "registrar visitas, interesses, dúvidas e próximos passos.",
          },
          {
            title: "Atualização do painel:",
            text: "manter as informações úteis à rotina e revisar as prioridades.",
          },
        ]}
        application="O representante constrói um painel organizado, que orienta a agenda e a continuidade dos contatos."
      />

      <Stage
        title="3. Planejamento da agenda semanal"
        summary="Uma rotina de visitas com objetivos definidos"
        intro={[
          "Acompanhamos a montagem da agenda para que o representante organize seu tempo e prepare cada contato.",
        ]}
        topics={[
          {
            title: "Planejamento semanal:",
            text: "definir as visitas e os retornos prioritários.",
          },
          {
            title: "Organização dos deslocamentos:",
            text: "considerar localização e disponibilidade dos prescritores.",
          },
          {
            title: "Objetivo de cada visita:",
            text: "estabelecer o que o representante pretende apresentar, compreender ou acompanhar.",
          },
          {
            title: "Preparação dos materiais:",
            text: "selecionar o conteúdo adequado ao contato.",
          },
          {
            title: "Continuidade do relacionamento:",
            text: "reservar espaço para retornos e compromissos assumidos.",
          },
          {
            title: "Revisão da agenda:",
            text: "ajustar o planejamento conforme a rotina e os resultados obtidos.",
          },
        ]}
        application="O representante utiliza uma agenda semanal que conecta prioridades, preparação e acompanhamento."
      />

      <Stage
        title="4. Desenvolvimento das visitas e do relacionamento"
        summary="Conversas relevantes e continuidade após cada encontro"
        intro={[
          "Capacitamos o profissional para conduzir visitas que apresentem a farmácia e contribuam para a construção de confiança.",
        ]}
        topics={[
          {
            title: "Abordagem inicial:",
            text: "apresentar-se e explicar o propósito do contato.",
          },
          {
            title: "Condução da conversa:",
            text: "ouvir, identificar interesses e apresentar informações pertinentes.",
          },
          {
            title: "Uso dos materiais:",
            text: "apoiar a conversa com conteúdos adequados ao perfil do prescritor.",
          },
          {
            title: "Tratamento de dúvidas e objeções:",
            text: "compreender as questões e responder dentro de sua competência.",
          },
          {
            title: "Encerramento da visita:",
            text: "combinar próximos passos quando houver abertura.",
          },
          {
            title: "Acompanhamento posterior:",
            text: "cumprir os retornos e dar continuidade ao relacionamento.",
          },
          {
            title: "Integração com a farmácia:",
            text: "compartilhar demandas e alinhar respostas com a equipe interna.",
          },
        ]}
        application="O representante aprimora sua abordagem e estabelece uma rotina de acompanhamento dos contatos."
      />

      <Stage
        title="5. Análise dos resultados"
        summary="Informações para orientar a evolução da atuação"
        intro={[
          "Analisamos mensalmente os resultados das visitas para identificar avanços, dificuldades e oportunidades de melhoria.",
        ]}
        topics={[
          { title: "Visitas planejadas e realizadas.", text: "" },
          { title: "Contatos iniciados e continuidade dos relacionamentos.", text: "" },
          { title: "Interesses e demandas identificados.", text: "" },
          { title: "Retornos e compromissos pendentes.", text: "" },
          { title: "Oportunidades encaminhadas à farmácia.", text: "" },
          {
            title:
              "Resultados comerciais associados à visitação, quando houver registros que permitam esse acompanhamento.",
            text: "",
          },
        ]}
        note="A análise considera tanto a atividade do representante quanto a qualidade e a evolução dos relacionamentos."
        application="Definição de ajustes na agenda, na abordagem e nas prioridades para o período seguinte."
      />

      <Stage
        title="6. Materiais personalizados para a visitação"
        summary="Conteúdo alinhado à sua farmácia"
        intro={[
          "Entregamos quatro materiais personalizados por mês para apoiar as visitas e a apresentação da farmácia.",
          "Os temas são alinhados à proposta da empresa, ao perfil dos prescritores e às necessidades identificadas no acompanhamento.",
          "O representante recebe orientação para utilizar os materiais como apoio à conversa, conectando o conteúdo ao objetivo da visita.",
        ]}
      />

      <h3>O que sua farmácia recebe</h3>
      <PlainList
        items={[
          "Capacitação individualizada do representante magistral.",
          "Apoio à construção e à organização do painel de prescritores.",
          "Acompanhamento da montagem da agenda semanal.",
          "Orientação para abordagem, visitas e continuidade dos relacionamentos.",
          "Análise mensal dos resultados.",
          "Quatro materiais personalizados por mês para apoiar a visitação.",
        ]}
      />

      <h3>O papel da farmácia e do representante</h3>
      <p>
        A farmácia fornece as informações sobre seu posicionamento, seus
        serviços e seus diferenciais, além de apoiar o atendimento às demandas
        identificadas nas visitas.
      </p>
      <p>
        O representante participa da capacitação, realiza as atividades
        planejadas, registra as interações e aplica as orientações em sua
        rotina.
      </p>
      <p>
        A consultoria prepara e orienta o profissional, acompanhando sua
        evolução e ajudando a direcionar o trabalho.
      </p>

      <h3>Perguntas frequentes</h3>
      <FaqList
        items={[
          {
            question: "Meu colaborador precisa ter experiência em visitação?",
            answer:
              "A consultoria contempla a formação do profissional para essa atuação. A preparação considera sua experiência, suas necessidades de desenvolvimento e a realidade da farmácia.",
          },
          {
            question: "Vocês ajudam a construir o painel médico?",
            answer:
              "Sim. Auxiliamos na identificação, na organização e na priorização dos prescritores que orientarão o trabalho do representante.",
          },
          {
            question: "O representante terá apoio para organizar a agenda?",
            answer:
              "Sim. Acompanhamos a montagem da agenda semanal, considerando prioridades, disponibilidade dos prescritores e continuidade dos contatos.",
          },
          {
            question: "Como os resultados serão acompanhados?",
            answer:
              "Analisamos mensalmente os registros das visitas e a evolução das oportunidades, utilizando essas informações para orientar ajustes na atuação.",
          },
          {
            question: "Os materiais são personalizados para minha farmácia?",
            answer:
              "Sim. A entrega inclui quatro materiais mensais, com temas alinhados à proposta da farmácia e ao trabalho de visitação.",
          },
          {
            question: "A consultoria realiza as visitas?",
            answer:
              "As visitas são realizadas pelo representante da farmácia. A consultoria capacita, orienta o planejamento e acompanha os resultados.",
          },
          {
            question: "Qual é o prazo mínimo de contratação?",
            answer:
              "Seis meses, para desenvolver as habilidades do profissional, aplicar as orientações e acompanhar sua evolução.",
          },
        ]}
      />

      <ClosingBand
        titleClassName="kicker"
        title="Vamos preparar o profissional que levará sua farmácia aos prescritores?"
        text="Conte sobre sua empresa e o momento da sua visitação. Vamos avaliar como essa formação pode apoiar seu representante e desenvolver novas oportunidades de relacionamento."
        label="Quero preparar meu representante"
      />
      </div>
    </section>
  );
}
