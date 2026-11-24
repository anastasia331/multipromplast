
import { MapPin, Clock, Phone, Mail, Truck } from 'lucide-react';

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
                                href="tel:+79205455655"
                                className="mt-1 block text-sm hover:text-orange-400"
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
                                    text-sm hover:text-orange-400
                                "
                            >
                                multipromplast@mail.ru
                            </a>
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
