// ULBI interview tasks.
// link to full video: https://www.youtube.com/watch?v=jf5TkGzWqiM&t=2s

// 1 - Что выведет obj2?
// let obj1 = {
//     name: 'ulbi tv'
// }

// let obj2 = obj1;

// //! Что выйдет если так сделаем?
// obj1 = {
//     name: 'UPDATED!'
// }

// //! или вот так?
// obj1.name = 'upd'

// console.log(obj2);


// 2 - Задача с try/catch.
function someFn() {
    try {
        if (Math.random() <= 0.5) {
            throw new Error('');
        }
    } catch (e) {
        return 2;
    } finally {
        return 3;
    }
}
//! Что будет если мы запустим функцию?
console.log(someFn()); // 3


// 3 - Сделать так чтобы в массиве были только числа без своих копий.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function uniteUnique() {
    const arr = [...arguments];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(...arr[i]);
    }
    newArr = new Set(newArr);
    return [...newArr];
}

console.log(uniteUnique([1, 2, 3, 4, 4, 5, 6, 7, 8, 9]));



// 4 - Задача с Function Constructor.
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user = new User('Azizi', 19);
console.log(user);


// link to full video: https://youtu.be/P2x_lmvVOfE
// 1 - Проверить на Палиндром.
function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}

console.log(isPalindrome('UWU')); // true



// 2 - По объектам.
const obj1 = {
    a: 1,
    b: 2
}

const obj2 = obj1;

obj1.a = 5;
//! что выведет obj2?
console.log(obj2);

//! здесь же другой вопрос...
let a = 5;
let b = a;
a = 10;

//! что будет на b?
console.log(b);


// Xulosa: JavaScriptda Primitiv va Murakkab obyektlar bor.
// obj'lar esa murakkab turiga kiradi, ya'ni obj bu xuddi ssilkadek gap.



// 3 - Глубокое клонирование и неглубокое.
const objA = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd'
    }
}

//! что выведется на консоле?
const objB = {...objA };
console.log(objA.c === objB.c); // true

//! теперь, почему выведелось true, если мы сделали копию объекта?

// теперь нужно показать с глуб.клон.


// 4 - Проверка полей
const obj = {}
    // console error chiqarmasin, shartida*
console.log(!obj.a || 'пустое значение');