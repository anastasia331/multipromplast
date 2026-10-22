import formVideo from '../../../assets/formVideo.mp4?url';

export default function FeedbackForm() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-10 overflow-hidden">
            {/* Фоновое видео */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={formVideo} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>

            {/* Затемняющий оверлей для читаемости текста и стекла */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Заголовок секции */}
            <div className="relative z-10 text-center text-white mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Контакты</h2>
                <p className="mt-2 text-base sm:text-lg text-white/80">Свяжитесь с нами любым удобным способом</p>
            </div>

            {/* Карточка формы с эффектом матового стекла */}
            <div className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                    Отправить сообщение
                </h3>

                <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
                    {/* Поле: Имя */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-white/90">Имя</label>
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:ring-2 focus:ring-white/30 focus:bg-black/40"
                        />
                    </div>

                    {/* Поле: Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-white/90">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.by"
                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:ring-2 focus:ring-white/30 focus:bg-black/40"
                        />
                    </div>

                    {/* Поле: Телефон */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-white/90">Телефон</label>
                        <input
                            type="tel"
                            placeholder="+375 (__) ___-__-__"
                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:ring-2 focus:ring-white/30 focus:bg-black/40"
                        />
                    </div>

                    {/* Поле: Сообщение */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-white/90">Сообщение</label>
                        <textarea
                            rows="4"
                            placeholder="Опишите ваш проект..."
                            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 outline-none resize-none transition-all duration-200 focus:border-white focus:ring-2 focus:ring-white/30 focus:bg-black/40"
                        />
                    </div>

                    {/* Кнопка отправки */}
                    <button
                        type="submit"
                        className="w-full mt-3 py-3.5 px-6 rounded-xl bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    );
}