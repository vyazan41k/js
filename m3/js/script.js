// const object = {
//     key1: 10,
//     key2: "string",
//     key3: true,
//     someNewKey: "string2",
// }

// for (const key in object) {
//     console.log(key);
//     console.log(object[key]);
// }

// const keys = Object.keys(object);
// const values = Object.values(object);
// const entries = Object.entries(object);

// console.log(keys);
// console.log(values);
// console.log(entries)

// const goods = {
//     apples: 10,
//     tomatos: 15,
//     potatoes: 20,
//     bananas: 30,
// }

// let total = 0;
// const prices = Object.values(goods)

// for (const price of prices) {
//     total += price
// }

// const entries = Object.entries(goods)
// for (const entry of entries) {
//     const key = entry[0]
//     const value = entry[1]

//     console.log(key)
//     console.log(value)
// }

// sprad operator

// const array1 = [1,2,3,4]
// const array2 = [-1,0, ...array1]
// const array3 = [...array1, "ffff", "fgfgdfgd", ...array2, "qweqwe"]

// console.log(array2)
// console.log(array3)

// const object1 = {
//     a: 1,
//     b: 2
// }

// const object2 = {
//     ...object1,
//     c: 3,
//     a: "fdddddd",
//     // ...object1
// }

// const object4 = {...object1}

// const object3 = Object.assign({}, object1, object2)

// console.log(object3)

// const array = [1,2,34323535,-6456334,243234324]
// const min = Math.min(...array)
// const max = Math.max(...array)

// console.log(min)
// console.log(max)

// prest operator

// const getSum = (a, b, ...args) => {
//     console.log(a)
//     console.log(b)
//     console.log(args)
// }

// getSum(1,2,3,4)

// const someLongObjectName = {
//     name: "Name",
//     age: 13,
//     isSmaking: false
// }

// const someLongObjectName2 = {
//     name: "dfggdfgdfgdf",
//     age: 17,
//     isSmaking: false
// }

// const {name, age} = someLongObjectName
// const {name: nnn, age: aaa} = someLongObjectName2

// const birthdayText = `Дорогой, ${name}! Тебе уже ${age} лет.`
// const birthdayText2 = `Дорогой, ${nnn}! Тебе уже ${aaa} лет.`

// console.log(birthdayText)
// console.log(birthdayText2)

// const array = [1,2,3,4,5,6,7,8,9,0]
// const [num1, , num3, ...others] = array

// console.log(num1)
// console.log(num3)
// console.log(others)

let a = 1;
let b = 2;

[b, a] = [a, b];



console.log(a)
console.log(b)
