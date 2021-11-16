// const user = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: 19,
//     pet: {
//         type: "Rabbit",
//     },
// }

// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.pet);
// console.log(user.pet.type);


// const numbers = [1, "qwer", 3];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers.length);


// const str = "qwqqwq";
// const number = [1, 2, 3];
// number.push(str);
// number.unshift(0);

// console.log(number);


// удаляет последний и первый эл т массива

// const number = [1, 2, 3]
// number.pop();
// number.shift();

// console.log(number);



const data = [
      {
        firstName: "Ashton",
        lastName: "Kutcher",
        age: 40,
      },
      {
        firstName: "Bradley",
        lastName: "Pitt",
        age: 54,
      },
      {
        firstName: "Hannah",
        lastName: "Dakota",
        age: 24,
      },
    ];



    let nname = +prompt("enter age");
for (let i = 0; i < data.length; i++){
    if(data[i].age === nname){
        
        console.log(data[i])
    }
}

    // Задание! Поиск данных в массиве.
// Создадим массив объектов, который будет содержать данные о пользователях;
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert;




// const number = [1, 2, 3];

// for (let i = 0; i < number.length; i++){
//     console.log('index', i);
//     console.log(number[i]);
// }