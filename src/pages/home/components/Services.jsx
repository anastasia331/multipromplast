import { motion } from "framer-motion";
import { Link } from "react-router";
import {
    LuPencil,
    LuClock,
    LuBriefcase,
    LuSettings,
    LuWrench,
    LuPackage,
    LuArrowRight,
    LuCheck
} from "react-icons/lu";

export default function Services() {
    const services = [
        {
            id: 1,
            icon: LuPencil,
            title: "Проектирование и 3D-моделирование",
            description: "Разработка CAD/CAM моделей с нуля по вашим чертежам, наброскам или физическим образцам.",
            tag: "CAD / CAM",
            spec: "Точность до 0.01 мм"
        },
        {
            id: 2,
            icon: LuClock,
            title: "Изготовление пресс-форм и оснастки",
            description: "Проектирование и фрезеровка надежных пресс-форм из высокопрочной стали для многотиражного литья.",
            tag: "Пресс-формы",
            spec: "Ресурс от 500 000 смыканий"
        },
        {
            id: 3,
            icon: LuBriefcase,
            title: "Литье пластиков под давлением",
            description: "Серийное производство сложных пластиковых деталей на современных ТПА с автоматической подачей.",
            tag: "Серийное производство",
            spec: "Партии от 1 000 шт."
        },
        {
            id: 4,
            icon: LuSettings,
            title: "Вакуумная формовка и экструзия",
            description: "Изготовление крупногабаритных корпусов, поддонов и защитных кожухов из термопластичных листов.",
            tag: "Крупногабарит",
            spec: "Толщина листа до 10 мм"
        },
        {
            id: 5,
            icon: LuWrench,
            title: "Механическая обработка и ЧПУ-фрезеровка",
            description: "Высокоточная доработка деталей, гравировка, сверление и подгонка сложных технологических пазов.",
            tag: "ЧПУ обработка",
            spec: "Допуски по ISO 2768"
        },
        {
            id: 6,
            icon: LuPackage,
            title: "Сборка, брендирование и упаковка",
            description: "Финишная сборка узлов, нанесенение логотипов (тампопечать, лазер) и индивидуальная фасовка.",
            tag: "Финишный цикл",
            spec: "Готово к продаже"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="py-24 bg-slate-50/80 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
                <div className="absolute top-12 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-12 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                        Полный производственный цикл
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
                        От идеи до серийного выпуска пластиковых изделий
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
                        Реализуем инженерные задачи любой сложности — от разовых прототипов до крупносерийных партий с гарантией строгой точности геометрии.
                    </p>
                </div>

                {/* Первый ряд: 4 карточки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.slice(0, 4).map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-13 h-13 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                                            <Icon className="w-6 h-6 transition-transform duration-300" />
                                        </div>
                                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                            {service.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                                    <LuCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>{service.spec}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Второй ряд: 2 карточки по центру */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {services.slice(4, 6).map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                custom={index + 4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-13 h-13 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                                            <Icon className="w-6 h-6 transition-transform duration-300" />
                                        </div>
                                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                            {service.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                                    <LuCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>{service.spec}</span>
                                </div>
                            </motion.div>
                        );
                    })}

                    <div className="hidden lg:block lg:col-span-1"></div>
                </div>

                <div className="mt-14 text-center">
                    <Link
                        to="/calculate"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-medium text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                    >
                        <span>Рассчитать стоимость по вашему чертежу</span>
                        <LuArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                </div>

            </div>
        </section>
    );
}