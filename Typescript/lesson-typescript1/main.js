var car = "yamaha";
var num = 2;
var isLoading = false;
/**\
 * OBJECT
 */
var house = {
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
var products = [];
//lỗi ko thuộc kiểu never
products.push("d");
console.log(products);
// ARRAY
/// STRING
var names = ["Khoa", "Hà"];
var address = [];
address.push("hanh");
console.log(address);
// STRING
// NUMBER
var number = [];
number.push(1);
console.log(number);
// NUMBER
// OBJECT ARRAY
var people = [];
people.push({ name: "Khoa", age: 23 });
console.log(people);
// optional parameter
var addAll = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(2, 1));
// FUNCTION
// UNION
// kết hợp những type lại vs nhau
var price;
(price = "khoa"), (price = 2);
var body = {
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
var handleClick = function (value) { return value; };
var value = "c";
handleClick(value);
// GENERIC TYPE
// CLASSES
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.handle = function () {
        var value = this.name;
    };
    return Person;
}());
var alex = new Person("Khoa", 22);
// CLASSES
var myObj;
myObj = [];
console.log(myObj);
var exampleObj = {
    prop1: "Date",
    prop2: true,
};
exampleObj.prop1 = "Khoa";
