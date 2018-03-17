//document.getElementById()

// console.log(document.getElementById('task-title'))

// //Get things from the element
// console.log(document.getElementById('task-title').id);//task-title
// console.log(document.getElementById('task-title').className);//nothing-because we don't have class in this element 

// const taskTitle=document.getElementById('task-title'); 

// //Change styling
// taskTitle.style.background='#333';
// taskTitle.style.color='#fff';
// taskTitle.style.padding='5px';
// //document.getElementById('task-title').style.display='none';//disappear*****

// //Change Content
// taskTitle.textContent='Task List';
// taskTitle.innerText='My Tasks';
// taskTitle.innerHTML='<span style="color:red">Task List</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));//first One

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='Hello World';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';


