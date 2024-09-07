

function loadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUser() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => diaplayUsers(data))
}

function diaplayUsers(users){
  const displayUser =  document.getElementById('user')
  const displAddress = document.getElementById('address')

  for(const user of users){
    console.log(user);
    const liUser = document.createElement('li');
    const liAddress = document.createElement('li');
    liUser.innerText = user.name
    liAddress.innerText = user.address.city;

    displayUser.appendChild(liUser)
    displAddress.appendChild(liAddress)
  }
}