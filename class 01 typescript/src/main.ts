// alert("hello world!");
// Type casting...
// let x:string | null = 'malik';
// x = 'muhammad';
// x = null;
// x = [1,2,3];
// console.log(x);


// xxxxxxxxxxxxxxxxxxxxxxxxxx

// let arr: number[] = [10, 20, 30, 40, 50];
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);


// xxxxxxxxxxxxxxxxxxxxxxxxxx

// let obj: { name: string, age: number, email?: string } = {
//   name: 'malik',
//   age: 20,
// }

// obj.email = 'malik@yahoo.com';
// console.log(obj);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// type TObj = {
//   name: string,
//   age: number,
//   email?: string,
//   hobbies?: string[],
//   fun?: () => void,
// }

// let ob: TObj = {
//   name: 'malik',
//   age: 20,
// }
// let ob2: TObj = {
//   name: 'malik',
//   age: 20,
// }

// ob.email = 'malik@yahoo.com';
// ob2.hobbies = ['cricket', 'football', 'hockey'];

// ob.fun = function (): number {
//   console.log('hello world');
//   return 10;
// }
// console.log(ob.fun(), ob2);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// // non mull assertion operator
// const btn = document.getElementById('btn')!;
// const num1 = document.getElementById('inputOne')! as HTMLInputElement;
// const num2 = document.getElementById('inputTwo')! as HTMLInputElement;

// function SumUp(n1: number, n2: number): number {
//   return n1 + n2;
// }


// btn.addEventListener('click', () => {

//   console.log('Sum', SumUp(Number(num1.value), Number(num2.value)));
// });

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

type TProduct = {
  name: string;
  price: number;
  category: string;
}

interface IProduct {
  name: string;
  price: number;
  category: string;
}

let product: IProduct = {
  name: 'bottle',
  price: 2333,
  category: 'goods'
}

console.log(product);


//  union type;
type combineType = string | number;


let x: combineType = 'sdfsdfs';
x = 10;

console.log(x);


// intersection type
type Animal = {
  name: string;
  runningSpeed: number;
}

type Bird = {
  name: string;
  flyingSpeed: number
}

type Creature = Bird & Animal;

let obj: Creature = {
  name: "Tiger",
  runningSpeed: 100,
  flyingSpeed: 300
}


console.log(obj);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

interface ICategory {
  name: string;
  additional_name: string;
  img: string
}

class Category implements ICategory {
  name: string;
  additional_name: string;
  img: string;
  full_name: string

  constructor(data: ICategory) {
    this.name = data.name;
    this.additional_name = data.additional_name;
    this.img = data.img;
    this.full_name = this.getFullName(data.name, data.additional_name);
  }

  getFullName(n: string, fn: string) {
    return `${n} ${fn}`;
  }

}

const data: ICategory[] = [
  {
    name: 'plastic',
    additional_name: 'plastic',
    img: "12212.png"
  },
  {
    name: 'technologies',
    additional_name: 'technologies',
    img: "1221sfsdfsf2.png"
  },
]

let categoryList = data?.map(cat => new Category(cat))
console.log(categoryList);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


class Student {
  private name: string;
  subject: string;
  skills: string[];

  constructor(n: string, sub: string) {
    this.name = n;
    this.subject = sub;
    this.skills = []
  }

  addNewSkill(s: string) {
    this.skills.push(s);
  }

  // getName() {
  //   return this.name;
  // }
  get getName() {
    return this.name;
  }

  addSub(s: string) {
    this.subject = s;
  }
  // set setSub(s:string) {
  //     this.subject = s;
  // }

}

let std = new Student("fasih", 'cs');
std.addNewSkill('c#');
std.addNewSkill('python');
// std.name = 'sdfsdf'
// console.log(std.skills);
console.log(std.getName);

// std.addSub("Malth")
// std.setSub = 'MAths';
console.log(std);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// class Person {
//   constructor(public name: string, public age: number) { }
// }


// let p1 = new Person('ammad', 25);
// console.log(p1);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// class Person {
//   name: string;
//   age: number
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }


// class Teacher extends Person {
//   salary: number;

//   constructor(s: number, n: string, a: number) {
//     super(n, a)
//     this.salary = s
//   }
// }

// let teacher = new Teacher(50000, 'owais', 25);
// console.log(teacher);


// console.log(teacher instanceof Student);
// console.log(teacher instanceof Teacher);



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// let myPromise: Promise<string> = new Promise((res, rej) => {
//   let x = 10;

//   if (x === 10) {
//     setTimeout(() => {
//       res("Done")
//     }, 2000)
//   } else {
//     rej("Failed")
//   }
// })

// myPromise.then(res => console.log(res))
//   .catch(err => console.log(err));


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

interface IUser {
  name: string
}

interface IAdmin {
  role: number
}

interface IPagedResponse {
  page: number;
  size: number;
  lastPage: boolean;
  firstPage: boolean;
}


interface IUsers extends IPagedResponse {
  content: IUser[];
}


interface IAdmins extends IPagedResponse {
  content: IAdmin[];
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// function merged(obj1: any, obj2: any) {
//   return { ...obj1, ...obj2 }
// }


function merged<U extends object, T extends object>(obj1: U, obj2: T) {
  return { ...obj1, ...obj2 }
}


console.log(merged({ name: "Ammad" }, { age: 23 }));
