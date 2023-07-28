//travesing dom

//parentNode

var itemList= document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);


//child node

console.log(itemList.childNodes);

//childern
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='pink';

//firstchild

console.log(itemList.firstChild);

//firstElementchild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello';

//lastchild
console.log(itemList.lastChild);
//lastChildelement

console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontWeight='bold';

//nextsibling
console.log(itemList.nextSibling);

//nextElementsibling

console.log(itemList.nextElementSibling);


//previoussibling

console.log(itemList.previousSibling);

//previous element sibling

console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.backgroundColor='yellow';

//create element

var newEle=document.createElement('div');
//add class
newEle.className='hello';
//add id
newEle.id='helloo';

//add attribute
newEle.setAttribute('titile','hello');
console.log(newEle);

//create textnode

var neweletext=document.createTextNode('hello world');
console.log(neweletext);

//add text to div
newEle.appendChild(neweletext);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newEle);
container.insertBefore(newEle,h1);

newEle.style.fontSize='56px';




