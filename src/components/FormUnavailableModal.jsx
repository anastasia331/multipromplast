import { useEffect, useId, useRef } from 'react';

const CONTACT_INFO = {
  phone: {
    href: 'tel:+79205455655',
    label: '+7 (920) 545-56-55',
  },
  email: {
    href: 'mailto:multipromplast@mail.ru',
    label: 'multipromplast@mail.ru',
  },
};

export default function FormUnavailableModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  // Синхронизируем React-состояние isOpen с нативным методом showModal() / close()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else if (!isOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Нативное событие close срабатывает при Esc или при вызове dialog.close()
  const handleNativeClose = () => {
    if (isOpen) {
      onClose();
    }
  };

  // Закрытие при клике строго по затемнённому фону самого <dialog>
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleNativeClose}
      onClick={handleBackdropClick}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-7">
        {/* Верхний блок: иконка предупреждения и текст */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="space-y-2 text-left">
            <h3 id={titleId} className="text-lg font-bold leading-snug text-slate-900">
              Форма обратной связи временно недоступна
            </h3>
            <div id={descriptionId} className="space-y-1.5 text-sm leading-relaxed text-slate-600">
              <p>Приносим извинения за временные неудобства — мы работаем над восстановлением её работы.</p>
              <p>Свяжитесь с нами напрямую по телефону или электронной почте:</p>
            </div>
          </div>
        </div>

        {/* Кнопки прямого перехода на звонок и почту */}
        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <a
            href={CONTACT_INFO.phone.href}
            className="group flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-3.5 py-2.5 text-white transition hover:bg-blue-800 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <svg
              className="h-4 w-4 shrink-0 text-blue-200 transition group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="whitespace-nowrap text-xs font-semibold sm:text-sm">
              {CONTACT_INFO.phone.label}
            </span>
          </a>

          <a
            href={CONTACT_INFO.email.href}
            className="group flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <svg
              className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="truncate text-xs font-semibold sm:text-sm">
              {CONTACT_INFO.email.label}
            </span>
          </a>
        </div>

        {/* Кнопка закрытия модального окна */}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full cursor-pointer rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Понятно
        </button>
      </div>
    </dialog>
  );
}