const form=document.querySelector('form');
const taskInput=document.getElementById('task');
const heading=document.querySelector('h5');
const select=document.querySelector('select');

//Empty the input field
taskInput.value='';

//EVENT ON FORM
//form.addEventListener('submit',runEvent);

//EVENT ON TASKINPUT
//keydown
//taskInput.addEventListener('keydown',runEvent);
//keyup
//taskInput.addEventListener('keyup',runEvent);
//keypress
//taskInput.addEventListener('keypress',runEvent);
//focus
//taskInput.addEventListener('focus',runEvent);
//blur
//taskInput.addEventListener('blur',runEvent);
//cut
//taskInput.addEventListener('cut',runEvent);
//paste
//taskInput.addEventListener('paste',runEvent);
//copy
//taskInput.addEventListener('copy',runEvent);
//input
//taskInput.addEventListener('input',runEvent);
//change
//select.addEventListener('change',runEvent);





function runEvent(e){
    console.log(`Event Type: ${e.type}`); 

    //get the value of keydown
    //console.log(e.target.value);
    
    //heading.textContent=e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}