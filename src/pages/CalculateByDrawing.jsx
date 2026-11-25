// import { trackMetrikaGoal } from '../../utils/metrika';

export default function CalculateByDrawing() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-5 px-4 sm:px-6 lg:px-8 bg-gray-50 text-slate-900">
            <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 text-blue-600 mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Приём заявок через сайт временно недоступен</h2>
                <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                    Приносим извинения за временные неудобства. Мы работаем над настройкой формы расчёта.
                </p>
                <p className="text-base text-slate-600 mb-10 leading-relaxed">
                    Для предварительной оценки заказа свяжитесь с нами по телефону или электронной почте. Вы можете направить чертёж, 3D-модель или техническое задание для рассмотрения возможности производства.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[140px] text-center">
                        <div className="mt-0.5 p-2 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 13l-1-6.143M5.67 3.24l5.528 3.686a2 2 0 011.12 0l5.528-3.686M17 12l1 6.143" /></svg>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Телефон</p>
                            <a href="tel:+79205455655" className="text-sm text-blue-600 hover:underline break-words">+7 (920) 545-56-55</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[140px] text-center">
                        <div className="mt-0.5 p-2 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 13l-1-6.143M5.67 3.24l5.528 3.686a2 2 0 011.12 0l5.528-3.686M17 12l1 6.143" /></svg>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Электронная почта</p>
                            <a href="mailto:multipromplast@mail.ru" className="text-sm text-blue-600 hover:underline break-words">multipromplast@mail.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}