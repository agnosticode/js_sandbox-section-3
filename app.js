let val;

val=document;
val=document.all;//Collection of elements
val=document.all[0];//can access easy element by index
val=document.all.length;//43
val=document.head;//Head element accessed
val=document.body;//body element accessed
val=document.doctype;//doctype accessed
val=document.domain;
val=document.URL;
val=document.characterSet;//UTF-8
val=document.contentType;//text/html

//Can select elements but not recommended
val=document.forms;
val=document.forms[0];//accessed form
val=document.forms[0].id;//task-form
val=document.forms[0].method;//get
val=document.forms[0].action;//e.g index.php

val=document.links;//Collection of six links
val=document.links[0];//fiest link accessed
val=document.links[0].id;
val=document.links[0].className;//accessed classes
val=document.links[0].classList;//Collection of classes
val=document.links[0].classList[0];//Sepecfic class

val=document.images;//Empty colleciton-don't have any images

val=document.scripts;//Colleciton of scripts
val=document.scripts[2].getAttribute('src');//app.js


//using forEach without coverting them to array---ERROR
let scripts=document.scripts;
// val=scripts.forEach(function(script){
//   console.log(script);
// })

//Convert Collections into an array
let scriptsArr=Array.from(scripts);

val=scriptsArr.forEach(function(script){
  console.log(script);
})



console.log(val);