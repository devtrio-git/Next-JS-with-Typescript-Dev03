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


// non mull assertion operator
const btn = document.getElementById('btn')!;
const num1 = document.getElementById('inputOne')! as HTMLInputElement;
const num2 = document.getElementById('inputTwo')! as HTMLInputElement;

function SumUp(n1: number, n2: number): number {
  return n1 + n2;
}


btn.addEventListener('click', () => {

  console.log('Sum', SumUp(Number(num1.value), Number(num2.value)));
});

