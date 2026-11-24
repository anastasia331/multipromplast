
import { useCallback, useId, useState, useRef } from 'react';
import { trackMetrikaGoal } from '../../../../utils/metrika';
import ContactBackground from './ContactBackground';
import ContactFormFields from './ContactFormFields';
import ConsentField from './ConsentField';
import { validateContactForm } from './validation';

import FormStatusModal from '../../../../components/FormStatusModal';

const INITIAL_FORM_DATA = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

// Адрес API задаётся в .env
const API_URL = import.meta.env.VITE_CONTACT_API_URL;

export default function FeedbackForm() {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formStarted = useRef(false);
    const [modal, setModal] = useState({
        isOpen: false,
        status: '',
    });

    const nameId = useId();
    const emailId = useId();
    const phoneId = useId();
    const messageId = useId();
    const consentId = useId();

    const ids = {
        name: nameId,
        email: emailId,
        phone: phoneId,
        message: messageId,
        consent: consentId,
    };



    // Изменение полей
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (!formStarted.current) {
            trackMetrikaGoal('form_start');
            formStarted.current = true;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    // Проверка согласия
    const handleConsentChange = (event) => {
        const checked = event.target.checked;

        setAgreed(checked);

        setErrors((prev) => ({
            ...prev,
            consent: '',
        }));
    };

    // Отправка формы
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) return;

        const validationErrors = validateContactForm(
            formData,
            agreed
        );

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            const firstInvalidField = [
                'name',
                'email',
                'phone',
                'message',
                'consent',
            ].find((field) => validationErrors[field]);

            document.getElementById(ids[firstInvalidField])?.focus();
            return;
        }

        if (!API_URL) {
            setModal({
                isOpen: true,
                status: 'configuration',
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    phone: formData.phone.trim(),
                    message: formData.message.trim(),
                    consent: agreed,
                }),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }
            trackMetrikaGoal('form_success');

            setModal({
                isOpen: true,
                status: 'success',
            });

            setFormData(INITIAL_FORM_DATA);
            setAgreed(false);
            setErrors({});
        } catch (error) {
            console.error('Contact form error:', error);

            setModal({
                isOpen: true,
                status: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = useCallback(() => {
        setModal({
            isOpen: false,
            status: '',
        });
    }, []);

    return (
        <section
            aria-labelledby="contacts-title"
            className="
                relative isolate
                flex min-h-[calc(100svh-80px)]
                w-full items-center justify-center
                overflow-hidden
                px-4 py-8
                sm:px-6 sm:py-10
                lg:py-12
            "
        >
            <ContactBackground />

            <div className="relative z-10 w-full max-w-[440px]">

                {/* Заголовок */}
                <div className="mb-5 text-center text-white">
                    <span className="
                        text-[11px] sm:text-xs
                        font-semibold uppercase
                        tracking-[0.25em]
                        text-orange-300
                    ">
                        Мультипромпласт
                    </span>

                    <h2
                        id="contacts-title"
                        className="
                            mt-2 text-3xl sm:text-4xl
                            font-bold tracking-tight
                        "
                    >
                        Контакты
                    </h2>

                    <p className="
                        mt-2 text-sm sm:text-base
                        leading-relaxed text-white/75
                    ">
                        Давайте обсудим возможности сотрудничества.
                    </p>
                </div>

                {/* Карточка */}
                <div className="
                    rounded-2xl
                    border border-white/20
                    bg-slate-950/40
                    p-5 sm:p-7
                    shadow-2xl
                    backdrop-blur-2xl
                ">
                    <div className="mb-5">
                        <h3 className="
                            text-xl sm:text-2xl
                            font-semibold text-white
                        ">
                            Отправить сообщение
                        </h3>

                        <p className="
                            mt-1.5 text-xs sm:text-sm
                            text-white/60
                        ">
                            Заполните форму, и мы свяжемся с вами.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        aria-busy={isSubmitting}
                        className="flex flex-col gap-4"
                    >
                        {Object.keys(errors).length > 0 && (
                            <p
                                role="alert"
                                aria-live="assertive"
                                className="
                                    rounded-lg
                                    border border-red-400/30
                                    bg-red-500/10
                                    px-3 py-2
                                    text-xs text-red-200
                                "
                            >
                                Проверьте заполнение формы.
                                Исправьте отмеченные поля.
                            </p>
                        )}

                        <ContactFormFields
                            formData={formData}
                            errors={errors}
                            ids={ids}
                            onChange={handleChange}
                        />

                        <ConsentField
                            id={consentId}
                            checked={agreed}
                            error={errors.consent}
                            onChange={handleConsentChange}
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                                mt-1 flex min-h-12 w-full
                                items-center justify-center
                                rounded-xl
                                bg-white px-5 py-3
                                text-sm font-semibold
                                text-slate-900
                                shadow-lg
                                transition-all duration-300
                                hover:bg-orange-500 hover:text-white
                                active:scale-[0.98]
                                disabled:cursor-wait
                                disabled:opacity-60
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-orange-400
                                focus-visible:ring-offset-2
                                focus-visible:ring-offset-slate-900
                            "
                        >
                            {isSubmitting
                                ? 'Отправка...'
                                : 'Отправить сообщение'
                            }
                        </button>

                        <p className="
                            text-center text-[10px] sm:text-xs
                            text-white/40
                        ">
                            Ваши данные используются только
                            для обработки обращения.
                        </p>
                    </form>
                </div>
            </div>

            <FormStatusModal
                isOpen={modal.isOpen}
                status={modal.status}
                onClose={handleCloseModal}
            />
        </section>
    );
}
