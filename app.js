let val;

const list=document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-item:first-child');//Select the first one

val=listItem;
val=list;

//Get child node--return nodelist
val=list.childNodes;//nodelist = li nodes + text nodes***
val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Get children element nodes---return HTML Collection
val=list.children;
val=list.children[1].textContent='Hello';

//Get children of children
val=list.children[3].children[0].id='test-link';
val=list.children[3].children[0];

//First child
val=list.firstChild;//first node
val=list.firstElementChild;//element node

//last child
val=list.lastChild;//last node
val=list.lastElementChild;//element node

//Count child elements
val=list.childElementCount;

//Get parent node
val=listItem.parentNode;//ul element
val=listItem.parentElement;//ul element
val=listItem.parentElement.parentElement;//

//Get next sibling
val=listItem.nextSibling;//#text
val=listItem.nextElementSibling;//li element
val=listItem.nextElementSibling.nextElementSibling;//li element

//Get previous sibling
val=listItem.previousSibling;//#text
val=listItem.previousElementSibling;//null

console.log(val);