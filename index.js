import { button, score, clicker, progress, level } from "./config.js";
import { checkBonus } from "./bonus.js";

button.addEventListener('click', () => {
    // Изменяем счёт
    clicker.score = clicker.score + 1 + clicker.multiClick;
    score.textContent = clicker.score;

    // Изменяем прогресс бар
    clicker.progress = clicker.progress + 1 + clicker.multiClick;
    progress.value = clicker.progress;

    // Проверяем уровень
    checkProgress();

    // Исправлено: было generatedBonus() — функции не существовало, должно быть checkBonus()
    checkBonus();
})

// Функция, которая проверяет прогресс бар
const checkProgress = () => {
    if (clicker.progress > progress.max) {
        changeLevel();
    }
}

// Функция, которая меняет уровень
const changeLevel = () => {
    level.textContent = ++clicker.level;
    progress.max = progress.max * clicker.level;
    progress.classList.add(`level-progress${clicker.level}`);
    level.classList.add(`level-count${clicker.level}`);
    clearProgress();
}

// Очищаем прогресс бар
const clearProgress = () => {
    progress.value = 0;
    clicker.progress = 0;
}
