let credits = 23580;
const pricePerDroid = 3000;

let userInput = prompt('Сколько дроидов хотите купить?');
userInput = Number(userInput);

if (userInput === 0) {
    console.log('Отменено пользователекм');
}

let totalPrice = userInput * pricePerDroid;


if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    credits = credits - totalPrice;
    alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
}

