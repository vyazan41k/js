const findLongestWord = function(string) {
    const arr = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < arr.length - 1; i++) {
        if (longest < arr[i].length) {
            longest = arr[i].length;
            word = arr[i];
        }
    }
    return word;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'