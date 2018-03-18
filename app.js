const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.getElementsByTagName("h5");

//Click
//clearBtn.addEventListener('click',runEvent);

//Double click
//clearBtn.addEventListener('dblclick',runEvent);

//Mousedown
//clearBtn.addEventListener('mousedown',runEvent);

//Mouseup
//clearBtn.addEventListener('mouseup',runEvent);

//Mouseenter
//card.addEventListener('mouseenter',runEvent);

//Mouseleave
//card.addEventListener('mouseleave',runEvent);

//Mouseover
//card.addEventListener('mouseover',runEvent);

//Mouseout
//card.addEventListener('mouseout',runEvent);

//Mousemove
card.addEventListener('mousemove',runEvent);

//Event handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    // console.log(`Y-Coordinate: ${e.offsetY}`);
    // console.log(`X-Coordinate: ${e.offsetX}`);
    heading[0].textContent=`X-Coordinate: ${e.offsetX}  Y-Coordinate: ${e.offsetY} `;
    document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetY}, 40)`;
};