const url = 'http://localhost:3000/users';
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const userList = document.getElementById('userList');

// Create (POST)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const newUser = { name: nameInput.value };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
  .then(data => {
    nameInput.value = '';
    fetchUsers();
  });
});

// Read (GET)
function fetchUsers() {
  fetch(url)
    .then(res => res.json())
    .then(users => {
      userList.innerHTML = '';
      users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${user.name} 
          <button onclick="deleteUser('${user.id}')">Delete</button>
          <button onclick="editUser('${user.id}', '${user.name}')">Edit</button>
        `;
        userList.appendChild(li);
      });
    });
}

// Delete (DELETE)
function deleteUser(id) {
  fetch(`${url}/${id}`, { method: 'DELETE' })
    .then(() => fetchUsers());
}

// Update (PUT)
function editUser(id, oldName) {
  const newName = prompt("Edit name:", oldName);
  if (newName) {
    fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })
    })
    .then(() => fetchUsers());
  }
}

fetchUsers();
