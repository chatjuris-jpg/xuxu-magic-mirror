import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroMesversario from "@/assets/hero-mesversario.png.asset.json";
import mes1BrancaDeNeve from "@/assets/mes-1-branca-de-neve.png.asset.json";
import mes2PoderosoNenezinho from "@/assets/mes-2-poderoso-nenezinho.png.asset.json";
import mes3RafaelaCinderela from "@/assets/mes-3-rafaela-cinderela.png.asset.json";
import {
  MessageCircle,
  Sparkles,
  Cake,
  HeartHandshake,
  Camera,
  Star,
  Plus,
  PartyPopper,
  Phone,
  Instagram,
} from "lucide-react";

const WA_TEMA =
  "https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Quero%20escolher%20o%20tema%20do%20pr%C3%B3ximo%20mesvers%C3%A1rio%20do%20meu%20beb%C3%AA.";
const WA_ORCAMENTO =
  "https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20bolo%20de%20mesvers%C3%A1rio.";
const GOOGLE_REVIEWS = "https://share.google/1phk8kyYl4jfbbDd5";

const waMes = (mes: string) =>
  `https://wa.me/5511950858045?text=${encodeURIComponent(
    `Olá, Xuxuzinho! Quero um bolo para o ${mes} do meu bebê 🎂`,
  )}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Xuxuzinho — Bolos de Mesversário Divertidos em São Paulo" },
      {
        name: "description",
        content:
          "Bolos decorados artesanais para mesversário do 1º ao 12º mês. Temas exclusivos, sabor de festa de verdade e entrega no Tatuapé e região, São Paulo.",
      },
      {
        property: "og:title",
        content: "Xuxuzinho — Bolos de Mesversário Personalizados",
      },
      {
        property: "og:description",
        content:
          "Cada mês do seu bebê merece ser celebrado. Bolos artesanais e temáticos para transformar o mesversário em memória doce.",
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
            "Bolos de mesversário decorados e personalizados, artesanais, no Tatuapé, São Paulo.",
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
  { label: "Escolha o mês", href: "#meses" },
  { label: "Por que comemorar", href: "#beneficios" },
  { label: "Galeria", href: "#temas" },
  { label: "Recadinhos", href: "#depoimentos" },
  { label: "Como funciona", href: "#como-funciona" },
];

const MONTHS = [
  {
    n: 1,
    tema: "Nuvem de algodão",
    img: mes1BrancaDeNeve.url,
    alt: "Bolo do primeiro mês decorado com tema Branca de Neve e nome Manuela",
    emoji: "☁️",
  },
  {
    n: 2,
    tema: "Ursinho fofo",
    img: "/images/bolo-1.webp",
    alt: "Bolo temático de mesversário decorado à mão",
    emoji: "🧸",
  },
  {
    n: 3,
    tema: "Jardim encantado",
    img: "/images/minibolo-2.webp",
    alt: "Mini bolo decorado para mesversário",
    emoji: "🌷",
  },
  {
    n: 4,
    tema: "Balõezinhos",
    img: "/images/cupcake-3.webp",
    alt: "Cupcakes decorados para a mesa do mesversário",
    emoji: "🎈",
  },
  {
    n: 5,
    tema: "Fundo do mar",
    img: "/images/depoimento-natalia.webp",
    alt: "Bolo de mesversário com detalhes coloridos",
    emoji: "🐠",
  },
  {
    n: 6,
    tema: "Mundo dos dinos",
    img: "/images/depoimento-kethelin-18.webp",
    alt: "Bolo com dinossauro desenhado à mão",
    emoji: "🦖",
  },
  {
    n: 7,
    tema: "Circo colorido",
    img: "/images/paodemel-1.webp",
    alt: "Doces artesanais coloridos para a mesa",
    emoji: "🎪",
  },
  {
    n: 8,
    tema: "Fazendinha",
    img: "/images/brownie-2.webp",
    alt: "Brownies decorados para o mesversário",
    emoji: "🐮",
  },
  {
    n: 9,
    tema: "Chuva de amor",
    img: "/images/docinho-1.webp",
    alt: "Docinhos artesanais para completar a mesa",
    emoji: "💗",
  },
  {
    n: 10,
    tema: "Arco-íris",
    img: "/images/outros-4.webp",
    alt: "Bolo colorido para mesversário",
    emoji: "🌈",
  },
  {
    n: 11,
    tema: "Bailarina",
    img: "/images/depoimento-suellen-21.webp",
    alt: "Bolo de bailarina com flores em chantilly",
    emoji: "🩰",
  },
  {
    n: 12,
    tema: "Festa de 1 aninho",
    img: "/images/hero-cupcake.webp",
    alt: "Bolo e cupcakes para a festa de um ano",
    emoji: "🎂",
  },
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Temas exclusivos",
    text: "Da ideia mais simples ao cenário mais lúdico, criamos o bolo exatamente como você sonhou.",
    tilt: "-2deg",
  },
  {
    icon: Cake,
    title: "Sabor de festa de verdade",
    text: "Ingredientes selecionados, massa fofinha e recheios equilibrados que encantam adultos e crianças.",
    tilt: "1.5deg",
  },
  {
    icon: HeartHandshake,
    title: "Zero dor de cabeça para os pais",
    text: "Você cuida da foto e do bebê; nós cuidamos do centro da mesa.",
    tilt: "-1deg",
  },
];

const POLAROIDS = [
  { img: "/images/bento-3.webp", cap: "1º mês", alt: "Bentô cake do primeiro mês" },
  { img: "/images/bolo-1.webp", cap: "3º mês", alt: "Bolo temático decorado à mão" },
  { img: "/images/minibolo-2.webp", cap: "5º mês", alt: "Mini bolo de mesversário" },
  { img: "/images/cupcake-3.webp", cap: "7º mês", alt: "Cupcakes decorados" },
  {
    img: "/images/depoimento-kethelin-18.webp",
    cap: "9º mês",
    alt: "Bolo com dinossauro desenhado à mão",
  },
  {
    img: "/images/depoimento-suellen-21.webp",
    cap: "11º mês",
    alt: "Bolo de bailarina com flores em chantilly",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Escolha o tema e a data do mês",
    text: "Manda a inspiração, a cor favorita ou só a ideia solta — a gente transforma em bolo.",
    emoji: "🗓️",
  },
  {
    n: "2",
    title: "Defina o tamanho e os sabores favoritos",
    text: "Do bentô para a foto ao bolo que serve a família inteira, com os recheios que vocês amam.",
    emoji: "🍰",
  },
  {
    n: "3",
    title: "Receba tudo pronto para cantar o parabéns",
    text: "Chega lindo, fresquinho e no horário combinado. É só acender a velinha e fotografar.",
    emoji: "🎉",
  },
];

const TESTIMONIALS = [
  {
    img: "/images/depoimento-natalia.webp",
    quote:
      "Estou a 3 meses fazendo os pedidos do Bentô Cake de mesversário do meu sobrinho e além dos bolinhos serem lindos o sabor é maravilhoso! 3 temas, 3 sabores e nenhum arrependimento, rs. O atendimento das meninas também é super rápido, entrega sempre certinha. Vamos assim até o primeiro aninho 🤩❤️🎂",
    name: "Natália Esplendor",
    role: "Bentô cakes de mesversário",
  },
  {
    img: "/images/depoimento-kethelin-18.webp",
    quote:
      "A experiência já começa no atendimento: rápido, preciso e extremamente atencioso. Quando recebi o bolo, entendi por que são realmente uma referência no que fazem. Tudo é pensado com muito cuidado, desde a embalagem até cada detalhe da apresentação. O bolo, além de lindo, é simplesmente delicioso. Com toda certeza acompanharão os próximos 12 meses do meu pequeno!",
    name: "Kethelin De Oliveira Perandre",
    role: "Bolo personalizado · 1º mês",
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
    q: "Com quanta antecedência preciso encomendar?",
    a: "Recomendamos reservar a data com pelo menos 3 dias de antecedência. Como as vagas na agenda mensal são limitadas, quanto antes melhor — muitas famílias já deixam os 12 meses combinados.",
  },
  {
    q: "Posso mandar uma foto de inspiração?",
    a: "Pode e adoramos! Envie a referência, a paleta de cores ou o tema da festinha pelo WhatsApp e criamos uma versão exclusiva para o seu bebê.",
  },
  {
    q: "Qual tamanho escolher para o mesversário?",
    a: "O bentô cake é perfeito para as fotos e para o casal. Para reunir a família, indicamos os bolos maiores ou um combo de bolo + docinhos.",
  },
  {
    q: "Quais são os sabores disponíveis?",
    a: "Temos massas e recheios clássicos e especiais — chocolate, ninho, brigadeiro, morango, doce de leite e mais. Consulte a lista completa no WhatsApp.",
  },
  {
    q: "Vocês entregam?",
    a: "Sim, atendemos o Tatuapé e diversas regiões de São Paulo. Consulte a disponibilidade e o valor da entrega para o seu endereço.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Trabalhamos com PIX e as principais formas de pagamento. A data só fica reservada na agenda após a confirmação do pedido.",
  },
];

const RIBBON = [
  "1º mês",
  "bentô cake",
  "2º mês",
  "temas exclusivos",
  "3º mês",
  "feito à mão",
  "6º mês",
  "sabor de festa",
  "9º mês",
  "entrega no horário",
  "12º mês",
  "parabéns pra você",
];

function Cta({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "plum" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-1 active:translate-y-0";
  const styles = {
    solid: "bg-caramel text-navy shadow-[5px_5px_0_0_var(--navy)]",
    plum: "bg-plum text-cream shadow-[5px_5px_0_0_var(--navy)]",
    light: "bg-cream text-navy shadow-[5px_5px_0_0_var(--navy)]",
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [mes, setMes] = useState(1);
  const [open, setOpen] = useState<number | null>(0);
  const atual = MONTHS.find((m) => m.n === mes)!;

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-navy">
      {/* FITA SUPERIOR */}
      <div className="overflow-hidden border-b-2 border-navy bg-plum py-2">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap text-xs font-bold tracking-widest text-cream uppercase">
          {[...RIBBON, ...RIBBON].map((t, i) => (
            <span key={t + i} className="flex items-center gap-8">
              {t} <span className="text-caramel">✦</span>
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b-2 border-navy bg-cream/95 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <a href="#top" className="font-script text-3xl leading-none text-plum">
            Xuxuzinho
          </a>
          <nav className="hidden items-center gap-2 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-navy/75 transition-colors hover:bg-caramel/40 hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Cta href={WA_ORCAMENTO} className="px-5 py-2.5">
            <MessageCircle className="size-4" /> Orçamento
          </Cta>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <span className="inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-navy bg-cream px-4 py-2 text-xs font-bold tracking-wide">
                <PartyPopper className="size-4 text-plum" /> Especialistas em
                mesversário
              </span>
              <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-bold tracking-tight md:text-[4rem]">
                Cada mês do seu bebê merece ser celebrado como uma{" "}
                <span className="relative inline-block">
                  <span className="font-script relative z-10 text-plum">
                    grande conquista
                  </span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-caramel/70" />
                </span>
                .
              </h1>
              <p className="mt-6 max-w-lg text-base text-navy/75">
                Bolos decorados artesanais e personalizados para transformar cada
                mesversário em uma memória doce e inesquecível.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Cta href={WA_TEMA} variant="plum" className="px-8 py-4 text-base">
                  <Sparkles className="size-5" /> Escolher o tema do próximo mês
                </Cta>
                <span className="text-sm font-semibold text-navy/60">
                  Atendimento pelo WhatsApp 💬
                </span>
              </div>

              <div className="mt-10 flex w-fit -rotate-1 flex-wrap items-center gap-5 rounded-3xl border-2 border-navy bg-cream px-5 py-4 sticker-soft">
                <div className="flex -space-x-3">
                  {[
                    "/images/depoimento-natalia.webp",
                    "/images/depoimento-kethelin-18.webp",
                    "/images/depoimento-suellen-21.webp",
                  ].map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="size-11 rounded-full border-2 border-navy object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-caramel-deep">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                    <span className="ml-1 text-sm font-bold text-navy">4,9</span>
                  </div>
                  <p className="text-xs font-medium text-navy/65">
                    Já adoçamos dezenas de primeiros anos de vida.
                  </p>
                </div>
              </div>
            </div>

            {/* COLAGEM */}
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="animate-float relative rounded-[2rem] border-2 border-navy bg-cream p-3 shadow-[10px_10px_0_0_var(--navy)]"
                style={{ ["--tilt" as string]: "2deg" }}
              >
                <img
                  src={heroMesversario.url}
                  alt="Bolo de mesversário artesanal decorado com flores e nome do bebê"
                  className="h-[380px] w-full rounded-[1.4rem] object-cover md:h-[460px]"
                />
              </div>
              <div className="animate-wiggle absolute -top-8 -right-4 flex size-24 flex-col items-center justify-center rounded-full border-2 border-navy bg-caramel text-navy shadow-[6px_6px_0_0_var(--navy)]">
                <span className="font-script text-3xl leading-none">4 Meses</span>
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  JÁ?!
                </span>
              </div>
              <div className="absolute -bottom-8 -left-4 w-56 -rotate-3 rounded-2xl border-2 border-navy bg-plum px-5 py-4 text-cream shadow-[6px_6px_0_0_var(--navy)]">
                <p className="font-script text-2xl leading-none">Álbum cheio!</p>
                <p className="mt-2 text-xs leading-relaxed text-cream/85">
                  O detalhe que faltava no álbum do seu bebê.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SELETOR DE MESES */}
        <section id="meses" className="border-y-2 border-navy bg-plum py-20 text-cream">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-caramel">Brinque com a gente</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Clique no mês do seu bebê e veja a inspiração 👇
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-3 sm:grid-cols-6">
              {MONTHS.map((m) => (
                <button
                  key={m.n}
                  onClick={() => setMes(m.n)}
                  aria-pressed={mes === m.n}
                  className={`rounded-2xl border-2 border-navy py-3 text-lg font-bold transition-all duration-200 hover:-translate-y-1 ${
                    mes === m.n
                      ? "bg-caramel text-navy shadow-[4px_4px_0_0_var(--navy)]"
                      : "bg-cream/90 text-navy/70"
                  }`}
                >
                  {m.n}º
                </button>
              ))}
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl items-center gap-8 rounded-[2rem] border-2 border-navy bg-cream p-6 text-navy shadow-[10px_10px_0_0_var(--navy)] md:grid-cols-2">
              <img
                key={atual.img}
                src={atual.img}
                alt={atual.alt}
                loading="lazy"
                className="h-64 w-full rounded-[1.5rem] border-2 border-navy object-cover md:h-72"
              />
              <div>
                <span className="text-4xl">{atual.emoji}</span>
                <h3 className="mt-3 text-3xl font-bold">
                  {atual.n}º mês · {atual.tema}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  Um tema pensado para o momento do seu bebê — e totalmente adaptável
                  às cores e à ideia da sua festinha.
                </p>
                <Cta
                  href={waMes(`${atual.n}º mês`)}
                  className="mt-6"
                  variant="plum"
                >
                  <MessageCircle className="size-4" /> Quero o bolo do {atual.n}º mês
                </Cta>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className="py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Por que comemorar todo mês?</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                O primeiro ano passa rápido demais para deixar qualquer mês passar em
                branco.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {BENEFITS.map((b) => (
                <article
                  key={b.title}
                  style={{ rotate: b.tilt }}
                  className="rounded-[2rem] border-2 border-navy bg-cream-deep p-8 text-center shadow-[8px_8px_0_0_var(--navy)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1"
                >
                  <span className="mx-auto flex size-16 items-center justify-center rounded-2xl border-2 border-navy bg-caramel text-navy">
                    <b.icon className="size-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA POLAROID */}
        <section id="temas" className="bg-cream-deep py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Mural de mesversários</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Do 1º ao 12º mês: inspirações reais feitas com afeto.
              </h2>
              <p className="mt-4 text-navy/70">
                Cenários fofos, acabamento impecável e o tamanho ideal para reunir a
                família e registrar esse marco.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-navy bg-caramel px-5 py-2.5 text-sm font-bold">
                <Camera className="size-4" /> O detalhe que faltava no álbum do seu
                bebê.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {POLAROIDS.map((p, i) => (
                <figure
                  key={p.img + i}
                  style={{ rotate: i % 2 === 0 ? "-2.5deg" : "2deg" }}
                  className="rounded-xl border-2 border-navy bg-cream p-3 pb-1 shadow-[8px_8px_0_0_var(--navy)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5"
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="h-64 w-full rounded-md object-cover"
                  />
                  <figcaption className="font-script py-3 text-center text-2xl text-plum">
                    {p.cap}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Cta href={WA_TEMA} className="px-8 py-4 text-base">
                <Sparkles className="size-5" /> Quero um tema assim
              </Cta>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Recadinhos das famílias</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Quem celebra com a gente recomenda:
              </h2>
              <p className="font-script mx-auto mt-6 max-w-2xl -rotate-1 rounded-3xl border-2 border-navy bg-caramel/50 px-6 py-5 text-3xl text-plum md:text-4xl">
                “Mais do que um bolo lindo nas fotos, todo mundo elogiou o sabor!”
              </p>
              <p className="mt-4 text-sm font-semibold text-navy/60">
                Já adoçamos dezenas de primeiros anos de vida.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={t.name}
                  style={{ rotate: i === 1 ? "1.5deg" : i === 0 ? "-1.5deg" : "1deg" }}
                  className="flex flex-col rounded-[2rem] border-2 border-navy bg-cream-deep p-6 shadow-[8px_8px_0_0_var(--navy)] transition-transform duration-300 hover:rotate-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={t.img}
                      alt={`Bolo entregue para ${t.name}`}
                      loading="lazy"
                      className="size-16 rounded-full border-2 border-navy object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-navy/60">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-1 text-caramel-deep">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">
                    “{t.quote}”
                  </blockquote>
                </figure>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Cta href={GOOGLE_REVIEWS} variant="light">
                Ver todas as avaliações no Google
              </Cta>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="border-y-2 border-navy bg-navy py-20 text-cream"
        >
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-caramel">Como funciona</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Encomendar o mesversário é simples e rápido:
              </h2>
            </div>

            <div className="mt-16 space-y-8">
              {STEPS.map((s, i) => (
                <article
                  key={s.n}
                  className={`flex flex-col items-center gap-6 rounded-[2rem] border-2 border-cream/30 bg-cream/5 p-8 sm:flex-row ${
                    i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <span className="font-display flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-caramel text-3xl font-bold text-navy">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {s.emoji} {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">
                      {s.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Dúvidas antes de encomendar
              </h2>
              <p className="mt-4 text-navy/70">
                Se ficar qualquer dúvida, é só chamar no WhatsApp — respondemos
                rapidinho.
              </p>
            </div>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <div
                  key={item.q}
                  className="rounded-3xl border-2 border-navy bg-cream-deep px-6 shadow-[6px_6px_0_0_var(--navy)]"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold"
                  >
                    {item.q}
                    <Plus
                      className={`size-5 shrink-0 text-plum transition-transform duration-300 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {open === i && (
                    <p className="pb-5 text-sm leading-relaxed text-navy/70">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="pb-24">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-navy bg-caramel p-10 text-center shadow-[12px_12px_0_0_var(--navy)] md:p-16">
              <span className="font-script text-3xl text-plum">psiu, mamãe!</span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Qual será o tema do próximo mês do seu bebê?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-navy/75">
                As vagas na agenda mensal são limitadas para garantir o acabamento
                impecável de cada encomenda.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Cta href={WA_ORCAMENTO} variant="plum" className="px-8 py-4 text-base">
                  <MessageCircle className="size-5" /> Fazer orçamento via WhatsApp
                </Cta>
                <span className="flex items-center gap-2 text-sm font-bold text-navy/75">
                  <Phone className="size-4" /> (11) 95085-8045
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-navy bg-plum py-10 text-cream">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4 text-sm text-cream/80">
          <span className="font-script text-3xl text-cream">Xuxuzinho</span>
          <p>Confeitaria artesanal · Tatuapé, São Paulo · Pedidos pelo WhatsApp</p>
          <span className="flex items-center gap-2">
            <Instagram className="size-4" /> @xuxuzinho
          </span>
        </div>
      </footer>

      <a
        href={WA_ORCAMENTO}
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full border-2 border-navy bg-caramel px-6 py-3.5 text-sm font-bold text-navy shadow-[5px_5px_0_0_var(--navy)] transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="size-4" /> Fazer orçamento
      </a>
    </div>
  );
}
