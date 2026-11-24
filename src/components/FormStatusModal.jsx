
import { useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function FormStatusModal({
  isOpen,
  status,
  onClose,
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const success = status === 'success';

  return (
    <div
      className="
                fixed inset-0 z-[100]
                flex items-center justify-center
                bg-slate-950/75
                px-4 py-6
                backdrop-blur-md
            "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-status-title"
        aria-describedby="form-status-description"
        className="
                    relative w-full max-w-sm
                    rounded-2xl border border-white/15
                    bg-slate-900 p-7
                    text-center text-white
                    shadow-2xl
                "
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно"
          className="
                        absolute right-4 top-4
                        rounded-lg p-2
                        text-white/60
                        hover:bg-white/10 hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-orange-400
                    "
        >
          <X size={20} />
        </button>

        {success ? (
          <CheckCircle2
            size={48}
            className="mx-auto mb-4 text-green-400"
            aria-hidden="true"
          />
        ) : (
          <AlertCircle
            size={48}
            className="mx-auto mb-4 text-orange-400"
            aria-hidden="true"
          />
        )}

        <h3
          id="form-status-title"
          className="text-xl font-semibold"
        >
          {success
            ? 'Сообщение отправлено'
            : 'Не удалось отправить'
          }
        </h3>

        <p
          id="form-status-description"
          className="mt-3 text-sm leading-relaxed text-white/65"
          role="status"
        >
          {success
            ? 'Спасибо за обращение! Мы свяжемся с вами.'
            : status === 'configuration'
              ? 'Отправка пока не настроена. Свяжитесь с нами по телефону или электронной почте.'
              : 'Попробуйте ещё раз позже или свяжитесь с нами напрямую.'
          }
        </p>

        <button
          type="button"
          onClick={onClose}
          className="
                        mt-6 w-full rounded-xl
                        bg-white px-5 py-3
                        text-sm font-semibold text-slate-900
                        transition-colors
                        hover:bg-orange-500 hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-orange-400
                    "
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
