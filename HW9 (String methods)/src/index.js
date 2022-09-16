/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
    let replacedString = "";
    for (let letter of string) {
        if (letter.toLowerCase() === "z" || letter.toLowerCase() === "v") {
            let starString = "*";
            replacedString = `${replacedString}${starString}`;
        } else {
            replacedString = `${replacedString}${letter}`;
        }
    }
    return replacedString;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    let changedString = "";
    if (string.toLowerCase().includes(word.toLowerCase())) {
        let index = string.toLowerCase().indexOf(word.toLowerCase());
        let lastIndex = string.toLowerCase().lastIndexOf(word.toLowerCase());
        changedString = `${string.slice(0, index)}${newWord}${string.slice(lastIndex + word.length)}`;
    } else {
        changedString = string;
    }
    return changedString;
    
    // но насколь же это проще, почему нельзя было так? :(
    // const changedString = string.replace(word, newWord);
    // return changedString;
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
    let turncateString = "";
    turncateString = `${turncateString}${string.substr(0, length)}`;
    return turncateString;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    let cycledSymbol = 0;
    for (let letter of string.toLowerCase()) {
        if (letter === symbol.toLowerCase()) {
            cycledSymbol++;
        }
    }
    return cycledSymbol;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
    let quantityOfSymbolsWithIndexOf = 0;
    let index = 0;
    outer: while (true) {
        let index2 = string.toLocaleLowerCase().indexOf(symbol.toLowerCase(), index);
        if (index2 >= 0) {
            index = index2 + 1;
            quantityOfSymbolsWithIndexOf++;
        } else if (index2 === -1) {
            break outer;
        }
    }
    return quantityOfSymbolsWithIndexOf;
};
