export default function Ticker() {
    // Базовый набор фраз
    const baseItems = [
        "Изготовление пластиковых изделий",
        "Литье под давлением",
        "Изготовление пресс-форм"
    ];

    // Увеличиваем массив в несколько раз, чтобы строка была длинной и перекрывала широкий экран
    const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

    const renderContent = () => (
        <div className="flex items-center shrink-0">
            {items.map((text, index) => (
                <div key={index} className="flex items-center shrink-0">
                    <span className="text-white/90 font-light text-base sm:text-lg tracking-wider px-6 whitespace-nowrap">
                        {text}
                    </span>
                    <span className="text-yellow-300 text-xs px-2">✦</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 overflow-hidden py-3.5 shadow-inner relative">

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 50s linear infinite;
                }
            `}</style>

            {/* Бесконечная лента без пустых мест */}
            <div className="animate-marquee flex items-center">
                {renderContent()}
                {renderContent()}
            </div>
        </div>
    );
}