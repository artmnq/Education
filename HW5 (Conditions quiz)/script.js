let IsAge = confirm(`Есть ли вам 18 лет?`);
if (IsAge === false) {
    alert(`Вам запрещено проходить опрос`);
} else {
    let WakeUpTime = Number(prompt(`Во сколько вы встаете?`));
    if (isNaN(WakeUpTime)) {
        alert(`Некорректный ввод`);
    } else if (WakeUpTime <= 0 || WakeUpTime > 24) {
        alert(`Научись пользоваться часами!`);
    } else if (WakeUpTime > 0 && WakeUpTime <= 5) {
        alert(`Очень рано`);
    } else if (WakeUpTime > 5 && WakeUpTime <= 8) {
        alert(`Всё равно рано`);
    } else if (WakeUpTime > 8 && WakeUpTime <= 11) {
        alert(`Нормально`);
    } else if (WakeUpTime > 11 && WakeUpTime <= 14) {
        alert(`Слишком поздно`);
    } else {
        alert(`Очень-очень поздно`);
    }
}