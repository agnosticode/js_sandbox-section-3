// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('Hello World');
//     e.preventDefault();
// });

//Put named function
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    //console.log('Hello world');
    let val;

    val=e;

    //Event target element
    val=e.target;
    val=e.target.id;
    val=e.target.className;
    val=e.target.classList;

    e.target.innerText="HELLO";

    //Event type
    val=e.type;
    //TypeStamp
    val=e.timeStamp;
    //Event coordinate relative to window
    val=e.clientY;
    val=e.clientX;
    //Event coordinate relative to element itself
    val=e.offsetY;
    val=e.offsetX;


    console.log(val);
};