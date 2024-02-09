let greet: string = "hello";
console.log(greet);

let userid = 1;
userid.toFixed();
function getUpper(val) {
  return val.toUpperCase();
}
getUpper(5);
const login = (name: string, email: string, isPaid: boolean = false) => {};
login("h", "g");
function add(a: number, b: number): number {
  return a + b;
}
function greets(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello!");
  }
}
interface Person {
  name: string;
  age: number;
  email?: string;
}

const person: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, task: "Complete homework", completed: false },
  { id: 2, task: "Go to the gym", completed: true },
  { id: 3, task: "Buy groceries", completed: false },
];
type Result = number | string;

function processResult(result: Result): void {
  if (typeof result === "number") {
    console.log(`The result is ${result}.`);
  } else {
    console.log(`The result is "${result}".`);
  }
}

processResult(10);
processResult("Error");
interface Circle {
  radius: number;
  area(): number;
}

const circle: Circle = {
  radius: 5,
  area() {
    return Math.PI * this.radius ** 2;
  },
};

console.log("Area of the circle:", circle.area());
interface Car {
  readonly make: string;
  readonly model: string;
  readonly year: number;
}

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

interface Dictionary {
  [key: string]: string;
}

const colors: Dictionary = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

console.log(colors.red);
interface MathOperation {
  add: (x: number, y: number) => number;
  subtract: (x: number, y: number) => number;
}

const calculator: MathOperation = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));
interface Address {
  street: string;
  city: string;
  zip: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

const person: Person = {
  name: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
};

console.log("Person's address:", person.address.street, person.address.city);
interface Animal {
  name: string;
  makeSound(): void;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  breed: "Labrador",
  makeSound() {
    console.log("Woof!");
  },
};

dog.makeSound(); // Output: Woof!
type Employee = {
  id: number;
  name: string;
  department: string;
};

const employee: Employee = {
  id: 1,
  name: "John Doe",
  department: "Engineering",
};

console.log("Employee:", employee);

export {};
