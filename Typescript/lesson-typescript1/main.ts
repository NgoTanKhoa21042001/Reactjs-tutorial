let car: string = "yamaha";

let num: number = 2;

let isLoading: boolean = false;

/**\
 * OBJECT
 */

let house: {
  address: String;
  // cho giá trị khởi tạo
  color: String;
} = {
  address: "",
  color: "",
};

house.address = "yamaha";
house.color = "red";
console.log(house.color);

/**\
 * OBJECT
 */

// ARRAY

let products: string[] = [];
//lỗi ko thuộc kiểu never
products.push("d");
console.log(products);
// ARRAY

/// STRING

let names = ["Khoa", "Hà"];
let address: any[] = [];
address.push("hanh");
console.log(address);

// STRING

// NUMBER
let number: number[] = [];

number.push(1);
console.log(number);

// NUMBER

// OBJECT ARRAY
let people: {
  name: string;
  age: number;
}[] = [];

people.push({ name: "Khoa", age: 23 });
console.log(people);

// OBJECT ARRAY

// FUNCTION
// const sum = (num1: number, num2: number): number => num1 + num2;

// console.log(sum(2, 5));

type subtract = (c: number, d: number) => number;

// optional parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
console.log(addAll(2, 1));

// FUNCTION

// UNION
// kết hợp những type lại vs nhau
let price: string | number;
(price = "khoa"), (price = 2);

let body: { name: string } | { firstName: string } = {
  name: "Khoa",
  firstName: "Haf",
};
// UNION

// ENUM
// enum cho phép bạn định nghĩa một nhóm các hằng số có tên, giúp mã của bạn trở nên dễ đọc và dễ hiểu hơn.
// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday = "Saturday",
// }
// console.log(DayOfWeek.Saturday);

// ENUM
// Interface
//interface là một cách để định nghĩa cấu trúc của một đối tượng. Nó cho phép bạn mô tả các thuộc tính và phương thức mà một đối tượng cần phải có.
// ko thể gộp lại 2 interface
// interface State {
//   name: string;
//   isLoading: boolean;
// }

// interface State {
//   age: number;
// }
// // Sau khi bạn đã định nghĩa một interface, bạn có thể sử dụng nó để khai báo một biến hoặc một tham số hàm có kiểu dữ liệu là State
// let state: State = {
//   name: "Loading",
//   age: 21,
//   isLoading: false,
// };
// Interface

// TYPE
// có thể hơp lại vs nhau, union lại vs nhau
// ko thể khai báo lại type
// type Name = {
//   name: string;
// };

// type Age = {
//   age: number;
// };

// type Person = Name | Age;

// type Guitarlist = {
//   name: string;
//   active: boolean;
//   albums: (string | number)[];
// };

// let evh: Guitarlist = {
//   name: "Khoa",
//   active: true,
//   albums: ["Adele", 22],
// };

// TYPE

// GENERIC TYPE

const handleClick = <Type>(value: Type) => value;

let value = "c";

handleClick<string>(value);
// GENERIC TYPE

// CLASSES
class Person {
  private name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  handle() {
    let value = this.name;
  }
}

const alex = new Person("Khoa", 22);
// CLASSES

let myObj: object;

myObj = [];

console.log(myObj);

let exampleObj = {
  prop1: "Date",
  prop2: true,
};

exampleObj.prop1 = "Khoa";
