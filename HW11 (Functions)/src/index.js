/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = string => string.split(' ').map((item) => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    let newString = [];
    for (let index = 0; index < string.length; index++) {
        if (index % 2 === 0) {
            newString.push(string[index].toLowerCase());
        } else if (index % 2 !== 0) {
            newString.push(string[index].toUpperCase());
        }
    }
    return newString.join('');
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    if (action === 'uppercase') {
        return string.toUpperCase();
    } else if (action === 'lowercase') {
        return string.toLowerCase();
    } else if (action === 'fence') {
        return fenceString(string);
    } else if (action === 'capitalize') {
        return capitalizeString(string);
    } else {
        return string;
    }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
        case 'uppercase':
            return string.toUpperCase();
        case 'lowercase':
            return string.toLowerCase();
        case 'fence':
            return fenceString(string);
        case 'capitalize':
            return capitalizeString(string);
        default:
            return string;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let letter of string) {
        console.log(letter);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let letter = 0; letter < string.length; letter++) {
        console.log(string[letter]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let letter = 0;
    while (letter < string.length) {
        console.log(string[letter]);
        letter++;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    let arr = string.split('');
    arr.forEach(function (letter) {
        console.log(letter);
    })
};