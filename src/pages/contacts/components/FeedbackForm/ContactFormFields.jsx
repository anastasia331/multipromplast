
function InputField({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    autoComplete,
    value,
    error,
    onChange,
}) {
    const errorId = `${id}-error`;

    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-sm font-medium text-white/90"
            >
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={name !== 'phone'}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={`
                    min-h-11 w-full rounded-xl
                    border bg-white/[0.08]
                    px-4 py-2.5 text-sm text-white
                    placeholder-white/40 outline-none
                    transition-colors
                    ${error
                        ? 'border-red-400'
                        : 'border-white/15 focus:border-orange-400'
                    }
                    focus-visible:ring-2
                    focus-visible:ring-orange-400/30
                `}
            />

            {error && (
                <p id={errorId} className="text-xs text-red-300">
                    {error}
                </p>
            )}
        </div>
    );
}

export default function ContactFormFields({
    formData,
    errors,
    ids,
    onChange,
}) {
    return (
        <>
            <InputField
                id={ids.name}
                name="name"
                label="Имя"
                placeholder="Ваше имя"
                autoComplete="name"
                value={formData.name}
                error={errors.name}
                onChange={onChange}
            />

            <InputField
                id={ids.email}
                name="email"
                label="Email"
                type="email"
                placeholder="email@example.ru"
                autoComplete="email"
                value={formData.email}
                error={errors.email}
                onChange={onChange}
            />

            <InputField
                id={ids.phone}
                name="phone"
                label="Телефон"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                autoComplete="tel"
                value={formData.phone}
                error={errors.phone}
                onChange={onChange}
            />

            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor={ids.message}
                    className="text-sm font-medium text-white/90"
                >
                    Сообщение
                </label>

                <textarea
                    id={ids.message}
                    name="message"
                    rows={3}
                    maxLength={2000}
                    required
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                        errors.message ? `${ids.message}-error` : undefined
                    }
                    className={`
                        min-h-[90px] w-full resize-y
                        rounded-xl border bg-white/[0.08]
                        px-4 py-3 text-sm text-white
                        placeholder-white/40 outline-none
                        transition-colors
                        ${errors.message
                            ? 'border-red-400'
                            : 'border-white/15 focus:border-orange-400'
                        }
                        focus-visible:ring-2
                        focus-visible:ring-orange-400/30
                    `}
                />

                {errors.message && (
                    <p
                        id={`${ids.message}-error`}
                        className="text-xs text-red-300"
                    >
                        {errors.message}
                    </p>
                )}

                <span className="text-right text-[11px] text-white/45">
                    {formData.message.length}/2000
                </span>
            </div>
        </>
    );
}
