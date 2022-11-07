// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// 1. Переписать checkAge с помощью ? или ||
// const age = 18
// function checkAge(age){
//     return (age > 18) ? true : confirm("Родители разрешили?")
// }

// console.log(checkAge(age))

// 2. Функция pow(x,n)
// x = 2
// n = 3

// function pow(x, n){
//     return x ** n
// }

// console.log(pow(x, n))

// 3. Переписать в стрелочную функцию
// let ask = (question, yes, no) => {
//     if(confirm(question)){
//         yes()
//     }
//     else{
//         no()
//     }
// }

// ask("Вы согласны?", function(){alert("Вы согласились")}, function(){alert("Вы отменили выполнение.")})

// 4. Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];

// let sortedArr = arr.sort((a, b)=>{
//     return b-a
// })

// console.log(sortedArr)

// 5. Преобразования в массив
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((users)=>{return users.name})

// alert( names ); // Вася, Петя, Маша

// 6. Трансформировать в объекты

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((value)=>{
//     let fullName = `${value.name}  ${value.surname}`
//     delete value.name
//     delete value.surname
//     value.fullName = fullName
//     return value
// })

// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName)// Вася Пупкин

// 7. Получить средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    let sumAllAge = arr.reduce((acc, value)=>{
        return acc + value.age
    },0/3)
    return sumAllAge / arr.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


