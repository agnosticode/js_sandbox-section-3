//Set Local Storage Item
//localStorage.setItem('name','John');
//localStorage.setItem('age','30');

//Set Session Storage Item
//sessionStorage.setItem('name','beth');

//Remove Item from Storage
//localStorage.removeItem('name');

//get Item form Storage
//const name=localStorage.getItem('name');
//const age=localStorage.getItem('age');

//Clear Storage
//localStorage.clear();

//console.log(name,age);

document.querySelector('form').addEventListener('submit',function(e){
    const task=document.querySelector('#task').value;
    console.log(task);
    let tasks;
    if(localStorage.getItem('task')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('task'));
    }
    tasks.push(task);
    localStorage.setItem('task',JSON.stringify(tasks));
    e.preventDefault();
});

tasks=JSON.parse(localStorage.getItem('task'));
tasks.forEach(function(task){
    console.log(task);
});