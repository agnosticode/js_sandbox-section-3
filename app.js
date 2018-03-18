//Replace Element


//Create Element
const newHeading=document.createElement('h2');
//Add id
newHeading.id='task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading=document.getElementById('task-title');
//Parent
const cardAction=document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading,oldHeading);

//Remove element
const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

//Classes and Attribute
const firstLi=document.querySelector('li:first-child');
const link=firstLi.children[0];

let val;

//CLASSES
val=link.className;//String of classes
val=link.classList;//DOM token list
val=link.classList[0];
//Add class
link.classList.add('test');
//remove class
link.classList.remove('test');
val=link;

//ATTRIBUTES
//get attribute
val=link.getAttribute('href');
//setAttribute
val=link.setAttribute('href','https://www.google.com');
//check if attribute
val=link.hasAttribute('href');//true
//remove attribute
//val=link.removeAttribute('href');
val=link;

console.log(val);