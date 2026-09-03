import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Sparkles,
  Cake,
  HeartHandshake,
  Camera,
  Star,
  ChevronDown,
  CalendarHeart,
  Phone,
} from "lucide-react";

const WA_TEMA =
  "https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Quero%20escolher%20o%20tema%20do%20pr%C3%B3ximo%20mesvers%C3%A1rio%20do%20meu%20beb%C3%AA.";
const WA_ORCAMENTO =
  "https://wa.me/5511950858045?text=Ol%C3%A1%2C%20Xuxuzinho!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20bolo%20de%20mesvers%C3%A1rio.";
const GOOGLE_REVIEWS = "https://share.google/1phk8kyYl4jfbbDd5";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Xuxuzinho — Bolos de Mesversário Personalizados em São Paulo" },
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
  { label: "Por que comemorar", href: "#beneficios" },
  { label: "Temas", href: "#temas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Temas exclusivos",
    text: "Da ideia mais simples ao cenário mais lúdico, criamos o bolo exatamente como você sonhou.",
  },
  {
    icon: Cake,
    title: "Sabor de festa de verdade",
    text: "Ingredientes selecionados, massa fofinha e recheios equilibrados que encantam adultos e crianças.",
  },
  {
    icon: HeartHandshake,
    title: "Zero dor de cabeça para os pais",
    text: "Você cuida da foto e do bebê; nós cuidamos do centro da mesa.",
  },
];

const GALLERY = [
  { img: "/images/bento-3.webp", label: "1º mês", alt: "Bentô cake decorado para o primeiro mês" },
  { img: "/images/bolo-1.webp", label: "3º mês", alt: "Bolo temático de mesversário decorado à mão" },
  { img: "/images/minibolo-2.webp", label: "5º mês", alt: "Mini bolo decorado para mesversário" },
  { img: "/images/depoimento-natalia.webp", label: "6º mês", alt: "Bolo de mesversário com frutas e detalhes dourados" },
  { img: "/images/depoimento-kethelin-18.webp", label: "8º mês", alt: "Bolo com dinossauro desenhado à mão" },
  { img: "/images/cupcake-3.webp", label: "10º mês", alt: "Cupcakes decorados para a mesa do mesversário" },
  { img: "/images/depoimento-suellen-21.webp", label: "11º mês", alt: "Bolo de bailarina com flores em chantilly" },
  { img: "/images/docinho-1.webp", label: "12º mês", alt: "Docinhos artesanais para completar a mesa" },
];

