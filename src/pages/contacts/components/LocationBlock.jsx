export default function LocationBlock() {
    return (
        <section className="relative w-full py-16 px-6 sm:px-10 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">

                {/* Блок с адресом и контактами */}
                <div className="w-full md:w-1/3 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Наше производство</h3>

                        <div className="space-y-4 text-white/90">
                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Адрес</p>
                                <p className="text-lg font-medium mt-1">г. Минск, ул. Примерная, д. 123</p>
                            </div>

                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Время работы</p>
                                <p className="text-base mt-1">Пн — Пт: с 9:00 до 18:00</p>
                            </div>

                            <div>
                                <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Телефон / Email</p>
                                <p className="text-base mt-1">+375 (29) 000-00-00</p>
                                <p className="text-base">info@example.by</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-sm text-white/60">
                            🚗 Доступен удобный подъезд для большегрузного транспорта
                        </p>
                    </div>
                </div>

                {/* Блок с картой */}
                <div className="w-full md:w-2/3 min-h-[350px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative">
                    <iframe
                        title="Карта производства"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A...&amp;source=constructor" // Твоя ссылка на карту
                        width="100%"
                        height="100%"
                        className="absolute inset-0 w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}