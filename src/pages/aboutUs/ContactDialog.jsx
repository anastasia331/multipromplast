import { useEffect, useRef, memo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Схема валидации с помощью Zod
const contactSchema = z.object({
    name: z.string().min(1, "Пожалуйста, введите ваше имя"),
    contact: z.string().min(1, "Пожалуйста, укажите телефон или e-mail"),
    message: z.string().optional(),
    privacy_consent: z.literal(true, {
        errorMap: () => ({ message: "Необходимо согласие на обработку персональных данных" }),
    }),
});

// Вспомогательный компонент для заголовков (Eyebrow)
const Eyebrow = ({ children, light = false }) => (
    <span className={`block text-xs font-bold uppercase tracking-wider mb-2 ${light ? 'text-indigo-400' : 'text-orange-700'}`}>
        {children}
    </span>
);

export const ContactDialog = memo(({ open, onClose, onSubmitLead }) => {
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);

    // Инициализация React Hook Form с Zod-резолвером
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            contact: "",
            message: "",
            privacy_consent: false,
        },
    });

    const handleClose = () => {
        reset();
        onClose();
    };

    // Управление фокусом, доступностью и закрытием по клавише Escape
    useEffect(() => {
        if (!open) return undefined;

        const previousFocus = document.activeElement;
        closeButtonRef.current?.focus();

        const onKeyDown = (event) => {
            if (event.key === "Escape") handleClose();
            if (event.key !== "Tab") return;

            const focusable = dialogRef.current?.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable?.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            previousFocus?.focus?.();
        };
    }, [open]);

    if (!open) return null;

    // Обработчик отправки формы
    const onFormSubmit = async (data) => {
        try {
            // Передаем валидированные данные наружу (в CRM / серверный экшен)
            await onSubmitLead?.(data);
            reset();
            handleClose();
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) handleClose();
            }}
        >
            <section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-dialog-title"
                aria-describedby="contact-dialog-description"
                className="relative my-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={handleClose}
                    aria-label="Закрыть окно"
                    className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                    ×
                </button>

                <Eyebrow>Связаться с нами</Eyebrow>
                <h2 id="contact-dialog-title" className="pr-10 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    Обсудим ваш проект
                </h2>
                <p id="contact-dialog-description" className="mt-3 text-sm leading-6 text-slate-600">
                    Оставьте контактные данные и кратко опишите задачу. Поля со звёздочкой обязательны.
                </p>

                <form onSubmit={handleSubmit(onFormSubmit)} className="mt-7 space-y-4" noValidate>
                    <div>
                        <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-slate-800">
                            Ваше имя <span aria-hidden="true">*</span>
                        </label>
                        <input
                            id="lead-name"
                            {...register("name")}
                            autoComplete="name"
                            className={`w-full rounded-xl border px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-2 ${errors.name
                                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    : "border-slate-300 focus:border-orange-600 focus:ring-orange-600/20"
                                }`}
                            placeholder="Как к вам обращаться"
                        />
                        {errors.name && (
                            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lead-contact" className="mb-1.5 block text-sm font-medium text-slate-800">
                            Телефон или e-mail <span aria-hidden="true">*</span>
                        </label>
                        <input
                            id="lead-contact"
                            {...register("contact")}
                            autoComplete="email"
                            className={`w-full rounded-xl border px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:ring-2 ${errors.contact
                                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    : "border-slate-300 focus:border-orange-600 focus:ring-orange-600/20"
                                }`}
                            placeholder="+7 ... или name@company.ru"
                        />
                        {errors.contact && (
                            <p className="mt-1 text-xs text-red-600">{errors.contact.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lead-message" className="mb-1.5 block text-sm font-medium text-slate-800">
                            О проекте
                        </label>
                        <textarea
                            id="lead-message"
                            {...register("message")}
                            rows={4}
                            className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20"
                            placeholder="Что требуется изготовить? Есть ли чертёж или техническое задание?"
                        />
                    </div>

                    <div>
                        <label className="flex items-start gap-3 text-sm leading-5 text-slate-600">
                            <input
                                type="checkbox"
                                {...register("privacy_consent")}
                                className="mt-1 h-4 w-4 shrink-0 accent-orange-700"
                            />
                            <span>
                                Согласен(на) на обработку персональных данных в соответствии с{" "}
                                <a href="/privacy" className="font-medium text-orange-800 underline underline-offset-2 hover:text-orange-950">
                                    политикой конфиденциальности
                                </a>.
                            </span>
                        </label>
                        {errors.privacy_consent && (
                            <p className="mt-1 text-xs text-red-600">{errors.privacy_consent.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-700 px-6 py-3 font-semibold text-white transition hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 disabled:cursor-wait disabled:opacity-60"
                    >
                        {isSubmitting ? "Отправляем…" : "Отправить заявку"}
                    </button>
                </form>
            </section>
        </div>
    );
});

ContactDialog.displayName = "ContactDialog";