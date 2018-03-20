//Event Bubbling
// cardTitle=document.querySelector('.card-title');
// cardTitle.addEventListener('click',function(){
//     console.log(cardTitle);
// });

// cardContent=document.querySelector('.card-content');
// cardContent.addEventListener('click',function(){
//     console.log(cardContent);
// });

// card=document.querySelector('.card');
// card.addEventListener('click',function(){
//     console.log(card);
// });

// col=document.querySelector('.col');
// col.addEventListener('click',function(){
//     console.log(col);
// });

//Event delegation
// const delItem=document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);

//Instead of puttin event listerner on individual element let put it on the parent 
document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    // if(e.target.parentElement.className==='delete-item secondary-content')
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target);
        e.target.parentElement.parentElement.remove();
    };
};