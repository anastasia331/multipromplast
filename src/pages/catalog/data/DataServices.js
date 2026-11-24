import {
    Package,
    Box,
    Settings,
    Factory,
    Building2,
    Car,
    Home,
    Zap,
    Sprout,
    Sparkles,
} from 'lucide-react';



import avtomobilnyeKomplektuyuschie from '../../../assets/catalog/products/avtomobilnyeKomplektuyushchie.webp';
import elektrotekhnicheskielzdeliya from '../../../assets/catalog/products/elektrotekhnicheskieIzdeliya.webp';
import individualnyelzdeliya from '../../../assets/catalog/products/individualnyeIzdeliya.webp';
import izdeliyaDlyaStroitelstva from '../../../assets/catalog/products/izdeliyaDlyaStroitelstva.webp';
import komlektuyuschieDlyaPromyshlennosti from '../../../assets/catalog/products/komplektuyushchieDlyaPromyshlennosti.webp';
import korpusnyelzdeliya from '../../../assets/catalog/products/korpusnyeIzdeliya.webp';
import tekhnicheskieDetali from '../../../assets/catalog/products/tekhnicheskieDetali.webp';
import selskohozyaystvennyeKomplektuyuschie from '../../../assets/catalog/products/selskohozyaystvennyeKomplektuyushchie.webp';
import upakovochnyeIzdeliya from '../../../assets/catalog/products/upakovochnyeIzdeliya.webp';
import bytovyePlastikovyeIzdeliya from '../../../assets/catalog/products/bytovyePlastikovyeIzdeliya.webp';
export const PRODUCT_CATEGORIES = [
    {
        id: 'corpses',
        title: 'Корпусные изделия',
        desc: 'Корпуса для электротехнического оборудования, приборов, устройств, бытовой техники, электронных компонентов и пром. оборудования.',
        icon: Box,
        tag: 'Сложная геометрия',
        image: korpusnyelzdeliya
    },
    {
        id: 'tech-parts',
        title: 'Технические детали',
        desc: 'Втулки, крепления, заглушки, переходники, соединительные элементы, фиксаторы, держатели, кронштейны и другие комплектующие.',
        icon: Settings,
        tag: 'Высокая точность',
        image: tekhnicheskieDetali
    },
    {
        id: 'industry',
        title: 'Комплектующие для промышленности',
        desc: 'Пластиковые элементы механизмов, детали производственного оборудования, защитные кожухи, направляющие, крышки и монтажные элементы.',
        icon: Factory,
        tag: 'Износостойкость',
        image: komlektuyuschieDlyaPromyshlennosti
    },
    {
        id: 'building',
        title: 'Изделия для строительства',
        desc: 'Пластиковые крепёжные элементы, монтажные детали, соединители, распорки, заглушки, элементы отделки и строительные комплектующие.',
        icon: Building2,
        tag: 'Прочность',
        image: izdeliyaDlyaStroitelstva
    },
    {
        id: 'auto',
        title: 'Автомобильные комплектующие',
        desc: 'Пластиковые корпуса, заглушки, фиксаторы, крепления, декоративные элементы и технические детали для транспортных средств.',
        icon: Car,
        tag: 'Автопром',
        image: avtomobilnyeKomplektuyuschie
    },
    {
        id: 'household',
        title: 'Бытовые пластиковые изделия',
        desc: 'Различные ёмкости, контейнеры, крышки, органайзеры, ручки, держатели и функциональные элементы домашнего обихода.',
        icon: Home,
        tag: 'Потребительские',
        image: bytovyePlastikovyeIzdeliya
    },
    {
        id: 'electrical',
        title: 'Электротехнические изделия',
        desc: 'Корпуса распределительных устройств, элементы электроустановочных изделий, изоляционные компоненты, защитные крышки и крепёж.',
        icon: Zap,
        tag: 'Изоляция',
        image: elektrotekhnicheskielzdeliya
    },
    {
        id: 'packaging',
        title: 'Упаковочные изделия',
        desc: 'Пластиковые крышки, колпачки, контейнеры, элементы упаковки, корпуса и различные вспомогательные упаковочные компоненты.',
        icon: Package,
        tag: 'Массовое производство',
        image: upakovochnyeIzdeliya
    },
    {
        id: 'agro',
        title: 'Сельскохозяйственные комплектующие',
        desc: 'Элементы систем полива, соединители, корпуса оборудования, крепления и детали сельскохозяйственной техники.',
        icon: Sprout,
        tag: 'Устойчивость к УФ',
        image: selskohozyaystvennyeKomplektuyuschie
    },
    {
        id: 'custom-prods',
        title: 'Индивидуальные изделия',
        desc: 'Нестандартные пластиковые детали и изделия, разработанные специально под задачи конкретного заказчика.',
        icon: Sparkles,
        tag: 'Спецпроект',
        image: individualnyelzdeliya
    }
];

