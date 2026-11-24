
export default function ConsentField({
    id,
    checked,
    error,
    onChange,
}) {
    return (
        <div>
            <div className="flex items-start gap-3">
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    required
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className="
                        mt-0.5 h-4 w-4 shrink-0
                        accent-orange-500
                        focus-visible:ring-2
                        focus-visible:ring-orange-400
                    "
                />

                <label
                    htmlFor={id}
                    className="cursor-pointer text-xs leading-relaxed text-white/75"
                >
                    Я даю согласие ООО «МУЛЬТИПРОМПЛАСТ»
                    на обработку указанных мной персональных
                    данных для рассмотрения моего обращения
                    и связи со мной. С{' '}
                    <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            font-medium text-white underline
                            underline-offset-2
                            hover:text-orange-300
                        "
                    >
                        Политикой в отношении обработки
                        персональных данных
                    </a>{' '}
                    ознакомлен(-а).
                </label>
            </div>

            {error && (
                <p
                    id={`${id}-error`}
                    className="mt-2 text-xs text-red-300"
                >
                    {error}
                </p>
            )}
        </div>
    );
}
