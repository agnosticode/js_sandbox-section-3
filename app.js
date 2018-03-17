//document.getElementsByClassName

// const items=document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// items[0].style.color="red";
// items[3].textContent="Hello Satinder";

// const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems); 

//document.getElementsByTagName
// let lis=document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color="red";
// lis[3].textContent="Hello Satinder";

// //Covet HTML collection into an Array
// lis=Array.from(lis);
// console.log(lis);

// lis=lis.reverse();
// console.log(lis);

// lis.forEach(function(li,index){
//   console.log(li);
//   li.textContent=`${index}: Hello`;
// })

//document.querySelectorAll
const items=document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function(item,index){
  item.textContent=`${index} Hello`;
});

const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){
  li.style.background='#ccc';
});

liEven.forEach(function(li,index){
  li.style.background='#333';
  li.style.color='#fff';
});