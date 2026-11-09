import { useState } from "react";
import { IMAGE_ASSETS, steps, capabilities, principles } from "./aboutUs/AboutDataUs";
import { ContactDialog } from "../pages/aboutUs/ContactDialog";
function Eyebrow({ children, light = false }) {
    return (
        <p
            className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-orange-300" : "text-orange-700"
                }`}
        >
            {children}
        </p>
    );
}
function SectionHeading({ eyebrow, title, description, light = false }) {
    return (
        <div className="max-w-3xl">
            {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
            <h2
                className={`text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-slate-950"
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-slate-300" : "text-slate-600"
                        }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
function Image({ asset, className = "", priority = false }) {
    return (
        <img
            src={asset.src}
            alt={asset.alt}
            className={className}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
        />
    );
}


export function About({ onSubmitLead }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);
    return (
        <>
            <main className="overflow-hidden bg-white font-sans text-slate-900">
                {/*  крупное фото + короткое позиционирование */}
                <section className="relative isolate min-h-[620px] bg-slate-950 text-white sm:min-h-[680px]">
                    <Image
                        asset={IMAGE_ASSETS.hero}
                        priority
                        className="absolute inset-0 -z-20 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />

                    <div className="mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-28 sm:min-h-[680px] sm:px-8 sm:pb-20 lg:px-12">
                        <div className="max-w-3xl">
                            <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                                <span className="h-px w-8 bg-orange-400" />
                                Мультипромпласт - Производство пластиковых изделий
                            </p>
                            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                                Технологии, из которых создаются решения
                            </h1>
                            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                                Изготовление изделий из пластмасс методом литья под давлением,
                                работа с пресс-формами и техническая проработка производственных задач.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={openDialog}
                                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-700 px-7 py-3 font-semibold text-white transition hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Обсудить проект <span aria-hidden="true" className="ml-3">↗</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-5 right-5 hidden text-right text-[10px] uppercase tracking-[0.2em] text-white/60 lg:block">
                        Инженерия · Материалы · Производство
                    </div>
                </section>
                {/* ABOUT: текст слева, фотография справа */}
                <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12 lg:py-28">
                    <div className="lg:col-span-6">
                        <Eyebrow>О компании</Eyebrow>
                        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                            Производство, основанное на инженерном подходе
                        </h2>
                        <div className="mt-7 space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                            <p className="font-medium text-slate-800">
                                Мультипромпласт — производственная компания, специализирующаяся
                                на изготовлении изделий из пластмасс методом литья под давлением
                                и решении задач, связанных с технологической оснасткой.
                            </p>
                            <p>
                                Мы помогаем переводить технические требования в готовые пластиковые
                                компоненты. При работе над проектом учитываем конструкцию изделия,
                                свойства материала, особенности пресс-формы и параметры процесса.
                            </p>
                            <p>
                                Для нас важно понимать назначение каждой детали и условия, в которых
                                она будет использоваться. Такой подход помогает рассматривать
                                производственную задачу целиком и выбирать обоснованный путь её реализации.
                            </p>
                            <p className="font-medium text-slate-800">
                                Наша задача — обеспечить надёжную производственную основу для проектов
                                заказчиков и выстраивать сотрудничество на понятных технических требованиях.
                            </p>
                        </div>
                    </div>
                    <div className="relative lg:col-span-6">
                        <div className="overflow-hidden rounded-2xl bg-slate-100">
                            <Image
                                asset={IMAGE_ASSETS.about}
                                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                            />
                        </div>
                        <div className="mt-3 flex items-start justify-between gap-4 text-xs leading-5 text-slate-500">
                            <span>Инженерный подход на каждом этапе проекта</span>
                        </div>
                    </div>
                </section >

                {/* CAPABILITIES: светлая техническая секция */}
                < section id="capabilities" className="scroll-mt-8 bg-slate-50 py-20 sm:py-24 lg:py-28" >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                            <div className="lg:col-span-7">
                                <SectionHeading
                                    eyebrow="Направления работы"
                                    title="Технологические возможности"
                                    description="Производство пластиковых изделий объединяет несколько взаимосвязанных процессов. В зависимости от задачи проект может включать отдельные этапы или комплексную техническую проработку."
                                />
                            </div>
                            <div className="lg:col-span-5 lg:pb-2">
                                <p className="border-l-2 border-orange-600 pl-5 text-sm leading-7 text-slate-600 sm:text-base">
                                    Конкретный состав работ, доступные материалы, типы изделий и параметры
                                    производства определяются после изучения технического задания.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {capabilities.map((item) => (
                                <article
                                    key={item.number}
                                    className="flex min-h-60 flex-col border-t border-slate-300 bg-white p-6 transition-colors hover:border-orange-600 sm:p-7"
                                >
                                    <span className="text-sm font-semibold tracking-widest text-orange-700">
                                        {item.number}
                                    </span>
                                    <h3 className="mt-9 text-xl font-semibold leading-snug tracking-tight text-slate-950">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                                </article>
                            ))}
                        </div>


                        <div className="mt-8 overflow-hidden rounded-2xl bg-slate-200">
                            <Image
                                asset={IMAGE_ASSETS.molding}
                                className="aspect-[16/7] max-h-[440px] w-full object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                    <SectionHeading
                        eyebrow="Этапы проекта"
                        title="От технической задачи — к готовому изделию"
                        description="Каждый проект начинается с понимания требований заказчика. Последовательность и состав этапов определяются особенностями конкретного изделия."
                    />

                    <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <article key={step.number} className="relative border-t border-slate-200 py-7 sm:py-8">
                                <span className="text-sm font-bold tracking-widest text-orange-700">{step.number}</span>
                                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
                                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                    {step.text}
                                </p>
                                {index !== steps.length - 1 && (
                                    <span aria-hidden="true" className="absolute right-0 top-8 hidden text-2xl text-slate-300 lg:block"></span>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12">
                        <div className="overflow-hidden rounded-2xl bg-slate-800 lg:col-span-7">
                            <Image asset={IMAGE_ASSETS.quality} className="aspect-[5/4] w-full object-cover" />
                        </div>
                        <div className="lg:col-span-5">
                            <SectionHeading
                                light
                                eyebrow="Подход к качеству"
                                title="Качество начинается задолго до выпуска изделия"
                                description="На характеристики готовой детали влияет вся цепочка производства: конструкция, материал, оснастка и корректно организованный технологический процесс."
                            />
                <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                    Поэтому мы уделяем внимание не только готовому изделию, но и исходным
                    требованиям, подготовке производства и согласованию параметров проекта.
                </p>
                <ul className="mt-8 space-y-4">
                    {[
                        "Технические требования и геометрия изделия",
                        "Соответствие материала назначению детали",
                        "Согласованные параметры производственного процесса",
                    ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
         </section >
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionHeading
                        eyebrow="Наш подход"
                        title="Профессиональное взаимодействие на каждом этапе"
                        description="Мы стремимся выстраивать сотрудничество, в котором техническая задача заказчика становится отправной точкой для поиска подходящего решения."
                    />
                </div>
                <div className="grid gap-0 sm:grid-cols-2 lg:col-span-7">
                    {principles.map((item) => (
                        <article key={item.number} className="border-t border-slate-200 py-6 sm:px-5 sm:py-7">
                            <span className="text-xs font-bold tracking-widest text-orange-700">{item.number}</span>
                            <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>

    {/* PRODUCT IMAGE: визуальная пауза и детали */ }
    <section className="bg-[#f3f4f2] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-12">
            <div className="lg:col-span-5">
                <Eyebrow>Пластиковые компоненты</Eyebrow>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
                    Форма, материал и назначение — в центре внимания
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                    Пластиковые детали могут существенно различаться по геометрии,
                    функциональности и условиям эксплуатации. При проработке проекта
                    важно учитывать не только внешний вид изделия, но и требования
                    к его работе в составе готового узла или конструкции.
                </p>
            </div>
            <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl bg-white">
                    <Image asset={IMAGE_ASSETS.parts} className="aspect-[16/10] w-full object-cover" />
                </div>
            </div>
        </div>
    </section>

    {/* CTA */ }
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-32">
        <Image
            asset={IMAGE_ASSETS.closing}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
                <Eyebrow light>Мультипромпласт</Eyebrow>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
                    Есть задача? Давайте обсудим её вместе.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                    Расскажите нам о будущем изделии, его назначении и технических требованиях.
                    Изучим исходные данные и обсудим возможные варианты реализации проекта.
                </p>
                <button
                    type="button"
                    onClick={openDialog}
                    className="mt-9 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-700 px-7 py-3 font-semibold text-white transition hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Обсудить проект <span aria-hidden="true" className="ml-3">↗</span>
                </button>
            </div>
        </div>
    </section>
      </main >

        <ContactDialog
            open={isDialogOpen}
            onClose={closeDialog}
            onSubmitLead={onSubmitLead}
        />
    </>
  );
}

export default About;