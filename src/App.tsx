import React, { useState } from "react";
import { 
  TrendingUp, 
  Zap, 
  Eye, 
  MessageSquare, 
  Share2, 
  Smartphone, 
  Tv, 
  Clock, 
  Play, 
  ArrowRight, 
  Lock, 
  Award, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  BookOpen, 
  Heart, 
  Sparkles, 
  ShieldAlert, 
  X, 
  Check, 
  Smile, 
  Flame, 
  Volume2, 
  Activity,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// HOTMART PURCHASE LINK
const PURCHASE_URL = "https://pay.hotmart.com/L106277403S?bid=1781231515262";

interface Chapter {
  id: number;
  number: string;
  title: string;
  summary: string;
  quotes: string;
  details: string[];
}

interface SocialProofPost {
  title: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  hookType: string;
  strategy: string;
  retentionScore: number;
}

export default function App() {
  // States of interactive sections
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [openedFaq, setOpenedFaq] = useState<number | null>(null);

  // Ebook Chapter list
  const chapters: Chapter[] = [
    {
      id: 1,
      number: "01",
      title: "O que é um Perfil Dark?",
      summary: "Entenda por que tentar crescer na internet pelas regras antigas de exposição e imagem pessoal está te sabotando, e como focar no poder absoluto do conteúdo anônimo escalável.",
      quotes: "O anonimato deixou de ser limitação e virou estratégia de escala.",
      details: [
        "Por que marcas pessoais encontram limites físicos e mentais rapidamente",
        "A diferença crítica entre depender de uma Persona vs depender de um Sistema replicável",
        "Lista de nichos milionários: Cortes de reality, curiosidades, narrativas e histórias com IA",
        "Como operar inteiramente nos bastidores enquanto o conteúdo trabalha na linha de frente"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "O Funcionamento Real do Algoritmo",
      summary: "Esqueça mitos de bloqueios mágicos ou favoritos do TikTok. O algoritmo é uma inteligência matemática que reage puramente ao comportamento psicológico humano em escala.",
      quotes: "O algoritmo não promove vídeos. Ele promove reações.",
      details: [
        "As perguntas silenciosas que o TikTok faz toda vez que distribui seu corte",
        "As 3 Etapas do Teste de Distribuição: Do pequeno grupo de teste até a entrega em massa",
        "Métrica de ouro nº 1: Por que o Watch Time determina o destino da sua conta",
        "Desmontando o fluxo simplificado: Vídeo → Pessoas → Emoção → Métricas → Viralização"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Reality Shows e o Vício do Cérebro",
      summary: "Descubra os gatilhos primitivos ativados no cérebro por desentendimentos, conflitos e discussões que forçam os usuários a passarem horas grudados na tela.",
      quotes: "O público não segue o criador. Segue o que sente ao consumir aquele conteúdo.",
      details: [
        "Por que discussões entre desconhecidos geram milhões de visualizações e comentários agressivos",
        "A força do Tribalismo: transformando vídeos comuns em disputas emocionais de 'Davi contra Golias'",
        "O julgamento social como combustível principal do engajamento absurdo na internet",
        "A regra da emoção: as pessoas esquecem informação, mas nunca esquecem a emoção sentida"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "A Caça de Retenção",
      summary: "Aprenda a analisar rastros de viralização antes de todo mundo para extrair conteúdos com alto potencial emocional nos maiores hubs de vídeo da internet.",
      quotes: "Vídeo viral deixa pistas claras muito antes do seu estouro de visualizações.",
      details: [
        "A primeira regra da caça: pare de procurar visualizações puras e comece a rastrear comportamento",
        "Operando em 6 plataformas secretas como analista de dados estratégico, não de forma passiva",
        "O método prático em 3 passos para analisar comentários e identificar taxas implícitas de replay",
        "Utilizando o mapa mental de perguntas imperceptíveis para medir o poder de engajamento do vídeo"
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Edição Estratégica Que Vicia",
      summary: "O objetivo de uma edição dark eficiente nunca foi ficar bonita; é unicamente manter o espectador paralisado e impedir o botão de scroll.",
      quotes: "A viralização não acontece de forma acidental no conteúdo. Ela é lapidada na edição.",
      details: [
        "A fórmula invisível da edição de alto impacto: Gancho → Tensão → Clímax → Loop",
        "Técnica do Zoom Emocional: ampliando microexpressões, expressões de choque e silêncios desconfortáveis",
        "Legendas dinâmicas ultra-rápidas para prender audiências que assistem no mudo",
        "Técnica do Loop Final: encerre seus vídeos criando um gatilho mental que reinicia o consumo automático"
      ]
    },
    {
      id: 6,
      number: "06",
      title: "O Poder dos Primeiros 3 Segundos",
      summary: "Toda a trajetória do seu vídeo é decidida nos primeiros 3 batimentos do coração do espectador. Se o dedo dele mover antes de seu gancho agir, você perdeu o jogo.",
      quotes: "Os primeiros 3 segundos carregam mais poder do que os próximos 30 do vídeo todo.",
      details: [
        "O erro fatal do início convencional ('Oi pessoal, hoje vou...') vs 'A interrupção de padrão'",
        "Como preencher o feed de forma que o cérebro do usuário gaste menos energia se continuar assistindo",
        "Fórmulas práticas prontas de ganchos em categorias de curiosidade, choque, mistério, tensão e julgamento",
        "O teste supremo do scroll: a pergunta invisível que você deve se fazer antes de postar"
      ]
    },
    {
      id: 7,
      number: "07",
      title: "A Máquina de Postagem Consistente",
      summary: "Sorte e intuição são ruins para os negócios. Aprenda a pensar como um investidor corporativo criando um fluxo automático de postagem de alta frequência.",
      quotes: "Crescimento sustentável não acontece por causa de um vídeo de sorte. Acontece por termos um sistema.",
      details: [
        "VOLUME inteligente: Por que postar de 3 a 10 vídeos por dia acelera seu processo de aprendizado",
        "A escala de maturidade da consistência do perfil dark: Iniciante, Intermediário e Escala Absoluta",
        "Estudo de horários ideais recomendados: quando e como testar picos de conversão na sua conta",
        "A regra 80/20 de formatos validados versus inovações e experimentos rápidos"
      ]
    },
    {
      id: 8,
      number: "08",
      title: "O Segredo da Monetização Inteligente",
      summary: "Alcance gigantesco sem conversão em ativos financeiros é desperdício de dados. Descubra como extrair múltiplas fontes de receita do seu tráfego anônimo.",
      quotes: "Visualização impressiona iniciantes. Sistemas de monetização inteligente garantem liberdade.",
      details: [
        "Por que depender unicamente do fundo de monetização da plataforma (Creator Rewards) é perigoso",
        "Utilizando o marketing de afiliados de forma cirúrgica com indicação de ferramentas de alta conversão",
        "O ecossistema VIP do Telegram e Instagram como reservas permanentes de tráfego que você domina",
        "Criando infoprodutos expressos (Ebooks, Prompts, Modelos) cobrando pela mentoria e tempo economizado"
      ]
    },
    {
      id: 9,
      number: "09",
      title: "Construindo o Ecossistema",
      summary: "Aprenda o ciclo completo usado pelas maiores contas do mercado para prender a atenção do usuário no TikTok e conduzí-lo por um funil externo blindado.",
      quotes: "Vídeo viral sozinho não muda vidas. O que você constrói logo atrás do viral muda.",
      details: [
        "Atrair atenção na entrada e transformar curiosidade passageira em interesse de longo prazo",
        "Como otimizar seu perfil (Biografia, Estilo visual, Identidade) para que visitantes virem seguidores",
        "Estágio da confiança: ocupando espaço mental de forma a preparar o público para a oferta",
        "A arquitetura invisível: TikTok → Telegram → Instagram → Engajamento → Oferta → Vendas"
      ]
    },
    {
      id: 10,
      number: "10",
      title: "O Futuro do TikTok Dark",
      summary: "Dê o grande salto e utilize Inteligência Artificial para roteirização automática, tradução em massa, clonagem de vozes e controle automatizado de múltiplos canais.",
      quotes: "O criador do futuro não faz nada manualmente. Ele lidera e coordena sistemas inteligentes.",
      details: [
        "Como documentar processos para multiplicar sua equipe sem aumentar em nada seus custos operacionais",
        "Construção de impérios de atenção diversificando nichos diferentes ao mesmo tempo",
        "Ferramentas de automação que publicam e agendam vídeos enquanto você foca na estratégia",
        "IA generativa e o futuro dos cortes realísticos: as vantagens competitivas que ninguém te revela"
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      q: "Preciso mesmo aparecer ou expor minha vida pessoal?",
      a: "Absolutamente não! O coração do Método TikTok Dark é o anonimato total. Você operará 100% de trás das câmeras (bastidores). O foco está puramente no conteúdo estratégico, ganchos e edição emocional, sem expor seu rosto, voz ou identidade pessoal."
    },
    {
      q: "Preciso de um computador caro ou equipamentos profissionais de edição?",
      a: "Não. Você consegue estruturar, editar, pesquisar e postar toda sua grade de vídeos utilizando apenas um celular simples e aplicativos de edição 100% gratuitos recomendados no ebook. O que dita o sucesso do seu vídeo é a psicologia da atração e o ritmo estrutural, não efeitos em 4K."
    },
    {
      q: "Em quanto tempo posso começar a ver os primeiros resultados?",
      a: "Muitos alunos com consistência ativam o ecossistema e alcançam as primeiras viralizações de milhares de visualizações na primeira quinzena de execução do método de postagem de alta frequência (3 a 10 postagens inteligentes recomendadas). Tudo depende da aplicação cirúrgica de cada checklist detalhado."
    },
    {
      q: "Não sei nada sobre edição de vídeo ou algoritmos. Serve para mim?",
      a: "Com certeza. O ebook foi desenhado do zero absoluto à escala. Ele quebra conceitos difíceis de psicologia da atenção em passos de ação práticos, fórmulas de ganchos prontas para copiar, e explicações extremamente visuais e didáticas que qualquer iniciante entende."
    },
    {
      q: "Como receberei o meu acesso ao material?",
      a: "Ao clicar em qualquer botão de compra desta página e concluir seu pagamento seguro na Hotmart, você receberá instantaneamente os dados de acesso direto no seu e-mail cadastrado. O download é livre e imediato para começar a estudar hoje mesmo."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-zinc-100 font-sans selection:bg-brand-pink selection:text-white overflow-x-hidden">
      {/* GLOW BACKGROUND ELEMENT */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-brand-pink/10 via-brand-cyan/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 glass-morphism py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-brand-pink/30 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-brand-pink glow-pink" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold tracking-wider text-xl bg-gradient-to-r from-white via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                CÓDIGO TIKTOK DARK
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-display text-sm text-zinc-400">
            <a href="#conteudo" className="hover:text-white transition-colors">Sumário</a>
            <a href="#oferta" className="hover:text-white transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div>
            <a 
              href={PURCHASE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-zinc-900 hover:bg-zinc-800 text-xs md:text-sm font-display font-semibold transition-all px-4 py-2.5 rounded-full border border-brand-pink/50 hover:border-brand-pink flex items-center gap-2 group shadow-[0_0_15px_rgba(255,45,85,0.2)]"
            >
              Começar Agora
              <ArrowRight className="w-4 h-4 text-brand-pink group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN - SALES COPY */}
        <div className="lg:col-span-7 flex flex-col space-y-8 z-10 text-center lg:text-left">
          {/* MAIN HEADLINE */}
          <h1 className="font-display font-bold leading-tight tracking-tight text-3xl sm:text-5xl md:text-6xl text-white">
            O Manual Completo Para <span className="bg-gradient-to-r from-brand-pink via-brand-cyan to-white bg-clip-text text-transparent italic">Criar Vídeos Virais</span>, Crescer Rápido Sem Mostrar o Rosto
          </h1>

          {/* DYNAMIC COPY STATEMENTS */}
          <p className="text-zinc-300 text-base md:text-xl font-light leading-relaxed max-w-2xl">
            Aprenda a <span className="font-semibold text-white">dominar o algoritmo</span> usando a psicologia da atração humana. Crie ecossistemas de tráfego, monetize todos os dias e controle impérios digitais de forma <span className="text-brand-pink font-semibold">100% anônima</span>.
          </p>

          <p className="border-l-2 border-brand-cyan pl-4 text-zinc-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0 italic">
            &ldquo;O TikTok não recompensa quem aparece. Ele recompensa quem prende atenção e domina métricas.&rdquo;
          </p>

          {/* CTA & TRUST ROW */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
            <a 
              href={PURCHASE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full sm:w-auto bg-gradient-to-r from-brand-pink to-brand-pink bg-zinc-950 text-white font-display font-medium text-base md:text-lg transition-all py-4 px-8 rounded-full flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,45,85,0.5)] border border-brand-pink/70 hover:scale-[1.03] animate-bounce-subtle"
            >
              <Zap className="w-5 h-5 text-white glow-pink fill-white" />
              QUERO ACESSO IMEDIATO
            </a>

            <a 
              href="#conteudo"
              className="w-full sm:w-auto text-center font-display font-medium text-zinc-400 hover:text-white transition-colors duration-200 py-3 px-6 text-sm"
            >
              Ver Conteúdo Completo ↓
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN - PREMIUM 3D CSS BOOK COVER & AMBIENT GRAPHICS */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center relative py-12">
          {/* Cyan Glow Layer behind the book */}
          <div className="absolute w-[300px] height-[300px] bg-brand-cyan/20 blur-3xl rounded-full pointer-events-none -z-10" />
          
          {/* Isometric 3D Book Container */}
          <div className="perspective-1000 group cursor-pointer mt-12 mb-6">
            <div className="relative w-64 h-96 transition-all duration-500 transform-style-3d group-hover:rotate-y-20 group-hover:scale-105 shadow-[0_30px_60px_-15px_rgba(255,45,85,0.3)]">
              
              {/* Back side of book (not visible but completes volume) */}
              <div className="absolute inset-0 bg-zinc-950 rounded-lg transform rotate-y-180 translate-z-[-20px] shadow-2xl border-l border-zinc-800" />
              
              {/* Spine of the book */}
              <div className="absolute top-0 bottom-0 left-0 w-5 bg-zinc-900 border-r border-zinc-950 transform rotate-y-270 origin-left translate-x-0" />

              {/* Front Cover of the book */}
              <div className="absolute inset-0 rounded-lg overflow-hidden border border-brand-pink/40 bg-zinc-950 flex flex-col justify-between p-6 bg-radial from-zinc-900 to-zinc-950">
                {/* Book Header */}
                <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <span className="text-[9px] font-mono tracking-widest text-brand-pink font-bold">MANUAL COMPLETO</span>
                  <div className="w-4 h-4 bg-zinc-900 rounded-full border border-brand-cyan/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  </div>
                </div>

                {/* Central Title */}
                <div className="my-auto py-4">
                  <span className="text-zinc-400 text-xs tracking-wider block font-semibold mb-1">MÉTODO EXCLUSIVO</span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-none">
                    O CÓDIGO
                    <span className="block text-brand-pink tracking-tight py-1">TIKTOK</span>
                    <span className="block bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-clip-text text-transparent tracking-widest">DARK</span>
                  </h2>
                  <span className="text-[10px] text-zinc-500 font-mono block mt-3">COMO DOMINAR O ALGORITMO INTEGRALMENTE</span>
                </div>

                {/* Cover Footer */}
                <div className="border-t border-zinc-800 pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-brand-pink" />
                    <span className="text-[8px] font-mono text-zinc-400">RETENÇÃO & ATENÇÃO</span>
                  </div>
                  <div className="bg-brand-pink/10 border border-brand-pink/30 rounded-md px-1.5 py-0.5 text-[8px] font-mono text-brand-pink">
                    100% ANÔNIMO
                  </div>
                </div>

                {/* Decorative Pink Light Strip on Book Spine Edge */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-pink via-brand-cyan to-brand-pink opacity-80" />
                {/* Shiny diagonal reflect effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              </div>

            </div>
          </div>

          {/* Book physical descriptors under page */}
          <div className="glass-morphism rounded-2xl p-4 flex items-center gap-4 border border-zinc-800 shadow-lg text-left max-w-xs">
            <BookOpen className="w-8 h-8 text-brand-cyan animate-pulse shrink-0" />
            <div>
              <span className="text-xs text-brand-pink font-mono block tracking-wider font-semibold">EBOOK PREMIUM</span>
              <span className="text-xs text-zinc-300 block leading-normal mt-0.5">Versão Completa contendo 10 Capítulos estruturados com passo a passo prático.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SUMMARY / CHAPTERS DETAIL ACCORDION (O QUE VOCÊ VAI APRENDER) */}
      <section id="conteudo" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* TITLE HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-pink uppercase block">
            CONTEÚDO PROGRAMÁTICO COMPLETO
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            O Conteúdo da sua Nova Profissão
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Abra cada capítulo abaixo e veja um resumo real do conhecimento de bastidores que você vai absorver dentro do e-book.
          </p>
        </div>

        {/* INTERACTIVE GRIDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT INDEX COLUMN (1 to 10 indices) */}
          <div className="lg:col-span-4 space-y-2">
            {chapters.map(chap => (
              <div 
                key={chap.id}
                onClick={() => setActiveChapter(chap.id)}
                className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                  activeChapter === chap.id 
                    ? "bg-zinc-900 border-brand-cyan/40 shadow-inner" 
                    : "bg-transparent border-zinc-900 hover:bg-zinc-900/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm font-bold ${activeChapter === chap.id ? "text-brand-cyan" : "text-zinc-500"}`}>
                    {chap.number}
                  </span>
                  <span className={`font-display text-xs md:text-sm font-semibold ${activeChapter === chap.id ? "text-white" : "text-zinc-400"}`}>
                    {chap.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ACCORDION DETAILS PANELS */}
          <div className="lg:col-span-8 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 min-h-[480px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

            {/* Content box */}
            {chapters.map(chap => {
              if (chap.id !== activeChapter) return null;
              return (
                <div key={chap.id} className="space-y-6">
                  {/* Category info */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-brand-pink bg-brand-pink/10 px-2 py-0.5 rounded uppercase">
                      Capítulo {chap.number}
                    </span>
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">O Código Secreto</span>
                  </div>

                  {/* Main section title */}
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-normal">
                    {chap.title}
                  </h3>

                  {/* Summarized claim */}
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                    {chap.summary}
                  </p>

                  <div className="space-y-3">
                    <span className="text-xs font-mono text-zinc-400 block font-semibold uppercase tracking-wider">O que você vai dominar na prática:</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {chap.details.map((detail, keyInd) => (
                        <li key={keyInd} className="flex items-start gap-2 text-xs md:text-sm text-zinc-400 leading-normal">
                          <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0 block mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Quote Highlight */}
                  <div className="border-t border-zinc-800 pt-6">
                    <span className="text-[10px] text-zinc-500 font-mono block mb-1 uppercase tracking-wider">FRASE DE VALOR CHAVE DA LEITURA:</span>
                    <p className="text-sm text-zinc-400 italic">
                      &ldquo;{chap.quotes}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Footer with conversion redirect */}
            <div className="pt-8 border-t border-zinc-800/60 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-zinc-500 font-sans">Atenção é o novo petróleo na internet de hoje.</span>
              <a 
                href={PURCHASE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-zinc-950 hover:bg-zinc-850 text-zinc-200 border border-brand-cyan hover:border-brand-pink transition-all px-6 py-2 rounded-full text-xs font-semibold"
              >
                Garantir Ebook de Lançamento
              </a>
            </div>

          </div>
        </div>
      </section>





      {/* 8. PURCHASE OFFER / CHECKOUT BLOCK (A OFERTA IRRESISTÍVEL) */}
      <section id="oferta" className="py-24 bg-gradient-to-b from-zinc-950/20 via-brand-pink/5 to-zinc-950/20 border-y border-zinc-900 px-6 md:px-12 relative">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-brand-cyan/5 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* OFERTA TITLE */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-pink uppercase block">
              ADQUIRA O ACESSO COMPLETO HOJE MESMO
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-tight">
              A Escolha é Sua:<br />
              <span className="bg-gradient-to-r from-brand-pink via-white to-brand-cyan bg-clip-text text-transparent italic pr-4 overflow-visible">Assistir ou Construir?</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
              Garanta imediatamente o seu e-book O Código TikTok Dark.
            </p>
          </div>

          {/* VALUE PROPOSITION BOX */}
          <div className="bg-radial from-zinc-900 to-zinc-950 p-8 md:p-12 rounded-3xl border-2 border-brand-pink/40 text-left relative overflow-hidden shadow-[0_0_50px_rgba(255,45,85,0.15)]">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Product Info left block */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <span className="text-xs font-mono text-brand-pink font-semibold block uppercase tracking-wide">MÉTODO TESTADO E COMPROVADO</span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-1">O Código TikTok Dark</h3>
                </div>

                <div className="space-y-3.5 border-t border-zinc-850 pt-4">
                  <div className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                    <Check className="text-brand-cyan shrink-0 w-5 h-5 bg-brand-cyan/10 rounded-full p-0.5" />
                    <span><strong className="text-white">Ebook Premium Original:</strong> 10 capítulos, do zero absoluto ao ecossistema.</span>
                  </div>
                </div>
              </div>

              {/* Price scoreboard right block */}
              <div className="md:col-span-4 bg-zinc-950/80 p-6 rounded-2xl border border-zinc-800 text-center flex flex-col justify-between h-full space-y-4">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono block tracking-wider uppercase font-semibold">VALOR TOTAL</span>
                  <span className="text-sm text-zinc-400 line-through block mt-0.5 font-mono">R$ 99,90</span>
                </div>

                <div>
                  <span className="text-[9px] text-brand-cyan font-mono block uppercase tracking-widest font-bold">HOJE POR APENAS</span>
                  <div className="flex items-baseline justify-center gap-1.5 mt-1">
                    <span className="text-xs text-zinc-400 font-mono font-medium">R$</span>
                    <span className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tight">49,90</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 block font-light mt-1">ou em 7 x de R$ 7,13 no cartão</span>
                </div>

                <a 
                  href={PURCHASE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full bg-brand-pink text-white font-display font-semibold transition-all py-3.5 px-4 rounded-full text-xs md:text-sm shadow-[0_0_20px_rgba(255,45,85,0.4)] hover:scale-[1.02]"
                >
                  COMPRAR AGORA S/ RISCO
                </a>
              </div>
            </div>

            {/* Security banner */}
            <div className="mt-8 pt-6 border-t border-zinc-850 flex justify-center text-xs text-zinc-500">
              <div className="flex items-center gap-1.5 text-[10px] md:text-xs">
                <Lock className="w-4 h-4 text-zinc-500 block shrink-0" />
                <span>Pagamento 100% Criptografado e Seguro via Hotmart.</span>
              </div>
            </div>

          </div>

          {/* Final decision motivator quote */}
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              <strong className="text-zinc-400">Nota sobre Ganhos:</strong> Esforço e execução são obrigatórios. Não fornecemos nenhuma garantia mágica de lucros automáticos sem trabalho estratégico. O ebook ensina as exatas técnicas de engenharia de retenção que servem para decolar a atração do algoritmo, dependendo do executor sua aplicação direta.
            </p>
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION (PERGUNTAS FREQUENTES) */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan block">
            DÚVIDAS SOLUCIONADAS
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Se ainda tem alguma incerteza antes de dar o próximo passo, respondemos as principais dúvidas dos novos alunos abaixo.
          </p>
        </div>

        {/* INTERACTIVE QUESTIONS ACCORDION PANEL */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenedFaq(openedFaq === index ? null : index)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 text-sm md:text-base font-semibold text-white hover:text-brand-pink transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                  openedFaq === index ? "rotate-180 text-brand-pink" : ""
                }`} />
              </button>

              <AnimatePresence initial={false}>
                {openedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-xs md:text-sm text-zinc-400 leading-relaxed border-t border-zinc-850 bg-zinc-950/20">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA FINAL & BULLETIN SECURITY FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-44 bg-brand-pink/5 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-12">
          
          {/* LOGO COLUMN */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-brand-pink/40 flex items-center justify-center p-0.5 shadow-lg">
              <TrendingUp className="w-6 h-6 text-brand-pink glow-pink" />
            </div>
            <div>
              <span className="font-display font-bold tracking-wider text-2xl bg-gradient-to-r from-white via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                O CÓDIGO TIKTOK DARK
              </span>
              <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-widest">O Manual Supremo da Atenção na Internet</p>
            </div>
          </div>

          {/* REASSURANCE STATEMENT */}
          <div className="max-w-2xl mx-auto text-zinc-400 text-xs leading-relaxed space-y-4">
            <p>
              Este site não possui qualquer afiliação direta com a marca TikTok ou ByteDance Ltd. Todas as análises de contas, menções e logos de plataformas servem inteiramente como referências e benchmarks didáticos e ilustrativos para demonstrar a aplicação prática dos conceitos descritos no e-book.
            </p>
            <p>
              Os resultados econômicos demonstrados são cenários de simulação e levantamento histórico. Não garantimos ganhos financeiros ou de engajamento fixos; sua performance depende unicamente do trabalho, da consistência e da correta aplicação do método por parte de cada executor.
            </p>
          </div>

          {/* SECURE MARKINGS AND LINKS */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="hover:text-zinc-400 transition-colors cursor-pointer">Termos de Uso</span>
              <span>•</span>
              <span className="hover:text-zinc-400 transition-colors cursor-pointer">Políticas de Privacidade</span>
              <span>•</span>
              <a href={PURCHASE_URL} target="_blank" rel="noreferrer noopener" className="hover:text-brand-pink transition-colors">Solicitar Suporte</a>
            </div>
            
            <div className="flex items-center gap-2 select-none">
              <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5 text-zinc-400">SSL ENCRYPTED</span>
              <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5 text-brand-pink">HOTMART COMPLIANT</span>
              <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5 text-brand-cyan">2026</span>
            </div>
          </div>

          {/* Credits line */}
          <div className="text-[11px] text-zinc-650 font-mono pt-4 select-none">
            O Código TikTok Dark © Todos os direitos reservados.
          </div>

        </div>
      </footer>

    </div>
  );
}
