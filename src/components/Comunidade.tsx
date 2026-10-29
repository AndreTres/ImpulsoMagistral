import { WhatsAppLink } from "./WhatsAppLink.tsx";
import { PlainList, PriceCard, SectionTitle, TopicList } from "./ui.tsx";

function Stage({
  title,
  summary,
  intro,
  topics,
  extra,
  application,
}: {
  title: string;
  summary: string;
  intro: readonly string[];
  topics: readonly { title: string; text: string }[];
  extra?: readonly string[];
  application: string;
}) {
  return (
    <article className="stage">
      <h3>{title}</h3>
      <p className="kicker">{summary}</p>
      {intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <TopicList items={topics} />
      {extra ? <PlainList items={extra} /> : null}
      <p>{application}</p>
    </article>
  );
}

export function Comunidade() {
  return (
    <section className="band band--navy" id="comunidade" aria-labelledby="comunidade-titulo">
      <div className="band__content">
      <SectionTitle id="comunidade-titulo">Comunidade Magistral</SectionTitle>
      <p className="kicker">
        Mais preparo para gerir sua farmácia. Mais autonomia para conduzir o
        crescimento.
      </p>
      <p>
        Gerir uma farmácia de manipulação exige organizar processos,
        desenvolver pessoas e acompanhar resultados. Quando essas
        responsabilidades ficam concentradas na resolução dos problemas do dia
        a dia, falta espaço para planejar e conduzir a evolução do negócio.
      </p>
      <p>
        A Comunidade Magistral é uma consultoria de gestão em grupo que prepara
        proprietários e gestores para assumir essa condução com mais clareza e
        segurança.
      </p>
      <p>
        Durante quatro meses, com encontros semanais on-line, trabalhamos o
        planejamento estratégico, a capacitação das lideranças, a organização
        dos processos e o desenvolvimento dos vendedores. Um guia orienta a
        jornada e apoia a aplicação do conteúdo na rotina da empresa.
      </p>
      <PriceCard
        amount="R$ 3.920,00"
        detail="Pagamento em 4 parcelas de R$ 980,00. Duração de 4 meses, com encontros semanais on-line."
      />

      <div className="panel">
        <h3>Como funciona nosso método</h3>
        <p className="kicker">
          Nós orientamos e capacitamos. Você conduz e acompanha a aplicação.
        </p>
        <p>
          A consultoria oferece conhecimento, orientações e ferramentas para
          que o proprietário ou gestor geral organize a gestão da farmácia.
        </p>
        <p>
          Nos encontros, explicamos os temas, apresentamos caminhos de
          aplicação e capacitamos os profissionais envolvidos. Na empresa, o
          gestor conduz as ações, alinha as responsabilidades e acompanha o
          desenvolvimento da equipe.
        </p>
        <p>
          O objetivo é fortalecer a capacidade da farmácia de gerir seu negócio
          e dar continuidade às melhorias após a consultoria.
        </p>

        <Stage
          title="Etapa 1 - Planejamento estratégico empresarial"
          summary="Definir a direção antes de organizar as ações"
          intro={[
            "Nesta etapa, ajudamos o proprietário ou gestor a compreender o momento da farmácia e construir um planejamento que oriente as decisões do negócio.",
          ]}
          topics={[
            {
              title: "Diagnóstico da empresa:",
              text: "identificar os principais desafios, os recursos disponíveis e as oportunidades de desenvolvimento.",
            },
            {
              title: "Propósito e identidade:",
              text: "revisar o que orienta a farmácia, seu público e seus diferenciais.",
            },
            {
              title: "Análise do negócio:",
              text: "reconhecer pontos fortes, fragilidades e fatores externos que influenciam a empresa.",
            },
            {
              title: "Objetivos e prioridades:",
              text: "definir onde a farmácia deseja chegar e o que precisa receber atenção primeiro.",
            },
            {
              title: "Metas e indicadores:",
              text: "estabelecer como acompanhar o progresso e avaliar os resultados das ações.",
            },
            {
              title: "Plano de ação:",
              text: "organizar iniciativas com responsáveis, prazos e entregas esperadas.",
            },
            {
              title: "Rotina de acompanhamento:",
              text: "preparar o gestor para revisar o planejamento e ajustar o caminho quando necessário.",
            },
          ]}
          application="O proprietário ou gestor constrói seu plano de gestão e o utiliza para orientar as prioridades e os alinhamentos com a equipe."
        />

        <Stage
          title="Etapa 2 - Capacitação de líderes"
          summary="Preparar quem lidera para desenvolver quem executa"
          intro={[
            "Trabalhamos as habilidades necessárias para que os líderes de cada setor conduzam suas equipes com responsabilidade, comunicação clara e equilíbrio.",
          ]}
          topics={[
            {
              title: "Autoconhecimento:",
              text: "reconhecer comportamentos, pontos fortes e aspectos que precisam ser desenvolvidos na atuação como líder.",
            },
            {
              title: "Inteligência emocional na liderança:",
              text: "compreender as próprias reações e lidar melhor com pressões, conflitos e situações desafiadoras.",
            },
            {
              title: "Meu papel como líder magistral:",
              text: "entender as responsabilidades da liderança e sua contribuição para os objetivos da farmácia.",
            },
            {
              title: "Como liderar equipes:",
              text: "alinhar expectativas, orientar atividades, delegar responsabilidades e acompanhar as entregas.",
            },
            {
              title: "Desenvolvimento das pessoas:",
              text: "identificar dificuldades e necessidades de capacitação, oferecendo orientação para a evolução de cada profissional.",
            },
            {
              title: "Conversas difíceis:",
              text: "abordar problemas de comportamento ou desempenho com clareza e respeito.",
            },
            {
              title: "Feedbacks:",
              text: "reconhecer boas entregas, comunicar necessidades de melhoria e combinar próximos passos.",
            },
            {
              title: "Rotinas de liderança:",
              text: "organizar reuniões e acompanhamentos que mantenham a equipe alinhada.",
            },
          ]}
          application="Os líderes praticam as orientações com suas equipes, enquanto o proprietário ou gestor acompanha a evolução e reforça os comportamentos esperados."
        />

        <Stage
          title="Etapa 3 - Gestão dos processos da farmácia"
          summary="Organizar o funcionamento da empresa e identificar oportunidades de melhoria"
          intro={[
            "Apresentamos propostas de processos e rotinas para apoiar a organização interna da farmácia.",
            "Quem já possui processos poderá analisá-los e identificar melhorias. Quem ainda não os estruturou encontrará orientações para começar a implantá-los, adaptando as propostas à sua realidade.",
          ]}
          topics={[
            {
              title: "Gestão de R.H:",
              text: "definição do perfil de cada função, organização das etapas de seleção e orientação para integração e acompanhamento dos novos colaboradores.",
            },
            {
              title: "Gestão de produção:",
              text: "organização do fluxo de trabalho, definição de responsabilidades, acompanhamento de prazos e identificação de gargalos e retrabalho.",
            },
            {
              title: "Gestão de compras:",
              text: "planejamento das necessidades, organização das solicitações, critérios para avaliar fornecedores e alinhamento entre compras, estoque e produção.",
            },
            {
              title: "Gestão de estoque:",
              text: "rotinas de controle, acompanhamento de movimentações e validades, identificação de excessos ou faltas e apoio ao planejamento de reposição.",
            },
            {
              title: "Gestão comercial:",
              text: "organização do atendimento, acompanhamento de orçamentos, definição de retornos aos clientes e monitoramento dos indicadores comerciais.",
            },
            {
              title: "Gestão de visitação:",
              text: "planejamento das visitas, organização do painel de prescritores, registro das interações e acompanhamento das ações e dos resultados do representante.",
            },
          ]}
          extra={[
            "Compreender o fluxo das atividades.",
            "Definir responsáveis e pontos de acompanhamento.",
            "Identificar dificuldades e prioridades de melhoria.",
            "Adaptar e implantar as rotinas propostas.",
            "Acompanhar a aplicação e revisar o processo quando necessário.",
          ]}
          application="O gestor seleciona os processos prioritários e conduz sua implantação ou melhoria junto aos responsáveis de cada setor."
        />

        <Stage
          title="Etapa 4 - Capacitação de vendedores"
          summary="Desenvolver o atendimento e a atuação comercial da equipe"
          intro={[
            "Capacitamos os vendedores para compreender seu papel, conduzir o atendimento com mais preparo e contribuir para uma experiência positiva do cliente.",
          ]}
          topics={[
            {
              title: "Meu papel como vendedor:",
              text: "compreender a responsabilidade do profissional no atendimento, no relacionamento e nos resultados da farmácia.",
            },
            {
              title: "O que me motiva no dia a dia:",
              text: "reconhecer motivações, desafios e atitudes que influenciam a atuação comercial.",
            },
            {
              title: "Script de vendas remotas:",
              text: "estruturar conversas por WhatsApp e outros canais, desde o primeiro contato até o acompanhamento do orçamento.",
            },
            {
              title: "Atendimento presencial:",
              text: "desenvolver acolhimento, escuta e perguntas para compreender a necessidade do cliente.",
            },
            {
              title: "Apresentação da proposta de valor:",
              text: "comunicar os diferenciais da farmácia e os benefícios pertinentes ao atendimento.",
            },
            {
              title: "Tratamento de dúvidas e objeções:",
              text: "conduzir conversas sobre preço, prazo e outras questões com clareza.",
            },
            {
              title: "Experiência do cliente:",
              text: "compreender como cada etapa do atendimento influencia a percepção e o relacionamento com a empresa.",
            },
            {
              title: "Acompanhamento comercial:",
              text: "organizar retornos e utilizar os resultados para orientar melhorias no atendimento.",
            },
          ]}
          application="A equipe pratica os atendimentos e utiliza os roteiros adaptados ao negócio. O proprietário ou gestor acompanha essa aplicação e orienta os ajustes necessários."
        />

        <h3>O Guia do Gestor Magistral</h3>
        <p>
          O Guia reúne os conteúdos e as orientações para que o proprietário ou
          gestor consiga conduzir o trabalho dentro da farmácia.
        </p>
        <p>
          Ele organiza o aprendizado de cada etapa e serve como referência para
          planejar ações, orientar os setores e acompanhar a aplicação das
          melhorias.
        </p>
        <PlainList
          items={[
            "Explicações dos temas trabalhados nos encontros.",
            "Exercícios para analisar a realidade da farmácia.",
            "Modelos de planos de ação e acompanhamento.",
            "Propostas de processos e rotinas.",
            "Roteiros de conversas, feedbacks e atendimento.",
            "Espaços para registrar decisões, responsáveis e próximos passos.",
          ]}
        />

        <h3>Quem participa</h3>
        <p>
          O proprietário ou gestor geral acompanha a jornada e conduz sua
          aplicação na farmácia. Líderes e vendedores participam dos encontros
          de capacitação relacionados à sua atuação.
        </p>
        <p>
          O formato em grupo favorece a troca de experiências entre farmácias,
          ampliando as perspectivas sobre desafios e possibilidades de gestão.
        </p>

        <h3>O que buscamos construir com sua farmácia</h3>
        <p>
          Uma gestão com direção, líderes mais preparados, processos
          organizados e uma equipe comercial capaz de aplicar o aprendizado no
          atendimento.
        </p>
        <p>
          Ao longo da jornada, o proprietário ou gestor desenvolve sua
          capacidade de orientar as pessoas, acompanhar as ações e conduzir o
          negócio com mais autonomia.
        </p>
        <WhatsAppLink className="contact-button">
          Quero conhecer a Comunidade Magistral
        </WhatsAppLink>
      </div>
      </div>
    </section>
  );
}
