import { useId, useState } from 'react';
import formVideo from '../../../assets/formVideo.mp4?url';
import FormUnavailableModal from '../../../components/FormUnavailableModal';

const INITIAL_FORM_DATA = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

export default function FeedbackForm() {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [agreed, setAgreed] = useState(false);
    const [isUnavailableOpen, setIsUnavailableOpen] = useState(false);

    const nameId = useId();
    const emailId = useId();
    const phoneId = useId();
    const messageId = useId();
    const consentId = useId();

    // Открываем предупреждение сразу при попытке начать ввод или взаимодействовать с формой
    const handleFormInteraction = (event) => {
        // Если модалка уже открыта — ничего не делаем
        if (isUnavailableOpen) return;

        // Разрешаем клик по ссылке на политику конфиденциальности, чтобы человек мог её открыть
        if (event.target.closest('a')) return;

        // Триггерим модалку при клике/фокусе на любом поле ввода, чекбоксе или кнопке
        if (event.target.closest('input, textarea, button')) {
            event.preventDefault();
            setIsUnavailableOpen(true);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsUnavailableOpen(true);
    };

    const handleCloseModal = () => {
        setIsUnavailableOpen(false);
    };

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 sm:p-10">
            {/* Фоновое видео */}
            <video
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            >
                <source src={formVideo} type="video/mp4" />
            </video>

            {/* Затемняющий оверлей для читаемости текста */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-black/50" />

            {/* Заголовок секции */}
            <div className="relative z-10 mb-6 text-center text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Контакты
                </h2>
                <p className="mt-2 text-base text-white/80 sm:text-lg">
                    Свяжитесь с нами любым удобным способом
                </p>
            </div>

            {/* Карточка формы с эффектом матового стекла */}
            <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-white/10 sm:p-8">
                <h3 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
                    Отправить сообщение
                </h3>

                <form
                    onSubmit={handleSubmit}
                    onPointerDownCapture={handleFormInteraction}
                    className="flex flex-col gap-4 text-left"
                >
                    {/* Имя */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor={nameId} className="text-sm font-medium text-white/90">
                            Имя
                        </label>
                        <input
                            id={nameId}
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:bg-black/40 focus:ring-2 focus:ring-white/30"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor={emailId} className="text-sm font-medium text-white/90">
                            Email
                        </label>
                        <input
                            id={emailId}
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="email@example.ru"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:bg-black/40 focus:ring-2 focus:ring-white/30"
                        />
                    </div>

                    {/* Телефон */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor={phoneId} className="text-sm font-medium text-white/90">
                            Телефон
                        </label>
                        <input
                            id={phoneId}
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+7 (___) ___-__-__"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:bg-black/40 focus:ring-2 focus:ring-white/30"
                        />
                    </div>

                    {/* Сообщение */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor={messageId} className="text-sm font-medium text-white/90">
                            Сообщение
                        </label>
                        <textarea
                            id={messageId}
                            name="message"
                            rows={4}
                            placeholder="Опишите ваш проект..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-white focus:bg-black/40 focus:ring-2 focus:ring-white/30"
                        />
                    </div>

                    {/* Согласие на обработку персональных данных */}
                    <div className="flex items-start gap-3 pt-1">
                        <input
                            id={consentId}
                            type="checkbox"
                            checked={agreed}
                            onChange={(event) => setAgreed(event.target.checked)}
                            className="mt-1 h-4 w-4 cursor-pointer rounded border-white/30 bg-black/30 accent-white focus:ring-white/30"
                        />
                        <label htmlFor={consentId} className="cursor-pointer text-xs leading-relaxed text-white/80">
                            Я согласен(-на) на{' '}
                            <a
                                href="/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-white underline hover:text-white/80"
                            >
                                обработку персональных данных
                            </a>
                            . <span className="text-white">*</span>
                        </label>
                    </div>

                    {/* Кнопка отправки */}
                    <button
                        type="submit"
                        disabled={!agreed}
                        className="mt-2 w-full cursor-pointer rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-gray-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-white"
                    >
                        Отправить
                    </button>
                </form>
            </div>

            {/* Модальное окно о недоступности формы */}
            <FormUnavailableModal
                isOpen={isUnavailableOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}