const STEPS = [
  {
    n: "1",
    title: "Escolha o tema e a data do mês",
    text: "Manda a inspiração, a cor favorita ou só a ideia solta — a gente transforma em bolo.",
  },
  {
    n: "2",
    title: "Defina o tamanho e os sabores favoritos",
    text: "Do bentô para a foto ao bolo que serve a família inteira, com os recheios que vocês amam.",
  },
  {
    n: "3",
    title: "Receba tudo pronto para cantar o parabéns",
    text: "Chega lindo, fresquinho e no horário combinado. É só acender a velinha e fotografar.",
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

function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300";
  const styles = {
    solid:
      "bg-caramel text-navy shadow-[0_14px_34px_-14px_var(--caramel-deep)] hover:bg-caramel-deep hover:-translate-y-0.5",
    outline: "border border-navy/20 text-navy hover:bg-navy hover:text-cream",
    light: "border border-cream/30 text-cream hover:bg-cream hover:text-navy",
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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-cream text-navy">
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
          <CtaButton href={WA_ORCAMENTO}>
            <MessageCircle className="size-4" /> Orçamento
          </CtaButton>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-14 pb-16 md:pt-20">
          <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-caramel/25 blur-3xl" />
          <div className="pointer-events-none absolute top-40 -right-20 size-80 rounded-full bg-plum/15 blur-3xl" />

          <div className="section-shell relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-plum/10 px-4 py-2 text-xs font-semibold tracking-wide text-plum">
                <CalendarHeart className="size-4" /> Especialistas em mesversário
              </span>
              <h1 className="mt-6 text-[2.7rem] leading-[1.05] font-bold tracking-tight md:text-6xl">
                Cada mês do seu bebê merece ser celebrado como uma{" "}
                <span className="font-script text-plum">grande conquista</span>.
              </h1>
              <p className="mt-6 max-w-lg text-base text-navy/70">
                Bolos decorados artesanais e personalizados para transformar cada
                mesversário em uma memória doce e inesquecível.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaButton href={WA_TEMA}>
                  <Sparkles className="size-4" /> Escolher o tema do próximo mês
                </CtaButton>
                <span className="text-sm text-navy/55">
                  Atendimento pelo WhatsApp 💬
                </span>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
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
                      className="size-11 rounded-full border-2 border-cream object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-caramel-deep">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                    <span className="ml-1 text-sm font-semibold text-navy">4,9</span>
                  </div>
                  <p className="text-xs text-navy/60">
                    Já adoçamos dezenas de primeiros anos de vida.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rotate-2 rounded-[2rem] bg-white/70 p-3 shadow-[0_40px_80px_-50px_rgba(23,35,63,0.6)] transition-transform duration-500 hover:rotate-0">
                <img
                  src="/images/depoimento-kethelin-18.webp"
                  alt="Bolo de mesversário decorado à mão com tema de dinossauro"
                  className="h-[420px] w-full rounded-[1.6rem] object-cover md:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 w-56 -rotate-3 rounded-2xl bg-plum p-4 text-cream shadow-xl md:-left-10">
                <p className="font-script text-2xl leading-none">1 mês!</p>
                <p className="mt-2 text-xs text-cream/80">
                  O detalhe que faltava no álbum do seu bebê.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section id="beneficios" className="bg-cream-deep py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Por que comemorar todo mês?</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                O primeiro ano passa rápido demais para deixar qualquer mês passar em
                branco.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {BENEFITS.map((b) => (
                <article
                  key={b.title}
                  className="rounded-3xl border border-navy/10 bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-40px_rgba(23,35,63,0.6)]"
                >
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-caramel/30 text-plum">
                    <b.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="temas" className="py-20">
          <div className="section-shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="eyebrow">Galeria de temas</p>
                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Do 1º ao 12º mês: inspirações reais feitas com afeto.
                </h2>
                <p className="mt-4 text-navy/70">
                  Cenários fofos, acabamento impecável e o tamanho ideal para reunir a
                  família e registrar esse marco.
                </p>
              </div>
              <p className="flex items-center gap-2 rounded-full bg-plum/10 px-5 py-3 text-sm font-medium text-plum">
                <Camera className="size-4" /> O detalhe que faltava no álbum do seu
                bebê.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY.map((g, i) => (
                <figure
                  key={g.img + i}
                  className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white/60"
                >
                  <img
                    src={g.img}
                    alt={g.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-plum">
                    {g.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton href={WA_TEMA}>
                <Sparkles className="size-4" /> Quero um tema assim
              </CtaButton>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="bg-cream-deep py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Prova social</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Quem celebra com a gente recomenda:
              </h2>
              <p className="font-script mt-6 text-3xl text-plum md:text-4xl">
                “Mais do que um bolo lindo nas fotos, todo mundo elogiou o sabor!”
              </p>
              <p className="mt-4 text-sm text-navy/60">
                Já adoçamos dezenas de primeiros anos de vida.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-cream"
                >
                  <img
                    src={t.img}
                    alt={`Bolo entregue para ${t.name}`}
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

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Como funciona</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Encomendar o mesversário é simples e rápido:
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <article
                  key={s.n}
                  className="relative rounded-3xl bg-navy p-8 text-cream"
                >
                  <span className="font-display absolute -top-5 left-8 flex size-12 items-center justify-center rounded-full bg-caramel text-xl font-bold text-navy">
                    {s.n}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">{s.text}</p>
                </article>
              ))}
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
              <p className="mt-4 text-navy/70">
                Se ficar qualquer dúvida, é só chamar no WhatsApp — respondemos
                rapidinho.
              </p>
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

        {/* CTA FINAL */}
        <section id="contato" className="py-20">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[2rem] bg-plum p-10 text-center text-cream md:p-16">
              <div className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-caramel/25 blur-3xl" />
              <h2 className="relative text-4xl font-bold md:text-5xl">
                Qual será o tema do próximo mês do seu bebê?
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-cream/80">
                As vagas na agenda mensal são limitadas para garantir o acabamento
                impecável de cada encomenda.
              </p>
              <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
                <CtaButton href={WA_ORCAMENTO}>
                  <MessageCircle className="size-4" /> Fazer orçamento via WhatsApp
                </CtaButton>
                <span className="flex items-center gap-2 text-sm text-cream/80">
                  <Phone className="size-4" /> (11) 95085-8045
                </span>
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

      <a
        href={WA_ORCAMENTO}
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3.5 text-sm font-semibold text-navy shadow-[0_16px_40px_-14px_var(--caramel-deep)] transition-all hover:-translate-y-0.5 hover:bg-caramel-deep"
      >
        <MessageCircle className="size-4" /> Fazer orçamento
      </a>
    </div>
  );
}
