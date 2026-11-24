import { useEffect, useRef, useState } from "react";
import { IMAGE_ASSETS } from "./aboutUs/AboutDataUs";
import { ContactDialog } from "../pages/aboutUs/ContactDialog";

/* ------------------------------------------------------------------ */
/*  Токены: navy #0b1b33 · ink #071426 · orange #c2410c · slate       */
/* ------------------------------------------------------------------ */

const CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const SECTION_Y = "py-14 sm:py-18 lg:py-24";

const GRID_BG =
    "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]";

/* ------------------------------------------------------------------ */
/*  Контент страницы. Тексты правятся только здесь.                   */
/* ------------------------------------------------------------------ */

// Ключевые факты внизу первого экрана
const FACTS = [
    { value: "Липецк", label: "собственное производство" },
    { value: "10+", label: "термопластавтоматов" },
    { value: "Любые объёмы", label: "от небольших партий до крупных серий" },
    { value: "Россия и Беларусь", label: "география поставок" },
];

// География поставок
const GEOGRAPHY = [
    ["Липецк", "Производство и отгрузка продукции."],
    ["Вся Россия", "Работаем с заказчиками из любых регионов."],
    ["Республика Беларусь", "Поставляем продукцию предприятиям и организациям."],
];

// Как мы работаем с задачами и объёмами
const SCOPE = [
    {
        title: "Малые и крупные заказчики",
        text: "Сотрудничаем с компаниями разных направлений и масштабов: от небольших заказчиков до крупных предприятий.",
    },
    {
        title: "Ваши чертежи или наши разработки",
        text: "Выполняем заказы по чертежам и техническим заданиям клиентов, а также выпускаем продукцию по собственным разработкам.",
    },
    {
        title: "Решение под задачу",
        text: "Учитываем объём заказа и особенности дальнейшего использования продукции, чтобы результат подходил именно вам.",
    },
];

const BRIEF = [
    "Чертёж или 3D-модель изделия",
    "Материал или требования к нему",
    "Планируемый объём выпуска",
    "Условия эксплуатации детали",
];

/* ------------------------------------------------------------------ */
/*  Анимация появления (уважает prefers-reduced-motion)               */
/* ------------------------------------------------------------------ */

function useInView({ immediate = false } = {}) {
    const ref = useRef(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const node = ref.current;
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        if (reduce || !("IntersectionObserver" in window)) {
            setSeen(true);
            return undefined;
        }
        if (immediate) {
            const id = requestAnimationFrame(() => setSeen(true));
            return () => cancelAnimationFrame(id);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
        );
        if (node) observer.observe(node);
        return () => observer.disconnect();
    }, [immediate]);

    return [ref, seen];
}

