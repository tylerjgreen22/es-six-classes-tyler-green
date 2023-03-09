import { ListBinding } from "/ListBinding.js"

//Classes and Constructors

// class Rectangle {
//     // Setup object
//     constructor(_width, _height, _color) {
//         console.log("The Rectangle is being created");

//         this.width = _width;
//         this.height = _height;
//         this.color = _color;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     printDescription() {
//         console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
//     }
// }

// let rectOne = new Rectangle(5, 3, "blue");
// let rectTwo = new Rectangle(10, 5, "red");

// console.log(rectOne);
// console.log(rectTwo);

// console.log(rectOne.getArea());
// console.log(rectTwo.getArea());

// rectOne.printDescription();
// rectTwo.printDescription();

// Getter and Setters

// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//         this.numOfAreaRequests = 0;
//     }

//     get area() {
//         this.numOfAreaRequests++;
//         return this.width * this.height;
//     }

//     set area(area) {
//         this.width = Math.sqrt(area);
//         this.height = this.width;
//     }
// }

// let squareOne = new Square(4);
// squareOne.area = 25;

// console.log(squareOne.area);
// console.log(squareOne.area);
// console.log(squareOne.area);
// console.log(squareOne.area);

// console.log(squareOne.numOfAreaRequests)

// Static Methods

// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//     }

//     static equals(a, b) {
//         return a.width * a.height === b.width * b.height;
//     }

//     static isValidDimensions(width, height) {
//         return width === height;
//     }
// }

// let squareOne = new Square(8);
// let squareTwo = new Square(8);

// console.log(Square.equals(squareOne, squareTwo));
// console.log(Square.isValidDimensions(6, 6));

// Inheritance and Extends

// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     describe() {
//         console.log(`I am ${this.name} and I am ${this.age} years old`)
//     }
// }

// class Programmer extends Person {
//     constructor(_name, _age, _yearsOfExperience) {
//         super(_name, _age);
//         this.yearsOfExperience = _yearsOfExperience
//     }

//     code() {
//         console.log(`${this.name} is coding`);
//     }
// }

// let personOne = new Person("Jeff", 45);
// let programmerOne = new Programmer("Dom", 56, 12);

// programmerOne.code();
// programmerOne.describe();

// console.log(personOne);
// console.log(programmerOne);

// const programmers = [
//     new Programmer("Dom", 56, 12),
//     new Programmer("Jeff", 24, 4)
// ]

// function developSoftware(programmers) {
//     //Develop software
//     for (let programmer of programmers) {
//         programmer.code();
//     }
// }

// developSoftware(programmers);

// Polymorphism

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log("Generic Animal Sound");
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     makeSound() {
//         super.makeSound();
//         console.log("Woof");
//     }
// }

// const animalOne = new Animal('Dom');
// const animalTwo = new Dog('Jeff');
// animalOne.makeSound();
// animalTwo.makeSound();

// Classes in practice

const myList = document.getElementById("myList");

const list = new ListBinding(myList);

list.add("test one");
list.add("test two");
list.add("test three");
list.add("test four");
list.remove(1);
