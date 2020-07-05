let input = prompt('Введите число');

const add = function(...args) {
    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return console.log(`Общая сумма чисел равна ${total}`);
}

add(input);

