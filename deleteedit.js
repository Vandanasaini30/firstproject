

/*var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//adding description
var desp=document.getElementById('description');
//adding filter
var filter=document.getElementById('filter');



// Form submit event
form.addEventListener('submit', addItem);
//delete event

itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItem);


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
//create edit button
var edit=document.createElement('button');
dtn.className='btn-edit btn-sm float-right';
dtn.appendChild(document.createTextNode('edit'));
li.appendChild(edit);


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


function filterItem(e)
{
  var text=e.target.value.toLowerCase();
  {

   var items= itemList.getElementsByTagName('li');
   //convert to an array

   Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !=-1)
    {
      item.style.display='block';
    }
    else{
      item.style.display='none';
    }

   });
  }
}
*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;
  const description=document.getElementById('description').value;

  // Create new li element
  const li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  var newtext=document.createTextNode(newItem);
  var descri=document.createTextNode(description);

  li.appendChild(newtext);
  li.appendChild(descri);


  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

//create  edit button element
for(let i=0;i<itemList.length;i++){
const editBtn=document.createElement('button');
editBtn.className='btn-edit btn-sm float-right';
editBtn.appendChild(document.createTextNode('EDIT'));
itemList[i].appendChild(editBtn);
}
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}