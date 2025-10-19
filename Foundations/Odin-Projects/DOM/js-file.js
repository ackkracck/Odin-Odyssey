// gets the container
const container = document.getElementById('container');

const firstp = document.createElement('p');
firstp.textContent = 'Hey I\'m red!';
firstp.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = 'I\'m a div';
const secondp = document.createElement('p');
secondp.textContent = 'ME TOO!';
div.appendChild(h1);
div.appendChild(secondp);
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';

// appends to page
container.appendChild(firstp);
container.appendChild(h3);
container.appendChild(div);

/*
// created the working div 
const work = document.createElement('div');

// created the p element
const p = work.appendChild(document.createElement('p'));
p.textContent = 'Hey I\'m red!';

// creating the h3 element
const h3 = work.appendChild(document.createElement('h3'));
h3.textContent = 'I\'m a blue h3!';

// applying style
p.style.color = 'red';
h3.style.color = 'blue';


// STEP 3 OF THE EXERCISE
const secondWork = document.createElement('div');
const h1 = secondWork.appendChild(document.createElement('h1'));
h1.textContext = 'I\'m in a div';
const secondp = secondWork.appendChild(document.createElement('p'));
secondp.textContent('ME TOO!');
secondWork.appendChild(h1);
secondWork.appendChild(secondp);

// appending work to the DOM
document.body.appendChild(work);
document.body.appendChild(secondWork);
*/