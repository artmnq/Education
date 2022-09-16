function inputValues() {
    let array = [];
    while(true) {
        let userInput = prompt('Enter your value')
        if (userInput !== "" && userInput !== null) {
            array.push(userInput);
        } else break;
    }

    let renamedArray = array.map((item) => `${item[0].toUpperCase()}${item.toLowerCase().slice(1)}`);

    let sortedAndRenamedArray = renamedArray.sort((first, second) => first.length - second.length);

    return console.log(sortedAndRenamedArray);
}
inputValues();