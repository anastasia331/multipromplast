import React, { useState } from 'react';

export default function CalculateByDrawing() {
    const [fileName, setFileName] = useState('');

    // Обработка выбора файла для отображения его имени
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white overflow-hidden">

            {/* Фоновый технологичный элемент / градиентное свечение */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Заголовок страницы */}
            <div className="relative z-10 text-center max-w-2xl mb-8">
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Индивидуальное производство</span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-2">
                    Расчет стоимости по чертежу
                </h2>
                <p className="mt-3 text-base sm:text-lg text-gray-300">
                    Загрузите чертеж, эскиз или 3D-модель изделия. Наш инженерно-технический отдел бесплатно рассчитает стоимость и сроки изготовления.
                </p>
            </div>

            {/* Карточка формы с эффектом стекла */}
            <div className="relative z-10 w-full max-w-2xl p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300">

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                    {/* Блок загрузки файла (Drag & Drop зона) */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-200">
                            Чертеж, эскиз или 3D-модель <span className="text-blue-400">*</span>
                        </label>

                        <label className="relative flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer bg-black/30 hover:bg-black/50 hover:border-blue-400/50 transition-all duration-300 group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                                <svg className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="mb-1 text-sm text-gray-300">
                                    <span className="font-semibold text-white">Нажмите для загрузки</span> или перетащите файл
                                </p>
                                <p className="text-xs text-gray-400">
                                    PDF, STEP, STP, PNG, JPG (макс. до 50 МБ)
                                </p>
                                {fileName && (
                                    <p className="mt-2 text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                        Выбран файл: {fileName}
                                    </p>
                                )}
                            </div>
                            <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>

                    {/* Сетка параметров: Тираж и Материал */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-200">Ориентировочный тираж (шт.)</label>
                            <input
                                type="number"
                                placeholder="Например: 1000"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-200">Материал (если известен)</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/15 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all">
                                <option value="" disabled selected>Выберите пластик</option>
                                <option value="pnd">ПНД (полиэтилен низкого давления)</option>
                                <option value="pvd">ПВД (полиэтилен высокого давления)</option>
                                <option value="pp">Полипропилен (PP)</option>
                                <option value="abs">АБС-пластик (ABS)</option>
                                <option value="other">Другой / Затрудняюсь ответить</option>
                            </select>
                        </div>
                    </div>

                    {/* Контактные данные */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-200">Ваше имя <span className="text-blue-400">*</span></label>
                            <input
                                type="text"
                                placeholder="Иван"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-200">Номер телефона <span className="text-blue-400">*</span></label>
                            <input
                                type="tel"
                                placeholder="+375 (__) ___-__-__"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                            />
                        </div>
                    </div>

                    {/* Комментарий / ТЗ */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-200">Комментарий к заказу</label>
                        <textarea
                            rows="3"
                            placeholder="Укажите габариты, требования к нагрузке (если это поддон) или другие пожелания..."
                            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                        />
                    </div>

                    {/* Кнопка отправки и призыв */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 hover:scale-[1.01] active:scale-95 transition-all duration-200 cursor-pointer"
                        >
                            Отправить чертеж на расчет
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-3">
                            Нажимая кнопку, вы соглашаетесь на обработку персональных данных и сохранение конфиденциальности.
                        </p>
                    </div>

                </form>
            </div>

        </section>
    );
}