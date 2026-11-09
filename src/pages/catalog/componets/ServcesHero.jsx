// import { motion } from 'framer-motion';
// import auto from '../../../assets/auto.jpg';
// import korpus from '../../../assets/korpus.jpg';
// import strou from '../../../assets/strou.jpg';
// import emcost from '../../../assets/emcost.jpg';
// import fon7 from '../../../assets/fon7.jpg';

export default function ServicesHero() {
    const items = [
        {
            // img: auto,
            title: "Автомобильные Компоненты",
            desc: "Детали интерьера и экстерьера авто, баки, клипсы и защитные элементы.",
            reverse: false
        },
        {
            // img: emcost,
            title: "Промышленная тара и емкости",
            desc: "Прочные емкости, крупногабаритные ящики, складские лотки, пластиковые паллеты и поддоны для хранения и транспортировки продукции.",
            reverse: true
        },
        {
            // img: korpus,
            title: "Корпуса и детали электроники",
            desc: "Защитные корпуса для датчиков, контроллеров, пультов управления и других приборов.",
            reverse: false
        },
        {
            // img: strou,
            title: "Строительно-отделочные материалы",
            desc: "Пластиковые профили, элементы крепежа, защитные накладки и аксессуары для строительства.",
            reverse: true
        }
    ];

    return (
        <section className="relative py-24 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${fon7})` }}>

            {/* Темный оверлей с размытием для фона */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[3px]"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

                {/* Заголовок */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">
                        Категории готовой продукции
                    </h2>
                    <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Широкий ассортимент пластиковых изделий для промышленности, бизнеса и бытового использования
                    </p>
                </div>

                {/* Список карточек */}
                <div className="flex flex-col gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`group relative flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 gap-6 md:gap-8 border border-white/20 overflow-hidden transition-all duration-300`}
                        >
                            {/* Контейнер картинки */}
                            <div className="relative w-full md:w-1/2 aspect-[4/3] p-3">

                                {/* ТОНКАЯ ЧЕРНАЯ ЛИНИЯ СВЕРХУ 
                    (на ПК — выдвигается при наведении, на мобилках — прорисовывается при скролле через whileInView) */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                                    className="absolute -top-1 left-0 right-4 h-[1.5px] bg-slate-900/80 origin-left z-20 pointer-events-none md:scale-x-0 md:group-hover:scale-x-100 md:transition-transform md:duration-700 md:ease-out"
                                ></motion.div>

                                {/* ТОНКАЯ ЧЕРНАЯ ЛИНИЯ СЛЕВА 
                    (на ПК — выдвигается при наведении, на мобилках — прорисовывается при скролле через whileInView) */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                                    className="absolute top-0 -left-1 bottom-4 w-[1.5px] bg-slate-900/80 origin-top z-20 pointer-events-none md:scale-y-0 md:group-hover:scale-y-100 md:transition-transform md:duration-700 md:ease-out"
                                ></motion.div>

                                {/* Сама картинка */}
                                <div className="w-full h-full overflow-hidden rounded-2xl shadow-md relative">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>
                            </div>

                            {/* Текстовый контент */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
                                    {item.desc}
                                </p>
                                <a href="#" className="inline-flex items-center text-blue-600 font-semibold transition-colors group/link">
                                    <span>Learn more</span>
                                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}