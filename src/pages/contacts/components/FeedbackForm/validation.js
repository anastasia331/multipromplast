
export function validateContactForm(data, agreed) {
    const errors = {};

    const name = data.name.trim();
    const email = data.email.trim();
    const phone = data.phone.trim();
    const message = data.message.trim();

    if (!name) {
        errors.name = 'Укажите ваше имя.';
    } else if (name.length < 2) {
        errors.name = 'Минимум 2 символа.';
    } else if (name.length > 100) {
        errors.name = 'Слишком длинное имя.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email) {
        errors.email = 'Укажите email.';
    } else if (!emailPattern.test(email) || email.length > 254) {
        errors.email = 'Введите корректный email.';
    }

    if (phone) {
        const digits = phone.replace(/\D/g, '');

        if (digits.length < 10 || digits.length > 15) {
            errors.phone = 'Проверьте номер телефона.';
        }
    }

    if (!message) {
        errors.message = 'Напишите сообщение.';
    } else if (message.length < 10) {
        errors.message = 'Минимум 10 символов.';
    } else if (message.length > 2000) {
        errors.message = 'Максимум 2000 символов.';
    }

    if (!agreed) {
        errors.consent = 'Необходимо дать согласие.';
    }

    return errors;
}
