import { bonusList, clicker } from "./config.js";

// Проверяем, выпал ли бонус (шанс ~4%)
export const checkBonus = () => {
    const id = generateToken();
    if (id == 0 || id == 1 || id == 2 || id == 3) generateBonus(id);
}

const generateToken = () => {
    return Math.floor(Math.random() * 101);
}

const generateBonus = (id) => {
    const button = document.createElement('button');
    button.className = `clicker__bunus-button clicker__bunus-button--${id}`;

    createListenerBonus(button, id);

    switch (id) {
        case 0:
            button.textContent = '+1';
            button.title = 'Бонус: +1 к мультиклику';
            break;
        case 1:
            button.textContent = 'Q';
            button.title = 'Квадратный бонус: удвоить счёт';
            break;
        case 2:
            button.textContent = 'A';
            button.title = 'Авто-клик: +5 к счёту';
            break;
        case 3:
            button.textContent = 'U';
            button.title = 'Ульта: +10 к мультиклику';
            break;
    }

    bonusList.append(button);

    // Бонус исчезает через 8 секунд, если не нажать
    setTimeout(() => {
        if (button.parentNode) button.remove();
    }, 8000);
}

const createListenerBonus = (button, id) => {
    // Исправлено: addEventListener (с заглавной L)
    button.addEventListener('click', () => {
        switch (id) {
            case 0:
                // +1 к мультиклику
                clicker.multiClick = clicker.multiClick + 1; // Исправлено: clicker.multiClick вместо multiClick
                break;
            case 1:
                // Квадратный бонус: удвоить текущий счёт
                clicker.score = clicker.score * 2;
                document.querySelector(".clicker__score").textContent = clicker.score;
                break;
            case 2:
                // Авто-клик: +5 к счёту
                clicker.score = clicker.score + 5;
                document.querySelector(".clicker__score").textContent = clicker.score;
                break;
            case 3:
                // Ульта: +10 к мультиклику
                clicker.multiClick = clicker.multiClick + 10;
                break;
        }

        button.remove();
    });
}
