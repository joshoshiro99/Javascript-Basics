const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text content!';
container.appendChild(content);

const element1 = document.createElement('p');
element1.classList.add('element1');
element1.textContent = "Hey I'm red!";
element1.style.color = "Red";
container.appendChild(element1);

const element2 = document.createElement('h3');
element2.classList.add('element2');
element2.textContent = "I'm a blue h3!";
element2.style.color = "Blue";
container.appendChild(element2);

const divElement = document.createElement('div');
divElement.classList.add('divElement');
divElement.style.backgroundColor = "Pink";
divElement.style.borderStyle = "solid";
container.appendChild(divElement);

const h1Element = document.createElement('h1');
h1Element.classList.add('h1Element');
h1Element.textContent = "I'm in a div!";
divElement.appendChild(h1Element);

const element3 = document.createElement('p');
element3.classList.add('element3');
element3.textContent = "ME TOO";
divElement.appendChild(element3);

//method 2:
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

//method 3:
const btn3 = document.querySelector('#btn2');
btn3.addEventListener('click', () => {
	alert("Hello World!");
});
