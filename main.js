//Задание №3 Приветствие
let start = document.querySelector('button');
start.onclick = function () {
    let name = document.getElementById('input').value;
    document.getElementById('hello').innerHTML="Приветствую тебя   " +  name;

};


//Задание №1
let mass = [1,2,3];
let mass2 = [4,5,6];
let mass3 = [7,8,9];
let mass4 = ['star', 'love',10];
let mass5 = ['ball'];
let mass6 = [...mass,...mass2,...mass3,...mass4,...mass5];
console.log(mass6);

//Задание №2
let car = {
    brand: "Mercedes",
    class: "e",
    year: 2022,
    color: "red",
    driveUnit: "rear"
};
let cars = {
    ...car,
    bodyCar: "hatchback",
    price: 10000,
    country: "Германия"
};
console.log(cars);