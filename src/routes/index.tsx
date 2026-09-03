import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Star,
  FileDown,
  ChevronDown,
  Phone,
  Check,
} from "lucide-react";

const WA_CORP =
  "https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento%20corporativo%20para%20minha%20empresa.";
const WA_GERAL =
  "https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento.";
const CATALOGO =
  "https://sweet-site-builder-18.lovable.app/__l5e/assets-v1/813bb780-d9b8-4eb4-b3c4-430d6c664eb8/catalogo-xuxuzinho.pdf";
const GOOGLE_REVIEWS = "https://share.google/1phk8kyYl4jfbbDd5";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Xuxuzinho Corporativo — Cupcakes Personalizados para Empresas",
      },
      {
        name: "description",
        content:
          "Cupcakes corporativos personalizados com a identidade visual da sua marca. Brindes, coffee breaks e eventos no Tatuapé, São Paulo.",
      },
      {
        property: "og:title",
        content: "Xuxuzinho Corporativo — Cupcakes Personalizados para Empresas",
      },
      {
        property: "og:description",
        content:
          "Cupcakes, brownies, bolos, docinhos e pão de mel artesanais com embalagem personalizada para a sua empresa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&family=Yellowtail&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Xuxuzinho",
          description:
            "Confeitaria artesanal com doces corporativos personalizados no Tatuapé, São Paulo.",
          telephone: "+5511950858045",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tatuapé",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1000",
          },
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Corporativo", href: "#corporativo" },
  { label: "Produtos", href: "#produtos" },
  { label: "Parcerias", href: "#parcerias" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

const TAGS = ["Cupcake", "Brownie", "Bolos", "Docinhos", "Pão de mel", "Entre outros"];

const STATS = [
  { value: "100%", label: "artesanal" },
  { value: "+500", label: "eventos atendidos" },
  { value: "SP", label: "Tatuapé" },
  { value: "WhatsApp", label: "Orçamento rápido" },
];

const BENEFITS = [
  {
    n: "01",
    title: "Brindes personalizados",
    text: "Caixas e embalagens com a identidade visual da sua marca, prontas para presentear clientes e equipes.",
  },
  {
    n: "02",
    title: "Eventos e confraternizações",
    text: "Mesa de doces, brindes kits individuais e coletivos para treinamentos, datas comemorativas, reuniões e mais.",
  },
  {
    n: "03",
    title: "Pedidos recorrentes",
    text: "Programação mensal para aniversariantes do mês, onboarding de colaboradores e ações internas.",
  },
  {
    n: "04",
    title: "Produção 100% artesanal",
    text: "Ingredientes selecionados, receitas próprias e acabamento feito à mão, doce por doce.",
  },
];

const PRODUCTS = [
  {
    img: "/images/cupcake-3.webp",
    title: "Cupcakes e mini cupcakes",
    text: "Perfeitos para eventos, festa na empresa, brindes, presente para funcionários e clientes.",
  },
  {
    img: "/images/brownie-2.webp",
    title: "Brownie",
    text: "Brownies intensos, embalados individualmente.",
  },
  {
    img: "/images/docinho-1.webp",
    title: "Docinhos",
    text: "Docinhos individuais ou coletivos. Um excelente brinde comestível.",
  },
  {
    img: "/images/paodemel-1.webp",
    title: "Pão de Mel",
    text: "Deliciosos Pães de Mel super recheados para sua empresa ou evento.",
  },
  {
    img: "/images/bolo-1.webp",
    title: "Bolos Personalizados",
    text: "Bolos exclusivos com a identidade visual da sua empresa.",
  },
  {
    img: "/images/bento-3.webp",
    title: "Bentô Cakes",
    text: "Perfeito para presentear colaboradores, amigos e clientes.",
  },
  {
    img: "/images/minibolo-2.webp",
    title: "Mini Bolos",
    text: "Porções individuais elegantes.",
  },
  {
    img: "/images/outros-4.webp",
    title: "Outros Produtos",
    text: "Kits, canecas personalizadas, drages, cestas, entre outros.",
  },
];

const BRANDS = [
  { src: "/images/sm/pilot.webp", name: "Pilot" },
  { src: "/images/sm/lojasmel.webp", name: "Lojas Mel" },
  { src: "/images/sm/revelo.webp", name: "Revelo" },
  { src: "/images/sm/petcare.webp", name: "Pet Care Centro Veterinário 24h" },
  { src: "/images/sm/foodtosave.webp", name: "Food to Save" },
  { src: "/images/sm/espiritosanto.webp", name: "Espírito Santo" },
  { src: "/images/sm/pluris.webp", name: "Pluris" },
  { src: "/images/sm/unicharm.webp", name: "Unicharm" },
];

const TESTIMONIALS = [
  {
    img: "/images/depoimento-natalia.webp",
    quote:
      "Estou a 3 meses fazendo os pedidos do Bentô Class de mesversário do meu sobrinho e além dos bolinhos serem lindos o sabor é maravilhoso! 3 temas, 3 sabores e nenhum arrependimento, rs. O atendimento das meninas também é super rápido, entrega sempre certinha. Vamos assim até o primeiro aninho 🤩❤️🎂",
    name: "Natália Esplendor",
    role: "Bentô cakes de mesversário",
  },
  {
    img: "/images/depoimento-kethelin-18.webp",
    quote:
      "A experiência já começa no atendimento: rápido, preciso e extremamente atencioso. Quando recebi o bolo, entendi por que são realmente uma referência no que fazem. Tudo é pensado com muito cuidado, desde a embalagem até cada detalhe da apresentação. O bolo, além de lindo, é simplesmente delicioso. Sério, está impecável!",
    name: "Kethelin De Oliveira Perandre",
    role: "Bolo personalizado",
  },
  {
    img: "/images/depoimento-suellen-21.webp",
    quote:
      "Mais uma vez só tenho a agradecer a atenção, do pedido até a entrega. O capricho em atender nosso pedido e oferecer com atenção e pontualidade vale o preço pago. Nunca é só um bolo. Representam de verdade o nosso amor no pedido.",
    name: "Suellen Ferreira",
    role: "Cliente recorrente",
  },
];

const FAQ = [
  {
    q: "Posso personalizar meu pedido?",
    a: "Sim! Personalizamos seu pedido de acordo com a sua ideia, ocasião ou identidade visual da empresa.",
  },
  {
    q: "Qual é o prazo de produção?",
    a: "Para pedidos de até 50 unidades, recomendamos pelo menos 3 dias de antecedência. Para quantidades maiores, consulte nossa equipe para verificarmos o melhor prazo.",
  },
  {
    q: "Como faço o pagamento?",
    a: "Para empresas, trabalhamos com pagamento via PIX ou boleto bancário. Consulte nossa equipe para mais informações.",
  },
  {
    q: "Vocês fazem entrega?",
    a: "Sim, atendemos algumas regiões de São Paulo. Consulte nossa equipe para verificar a disponibilidade e o valor da entrega para o seu endereço.",
  },
  {
    q: "Qual é a validade dos produtos?",
    a: "A validade varia de acordo com o produto. Pães de mel e brownies, por exemplo, podem durar até 15 dias, enquanto bolos e docinhos possuem validade menor. Consulte-nos para saber a validade do item escolhido.",
  },
  {
    q: "Existe quantidade mínima para pedidos?",
    a: "Não temos quantidade mínima. Para pedidos menores, as opções de personalização podem variar de acordo com o produto e a quantidade escolhida.",
  },
  {
    q: "Vocês fazem pedidos para empresas e eventos?",
    a: "Sim! Produzimos encomendas para empresas, eventos, ações promocionais, confraternizações e presentes corporativos.",
  },
  {
    q: "Vocês atendem pedidos em grandes quantidades?",
    a: "Sim. Atendemos desde pequenas encomendas até pedidos corporativos em maiores quantidades. Para grandes volumes, recomendamos entrar em contato com antecedência.",
  },
  {
    q: "Posso solicitar um orçamento personalizado?",
    a: "Claro! Envie o produto desejado, quantidade, personalização e data de entrega. Nossa equipe prepara um orçamento de acordo com a sua necessidade.",
  },
];

function CtaButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-caramel text-navy shadow-[0_12px_30px_-12px_var(--caramel-deep)] hover:bg-caramel-deep hover:-translate-y-0.5"
      : "border border-navy/20 text-navy hover:bg-navy hover:text-cream";
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-cream text-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <a href="#top" className="font-script text-3xl leading-none text-navy">
            Xuxuzinho
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy/75 transition-colors hover:text-plum"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <CtaButton href={WA_CORP}>
            <MessageCircle className="size-4" /> Orçamento
          </CtaButton>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="section-shell pt-14 pb-16 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Linha corporativa</p>
              <h1 className="mt-5 text-5xl leading-[1.05] font-bold tracking-tight md:text-6xl">
                Doces artesanais que carregam a essência da sua marca
              </h1>
              <p className="mt-6 max-w-md text-base text-navy/70">
                Elaborados com ingredientes de alta qualidade e decorados de acordo
                com a identidade visual do seu evento.
              </p>
              <div className="mt-8">
                <CtaButton href={WA_CORP}>
                  <MessageCircle className="size-4" /> Pedir orçamento no WhatsApp
                </CtaButton>
              </div>
              <p className="mt-4 text-sm text-navy/55">
                Pedidos exclusivamente pelo WhatsApp.
              </p>
            </div>

            <div className="relative rounded-[2rem] bg-white/70 p-3 shadow-[0_40px_80px_-50px_rgba(23,35,63,0.6)]">
              <img
                src="/images/hero-cupcake.webp"
                alt="Cupcake artesanal com cobertura de chocolate e caixas de brinde com laço vermelho"
                className="h-[420px] w-full rounded-[1.6rem] object-cover md:h-[520px]"
              />
              <div className="absolute right-6 bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-cream-deep/95 px-4 py-3 backdrop-blur">
                <img
                  src="/images/logo-x.webp"
                  alt="Logotipo Xuxuzinho"
                  className="size-9 rounded-full object-contain"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold">Confeitaria artesanal</p>
                  <p className="flex items-center gap-1 text-xs text-navy/60">
                    <MapPin className="size-3" /> Tatuapé · São Paulo
                  </p>
                </div>
                <span className="font-display text-lg font-semibold">100%</span>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full bg-navy px-6 py-3 text-xs font-bold tracking-widest text-cream uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-plum px-6 py-6 text-cream">
                <p className="font-display text-2xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm text-cream/75">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section id="corporativo" className="bg-cream-deep py-20">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="eyebrow">Empresas e eventos</p>
                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Por que escolher a Xuxuzinho?
                </h2>
              </div>
              <p className="text-navy/70">
                Do sabor à embalagem, cada detalhe é pensado para representar a
                essência da sua marca — com atendimento próximo do briefing à
                entrega.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {BENEFITS.map((b) => (
                <article
                  key={b.n}
                  className="rounded-3xl border border-navy/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(23,35,63,0.6)]"
                >
                  <span className="font-display text-3xl text-caramel-deep">{b.n}</span>
                  <h3 className="mt-4 text-xl font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{b.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton href={WA_CORP}>
                <MessageCircle className="size-4" /> Falar com a Xuxuzinho
              </CtaButton>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="produtos" className="py-20">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Nossa linha de produtos</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Tudo o que a Xuxuzinho produz
              </h2>
              <p className="mt-4 text-navy/70">
                Todos os itens podem ser combinados em kits e caixas personalizadas
                para a sua empresa ou evento.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <article
                  key={p.title}
                  className="group overflow-hidden rounded-3xl border border-navy/10 bg-white/60"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-navy/65">{p.text}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Catálogo */}
            <div className="mt-14 grid gap-8 rounded-3xl bg-navy p-10 text-cream md:grid-cols-2 md:items-center md:p-14">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-caramel uppercase">
                  Catálogo completo
                </p>
                <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
                  Acesse nosso catálogo abaixo e veja nossa linha completa
                </h3>
              </div>
              <div>
                <p className="text-sm text-cream/75">
                  Sabores, opções de personalização, kits e formatos de embalagem em
                  um único arquivo PDF, pronto para compartilhar com o seu time.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CtaButton href={CATALOGO}>
                    <FileDown className="size-4" /> Baixar catálogo (PDF)
                  </CtaButton>
                  <a
                    href={WA_CORP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-navy"
                  >
                    Consultar sabores e kits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parcerias */}
        <section id="parcerias" className="bg-cream-deep py-20">
          <div className="section-shell text-center">
            <p className="eyebrow">Parcerias</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Marcas que confiam em nós
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/70">
              Empresas que escolheram a Xuxuzinho para adoçar seus eventos, brindes e
              celebrações internas.
            </p>
          </div>
          <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16 pr-16">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <img
                  key={`${b.name}-${i}`}
                  src={b.src}
                  alt={`Logotipo ${b.name}`}
                  loading="lazy"
                  className="h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-20">
          <div className="section-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Depoimentos</p>
                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  O que dizem sobre a Xuxuzinho
                </h2>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white/60 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl font-semibold">4,9</span>
                  <div className="flex text-caramel-deep">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-xs text-navy/60">+1.000 avaliações no Google</p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white/60"
                >
                  <img
                    src={t.img}
                    alt={`Pedido de ${t.name}`}
                    loading="lazy"
                    className="h-60 w-full object-cover"
                  />
                  <blockquote className="flex-1 p-6 text-sm leading-relaxed text-navy/75">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="border-t border-navy/10 px-6 py-4">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-navy/55">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton href={GOOGLE_REVIEWS} variant="outline">
                Ver todas as avaliações no Google
              </CtaButton>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="bg-cream-deep py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Dúvidas antes de encomendar
              </h2>
            </div>
            <div className="divide-y divide-navy/10 rounded-3xl border border-navy/10 bg-cream px-6">
              {FAQ.map((item, i) => (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium"
                  >
                    {item.q}
                    <ChevronDown
                      className={`size-5 shrink-0 text-plum transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open === i && (
                    <p className="pb-5 text-sm leading-relaxed text-navy/70">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20">
          <div className="section-shell">
            <div className="grid gap-10 rounded-[2rem] bg-plum p-10 text-cream md:grid-cols-2 md:p-16">
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">
                  Vamos adoçar sua próxima ação?
                </h2>
                <p className="mt-5 text-cream/80">
                  Quer um orçamento da linha de produtos da Xuxuzinho, um evento
                  especial ou uma ocasião diferente? Conte a data, a quantidade e a
                  ideia — respondemos com sabores, embalagens e prazos.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <ul className="space-y-3">
                  {["Linha de produtos", "Eventos especiais", "Ocasiões personalizadas"].map(
                    (li) => (
                      <li key={li} className="flex items-center gap-3 text-sm">
                        <Check className="size-4 text-caramel" /> {li}
                      </li>
                    ),
                  )}
                </ul>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <CtaButton href={WA_GERAL}>
                    <MessageCircle className="size-4" /> Pedir orçamento
                  </CtaButton>
                  <span className="flex items-center gap-2 text-sm text-cream/80">
                    <Phone className="size-4" /> WhatsApp (11) 95085-8045
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-navy/10 py-10">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4 text-sm text-navy/60">
          <span className="font-script text-2xl text-navy">Xuxuzinho</span>
          <p>Confeitaria artesanal · Tatuapé, São Paulo · Pedidos pelo WhatsApp</p>
        </div>
      </footer>

      {/* Botão flutuante */}
      <a
        href={WA_CORP}
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3.5 text-sm font-semibold text-navy shadow-[0_16px_40px_-14px_var(--caramel-deep)] transition-all hover:-translate-y-0.5 hover:bg-caramel-deep"
      >
        <MessageCircle className="size-4" /> Pedir orçamento
      </a>
    </div>
  );
}