// --- ДАННЫЕ ПО УСЛУГАМ ---
export const SERVICES = [
    {
        id: 'injection-molding',
        title: 'Литьё пластмасс под давлением',
        subtitle: 'Основное направление деятельности',
        desc: 'Изготовление пластиковых изделий методом литья под давлением. Технология позволяет получать изделия сложной геометрии с высокой точностью, повторяемостью и качеством поверхности.',
        features: [
            'Высокая точность изготовления',
            'Производство деталей сложной формы',
            'Повторяемость размеров и характеристик',
            'Эффективность при серийном производстве',
            'Широкий выбор полимерных материалов',
            'Изделия с конструктивными особенностями'
        ],
        badge: 'Основная услуга'
    },
    {
        id: 'molds-making',
        title: 'Изготовление пресс-форм',
        subtitle: 'Проектирование и создание оснастки',
        desc: 'Производим пресс-формы для изготовления пластиковых изделий по индивидуальным требованиям заказчика с нуля на основании чертежей, 3D-моделей или образцов.',
        features: [
            'Изготовление по индивидуальным проектам',
            'Разработка под новые изделия',
            'Подготовка технической документации',
            'Изготовление для серийного производства',
            'Доработка и модернизация форм',
            'Полная подготовка к производству'
        ],
        badge: 'Под ключ'
    },
    {
        id: 'client-molds',
        title: 'Литьё по пресс-формам заказчика',
        subtitle: 'Аутсорсинг производства',
        desc: 'Организация производства продукции на ваших готовых пресс-формах без необходимости заказывать новую оснастку. Проводим техническую оценку состояния перед запуском.',
        features: [
            'Быстрый старт производства',
            'Оценка состояния оснастки перед запуском',
            'Сохранение ваших технологических стандартов',
            'Оптимизация себестоимости партии'
        ],
        badge: 'Аутсорсинг'
    },
    {
        id: 'own-molds',
        title: 'Производство по собственным пресс-формам',
        subtitle: 'Готовые решения без инвестиций в оснастку',
        desc: 'Выпуск пластиковых изделий с использованием наших готовых пресс-форм. Вы получаете готовую продукцию без затрат на изготовление оснастки.',
        features: [
            'Без затрат на покупку пресс-формы',
            'Минимальные сроки запуска партии',
            'Полный контроль качества на каждом этапе',
            'Гибкие объёмы заказов'
        ],
        badge: 'Экономия бюджета'
    }
];

// --- ЭТАПЫ ЗАПУСКА НОВОГО ИЗДЕЛИЯ ---
export const LAUNCH_STEPS = [
    { step: '01', title: 'Заявка', desc: 'Получение заявки и изучение требований' },
    { step: '02', title: 'Анализ', desc: 'Анализ конструкции и назначения изделия' },
    { step: '03', title: 'ТЗ', desc: 'Согласование технических характеристик' },
    { step: '04', title: 'Материал', desc: 'Подбор оптимального полимера' },
    { step: '05', title: 'Оснастка', desc: 'Проработка решения по пресс-форме' },
    { step: '06', title: 'Подготовка', desc: 'Техническая подготовка производства' },
    { step: '07', title: 'Образцы', desc: 'Изготовление и проверка тестовых образцов' },
    { step: '08', title: 'Утверждение', desc: 'Согласование результата с заказчиком' },
    { step: '09', title: 'Серия', desc: 'Запуск серийного производства' }
];


// --- ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ ---
export const EXTRA_SERVICES = [
    { title: 'Контроль качества продукции', desc: 'Проверка геометрических параметров, внешнего вида, целостности и отсутствия дефектов.' },
    { title: 'Упаковка готовой продукции', desc: 'Индивидуальная и групповая упаковка готовой продукции, подготовка к транспортировке.' },
    { title: 'Сортировка и комплектация', desc: 'Формирование комплектов по артикулам, размерам и моделям под ваши задачи.' },
    { title: 'Подготовка к отгрузке', desc: 'Формирование партий, укладка на паллеты и фиксация для безопасной транспортировки.' },
    { title: 'Доставка и логистика', desc: 'Организация отгрузки и международной доставки по индивидуальным условиям.' }
];

