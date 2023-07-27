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


//GET ELEMENT BY CLASSE name

var item=document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[2]);
//item[2].textContent='helloooo';
//item[2].style.fontWeight='bold';
item[2].style.backgroundColor='green';
//item.style.backgroundColor='f4f4f4';

for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}
