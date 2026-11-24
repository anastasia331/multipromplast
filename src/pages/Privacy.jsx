import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <Link to="/" className="text-sm text-blue-600 hover:underline">
                        ← Назад на главную
                    </Link>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                    Политика конфиденциальности
                </h1>

                <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">
                        1. Общие положения
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Настоящая политика конфиденциальности описывает порядок сбора, использования
                        и защиты персональных данных пользователей сайта ООО «МУЛЬТИПРОМПЛАСТ».
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700 space-y-1 mb-4">
                        <p>
                            <span className="font-medium text-slate-900">Оператор персональных данных:</span>{' '}
                            ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МУЛЬТИПРОМПЛАСТ» (ООО «МУЛЬТИПРОМПЛАСТ»)
                        </p>
                        <p>
                            <span className="font-medium text-slate-900">ИНН / КПП:</span> 4800033757 / 480001001
                        </p>
                        <p>
                            <span className="font-medium text-slate-900">Юридический адрес:</span>{' '}
                            398005, Россия, Липецкая область, г. Липецк, ул. Ферросплавная, д. 18
                        </p>
                    </div>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        2. Какие данные мы собираем
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Мы можем собирать следующую информацию: имя, номер телефона, адрес электронной
                        почты, сообщения из форм обратной связи, а также файлы, загружаемые через форму
                        расчёта по чертежу.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        3. Цель обработки данных
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Персональные данные используются для связи с пользователем, расчёта стоимости
                        изготовления изделий, оформления заказов и информирования о производственных
                        возможностях компании.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        4. Срок хранения данных
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Персональные данные хранятся в течение срока, необходимого для достижения целей
                        их обработки (подготовки расчёта, согласования и исполнения заказа), но не дольше
                        сроков, установленных законодательством РФ, либо до момента отзыва согласия
                        субъектом персональных данных.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        5. Передача данных третьим лицам
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Оператор не передаёт персональные данные третьим лицам, за исключением случаев,
                        предусмотренных законодательством Российской Федерации, а также случаев привлечения
                        транспортных, курьерских и логистических служб исключительно для доставки заказов
                        по поручению клиента.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        6. Защита данных
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Мы принимаем необходимые организационные и технические меры для защиты
                        персональных данных от неправомерного или случайного доступа, уничтожения,
                        изменения, блокирования, копирования и распространения.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        7. Права пользователей
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                        Пользователь имеет право отозвать согласие на обработку персональных данных,
                        запросить информацию об их обработке, потребовать их уточнения или удаления,
                        направив обращение на электронную почту компании.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">
                        8. Контакты
                    </h2>
                    <p className="text-slate-600 mb-2 leading-relaxed">
                        По всем вопросам, связанным с обработкой персональных данных, обращайтесь по
                        электронной почте:{' '}
                        <a
                            href="mailto:multipromplast@mail.ru"
                            className="text-blue-600 hover:underline"
                        >
                            multipromplast@mail.ru
                        </a>
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        {/* 👇 ЗДЕСЬ УКАЖИ НОВЫЙ НОМЕР ТЕЛЕФОНА: в href без пробелов и скобок (+79XXXXXXXXX), а внутри тега — в красивом формате */}
                        Телефон:{' '}
                        <a href="tel:+89202487722" className="text-blue-600 hover:underline">
                            +8 (920) 248-77-22
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}