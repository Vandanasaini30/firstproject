

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
//delete event

itemList.addEventListener('click',removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));
  

  //create delete button
var dtn=document.createElement('button');
dtn.className='btn btn-danger btn-sm float-right delete';
dtn.appendChild(document.createTextNode('x'));

//append button to li
li.appendChild(dtn);
  //append li to list
itemList.appendChild(li);
}


//remove item

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
    if(confirm('are ypu sure?'))
    var li=e.target.parentElement;
    itemList.removeChild(li);
    }
}

