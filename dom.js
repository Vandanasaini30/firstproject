/*console.log(document);
console.log(document.title);
console.log(document.URL);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.body);
console.log(document.cookie);
console.log(document.head);
console.log(document.links);
console.log(document.images)*/


//get element id

//console.log(document.getElementById('main-header'));
//var headertitle=document.getElementById('header-title');
///var header=document.getElementById('main-header');
///console.log(headertitle);
//headertitle.textContent='hello world';
//headertitle.innerText='good';
//console.log(headertitle.innerText);
//headertitle.innerHTML='<h1>hello</h1>';
//header.style.borderBottom='dotted 3px #000';


//GET ELEMENT BY CLASS name

/*var item=document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[2]);
//item[2].textContent='helloooo';
//item[2].style.fontWeight='bold';
item[2].style.backgroundColor='green';
//item.style.backgroundColor='f4f4f4';

for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';

/*var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
//item[2].textContent='helloooo
//item[2].style.fontWeight='bold';
li[2].style.backgroundColor='green';
//item.style.backgroundColor='f4f4f4';

for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}*/


// query selector

/*var header= document.querySelector('#main-header');
header.style.borderBottom='solid 2px #000';

var input=document.querySelector('input');
input.value='hello';

var submit=document.querySelector('input[type="submit"]');
submit.value='send';

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastchild=document.querySelector('.list-group-item:last-child');
lastchild.style.borderBottom='solid 3px #000';*/

//var secondChild = document.querySelector('.list-group-item:nth-child(2)');
//secondChild.style.backgroundColor = 'green';



//query selector all

//var title=document.querySelectorAll('.title')
///console.log(title);

//title[0].textContent='hello';



var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}

var secondChildren = document.querySelectorAll('.list-group-item:nth-child(2)');
for (var i = 0; i < secondChildren.length; i++) {
    secondChildren[i].style.color = 'green';
}


