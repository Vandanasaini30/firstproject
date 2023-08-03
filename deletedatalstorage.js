function onlocalstorage(event)
{
    event.preventDefault();
    const username=event.target.name.value;
    const useremail=event.target.email.value;
    const userno=event.target.number.value;

    const obj={
      username,
      useremail,
      userno,
    }
    localStorage.setItem(obj.useremail,JSON.stringify(obj))
    showonscreen(obj)
}
function showonscreen(obj)
{
    const parentele=document.getElementById('listofitem');

  //  parentele.innerHTML=parentele.innerHTML+`<li>${obj.username}- ${obj.useremail}- ${obj.userno}-<button type=delete>delete</button></li>`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `${obj.username} - ${obj.useremail} - ${obj.userno} - <button class="delete-btn">delete</button>`;
    parentele.appendChild(listItem);

    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(obj.useremail);
        listItem.remove();
    });
}