function Reveal({ children, delay = 0, immediate = false, as: Tag = "div", className = "" }) {
    const [ref, seen] = useInView({ immediate });
    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${seen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                } ${className}`}
        >
            {children}
        </Tag>
    );
}

/* ------------------------------------------------------------------ */
/*  Мелкие компоненты                                                  */
/* ------------------------------------------------------------------ */

function H2({ id, children, light = false }) {
    return (
        <h2
            id={id}
            className={`text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-[1.75rem] lg:text-[2rem] ${light ? "text-white" : "text-[#0b1b33]"
                }`}
        >
            {children}
        </h2>
    );
}

function CtaButton({ onClick, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-md bg-orange-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
        >
            {children}
            <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5 fill-none stroke-current transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                strokeWidth="2"
            >
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

function Check() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="mt-1 h-4 w-4 shrink-0 fill-none stroke-blue-700"
            strokeWidth="2"
        >
            <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Страница                                                           */
/* ------------------------------------------------------------------ */

export function About() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const lastTrigger = useRef(null);
    const [heroRef, heroSeen] = useInView({ immediate: true });

    const openDialog = (event) => {
        lastTrigger.current = event?.currentTarget ?? null;
        setIsDialogOpen(true);
    };

    // Возвращаем фокус на кнопку, открывшую окно (WCAG 2.4.3)
    const closeDialog = () => {
        setIsDialogOpen(false);
        requestAnimationFrame(() => lastTrigger.current?.focus());
    };

    return (
        <>
            <a
                href="#about-main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#0b1b33]"
            >
                Перейти к содержимому
            </a>

            <main
                id="about-main"
                className="overflow-x-clip bg-white font-sans text-sm leading-6 text-slate-900 antialiased sm:text-[15px]"
            >
                {/* ============ 1. HERO + факты ============ */}
                <section
                    ref={heroRef}
                    aria-labelledby="hero-title"
                    className="relative isolate overflow-hidden bg-[#071426] text-white"
                >
                    <img
                        src={IMAGE_ASSETS.hero.src}
                        alt=""
                        aria-hidden="true"
                        width={IMAGE_ASSETS.hero.width}
                        height={IMAGE_ASSETS.hero.height}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[2200ms] ease-out motion-reduce:transition-none ${heroSeen ? "scale-100" : "scale-[1.06]"
                            }`}
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-[#0b2a5b]/45"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071426] via-[#071426]/40 to-transparent"
                    />

                    <div className={`${CONTAINER} flex min-h-[520px] flex-col justify-end pb-8 pt-28 sm:min-h-[560px] sm:pb-10`}>
                        <div className="max-w-2xl">
                            <Reveal immediate>
                                <p className="mb-4 text-[13px] font-semibold tracking-wide text-orange-300">
                                    О компании
                                </p>
                            </Reveal>
                            <Reveal immediate delay={100}>
                                <h1
                                    id="hero-title"
                                    className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]"
                                >
                                    Мультипромпласт — производство пластиковых изделий
                                </h1>
                            </Reveal>
                            <Reveal immediate delay={200}>
                                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-200">
                                    Производственная компания из Липецка. Выпускаем собственную продукцию
                                    и выполняем заказы по индивидуальным требованиям клиентов.
                                </p>
                            </Reveal>
                            <Reveal immediate delay={300} className="mt-7">
                                <CtaButton onClick={openDialog}>Обсудить проект</CtaButton>
                            </Reveal>
                        </div>

                        <Reveal
                            immediate
                            delay={450}
                            as="dl"
                            className="mt-12 grid grid-cols-2 border-t border-white/20 lg:grid-cols-4"
                        >
                            {FACTS.map((fact, i) => (
                                <div
                                    key={fact.label}
                                    className={`flex flex-col-reverse justify-end py-4 pr-4 lg:px-5 lg:first:pl-0 ${i > 0 ? "lg:border-l lg:border-white/15" : ""
                                        }`}
                                >
                                    <dt className="mt-0.5 text-[13px] leading-5 text-slate-300">{fact.label}</dt>
                                    <dd className="text-lg font-semibold leading-6 text-white sm:text-xl">{fact.value}</dd>
                                </div>
                            ))}
                        </Reveal>
                    </div>
                </section>

                {/* ============ 2. СОБСТВЕННОЕ ПРОИЗВОДСТВО + ГЕОГРАФИЯ ============ */}
                <section aria-labelledby="about-title" className={`${CONTAINER} ${SECTION_Y}`}>
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                        <Reveal>
                            <H2 id="about-title">Собственное производство, а значит — своя организация работы</H2>
                            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-700">
                                Все основные процессы идут на наших мощностях. Мы сами планируем работу
                                над заказом и учитываем требования каждого проекта.
                            </p>
                            <p className="mt-4 max-w-lg leading-7 text-slate-600">
                                Парк оборудования насчитывает более 10 термопластавтоматов. Это позволяет
                                работать с разными типами изделий и брать заказы любого объёма: от небольших
                                партий до крупных серий.
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <h3 className="border-b border-slate-200 pb-3 text-base font-semibold text-[#0b1b33]">
                                География поставок
                            </h3>
                            <ul className="divide-y divide-slate-200">
                                {GEOGRAPHY.map(([title, text]) => (
                                    <li key={title} className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:gap-6">
                                        <span className="font-semibold text-[#0b1b33] sm:w-52 sm:shrink-0">{title}</span>
                                        <span className="text-slate-600">{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-[13px] leading-6 text-slate-500">
                                Поставляем продукцию для предприятий и организаций разных отраслей.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ============ 3. ЗАДАЧИ И ОБЪЁМЫ + долгосрочное сотрудничество ============ */}
                <section
                    aria-labelledby="scope-title"
                    className="relative isolate overflow-hidden bg-[#0b1b33] text-white"
                >
                    <div aria-hidden="true" className={`absolute inset-0 -z-10 ${GRID_BG}`} />
                    <div className={`${CONTAINER} ${SECTION_Y}`}>
                        <Reveal className="max-w-2xl">
                            <H2 light id="scope-title">Работаем с разными задачами и объёмами</H2>
                            <p className="mt-4 text-slate-300">
                                Нам важно не просто выполнить заказ, а найти подходящее решение с учётом
                                задачи, объёма и особенностей использования продукции.
                            </p>
                        </Reveal>

                        <ul className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-3">
                            {SCOPE.map((item, i) => (
                                <Reveal as="li" key={item.title} delay={i * 110} className="relative py-5">
                                    <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/15" />
                                    <span aria-hidden="true" className="absolute left-0 top-0 h-px w-10 bg-orange-500" />
                                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-[13px] leading-6 text-slate-300 sm:text-sm">{item.text}</p>
                                </Reveal>
                            ))}
                        </ul>

                        <Reveal className="mt-8 grid gap-3 border-t border-white/15 pt-8 lg:grid-cols-2 lg:gap-16">
                            <h3 className="text-base font-semibold text-white">Ориентир на долгосрочное сотрудничество</h3>
                            <p className="max-w-lg leading-7 text-slate-300">
                                Мы ценим доверие клиентов и строим отношения на взаимопонимании. Сотрудничество
                                должно быть удобным и понятным на каждом этапе: от обсуждения задачи
                                до получения готовой продукции.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* ============ 4. CTA ============ */}
                <section aria-labelledby="cta-title" className={`${CONTAINER} ${SECTION_Y}`}>
                    <Reveal className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <H2 id="cta-title">Расскажите о вашем изделии</H2>
                            <p className="mt-4 max-w-lg text-lg leading-8 text-slate-700">
                                Изучим исходные данные и предложим варианты реализации проекта.
                            </p>
                            <div className="mt-7">
                                <CtaButton onClick={openDialog}>Обсудить проект</CtaButton>
                            </div>
                        </div>

                        <div className="border-l-2 border-orange-600 pl-6">
                            <p className="font-semibold text-[#0b1b33]">Что поможет оценить задачу</p>
                            <ul className="mt-4 space-y-3">
                                {BRIEF.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-slate-700">
                                        <Check />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 text-[13px] text-slate-500">
                                Неполные данные не помеха: начнём с того, что есть.
                            </p>
                        </div>
                    </Reveal>
                </section>
            </main>

            <ContactDialog open={isDialogOpen} onClose={closeDialog} />
        </>
    );
}
