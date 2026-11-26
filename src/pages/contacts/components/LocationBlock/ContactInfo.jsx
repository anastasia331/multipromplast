import { MapPin, Clock, Phone, Mail, Truck, Send, MessageCircle } from 'lucide-react';

const contacts = [
    {
        icon: MapPin,
        label: 'Адрес',
        content: 'г. Липецк, ул. Ферросплавная, 18',
    },
    {
        icon: Clock,
        label: 'Время работы',
        content: 'Пн — Пт: с 9:00 до 18:00',
    },
];

const messengers = [
    {
        name: 'Telegram',
        href: 'https://t.me/+79202487722',
        icon: Send,
        ariaLabel: 'Написать в Telegram',
    },
    {
        name: 'MAX',
        href: 'https://max.ru/u/f9LHodD0cOJfHb9qEQKaZREuqepEdyg6Fmzreyu1KP0sKy_5vA3fVDV14lM',
        icon: MessageCircle,
        ariaLabel: 'Написать в мессенджер MAX',
    },
];

export default function ContactInfo() {
    return (
        <div className="
            flex w-full flex-col justify-between
            rounded-2xl
            border border-white/10
            bg-slate-900
            p-6 sm:p-8
            text-white
            md:w-[360px] md:shrink-0
        ">
            <div>
                <h3 className="mt-3 text-2xl font-bold">
                    Наши контакты
                </h3>

                <p className="mt-2 text-sm text-white/55">
                    Будем рады обсудить ваш проект
                    и ответить на вопросы.
                </p>

                <div className="mt-8 space-y-7">
                    {contacts.map(({ icon: Icon, label, content }) => (
                        <div key={label} className="flex gap-4">
                            <div className="
                                flex h-10 w-10 shrink-0
                                items-center justify-center
                                rounded-xl bg-white/10
                                text-orange-400
                            ">
                                <Icon size={19} aria-hidden="true" />
                            </div>

                            <div>
                                <p className="
                                    text-xs font-semibold
                                    uppercase tracking-wider
                                    text-white/45
                                ">
                                    {label}
                                </p>

                                <p className="mt-1 text-sm leading-relaxed">
                                    {content}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="flex gap-4">
                        <div className="
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-xl bg-white/10
                            text-orange-400
                        ">
                            <Phone size={19} aria-hidden="true" />
                        </div>

                        <div>
                            <p className="
                                text-xs font-semibold
                                uppercase tracking-wider
                                text-white/45
                            ">
                                Телефон
                            </p>

                            <a
                                href="tel:+79202487722"
                                className="mt-1 block text-sm transition-colors hover:text-orange-400"
                            >
                                +7 (920) 248-77-22
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-xl bg-white/10
                            text-orange-400
                        ">
                            <Mail size={19} aria-hidden="true" />
                        </div>

                        <div>
                            <p className="
                                text-xs font-semibold
                                uppercase tracking-wider
                                text-white/45
                            ">
                                Email
                            </p>

                            <a
                                href="mailto:multipromplast@mail.ru"
                                className="
                                    mt-1 block break-all
                                    text-sm transition-colors hover:text-orange-400
                                "
                            >
                                multipromplast@mail.ru
                            </a>
                        </div>
                    </div>

                    {/* Мессенджеры прямо под почтой */}
                    <div className="flex gap-4">
                        <div
                            aria-hidden="true"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400"
                        >
                            <MessageCircle size={19} />
                        </div>

                        <div className="min-w-0">
                            <p className="
                                text-xs font-semibold
                                uppercase tracking-wider
                                text-white/45
                            ">
                                Мессенджеры
                            </p>

                            <div className="mt-2 flex flex-wrap items-center gap-2.5">
                                {messengers.map(({ name, href, icon: Icon, ariaLabel }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={ariaLabel}
                                        className="
                                            group inline-flex items-center gap-2
                                            rounded-xl border border-white/10
                                            bg-white/5 px-3 py-2
                                            text-xs font-medium text-white/90
                                            transition-all duration-200
                                            hover:border-orange-400/60 hover:bg-orange-400/10 hover:text-orange-300
                                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
                                        "
                                    >
                                        <Icon
                                            size={15}
                                            className="shrink-0 text-orange-400 transition-transform duration-200 group-hover:scale-105"
                                            aria-hidden="true"
                                        />
                                        <span>{name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="
                mt-8 flex gap-3
                border-t border-white/10
                pt-6
                text-sm leading-relaxed text-white/55
            ">
                <Truck
                    size={20}
                    className="shrink-0 text-orange-400"
                    aria-hidden="true"
                />

                <p>
                    Удобный подъезд для большегрузного транспорта.
                </p>
            </div>
        </div>
    );
}