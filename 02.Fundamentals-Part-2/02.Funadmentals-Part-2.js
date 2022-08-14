const name = `Walter`;
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one} ${two}`;
console.log(joined);

const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to meet you!`);
}

button.addEventListener('click',greet);

const intro = 'Front ';
const number = 242;
console.log(`${name}${intro}`);

const myString = '123';
const myNum = Number(myString);
console.log(myNum);

const  myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

const song = 'Fight the youth';
const score = 9;
const highestscore = 10;
const output =  `I like song ${song}. I gave it a score of ${score/highestscore * 100}%.`;
console.log(output);