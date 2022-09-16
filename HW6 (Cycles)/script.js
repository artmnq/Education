let x = 1;

outer: do {
    let question = prompt("question?");
    if (question === "break") {
        break outer;
    } else if (question === "continue") {
        continue outer;
    } else if (question !== ("break") || ("continue")) {
        alert(x++);
    }
} while (x >= 1);