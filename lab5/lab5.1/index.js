window.addEventListener('load', function() {
    let taskInput = document.getElementById('taskInput');
    let addButton = document.querySelector('#addButton');
    let taskList = document.querySelector('#taskList');
    let DoneBox = document.querySelectorAll('#DoneBox');
    addButton.addEventListener('click', function() {
        let taskText = taskInput.value;
        if (taskText) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.className = 'done-column';
            td1.innerHTML = `<input type="checkbox" id="DoneBox">`;
            let td2 = document.createElement('td');
            td2.className = 'task-column';
            td2.innerText = taskText;
            let td3 = document.createElement('td');
            td3.className = 'delete-column';
            td3.innerHTML = `<button class="delete-btn">&#128465;</button>`;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            taskList.appendChild(tr);
            taskInput.value = '';
            taskList.addEventListener('click', function(e) {
                if (e.target.classList.contains('delete-btn')) {
                    let tr = e.target.parentElement.parentElement;
                    taskList.removeChild(tr);
                }
                if(e.target.id == 'DoneBox'){
                    console.log(e.target);
                    if (e.target.checked) {
                        e.target.parentElement.nextElementSibling.style.textDecoration = 'line-through';
                    } else {
                        e.target.parentElement.nextElementSibling.style.textDecoration = 'none';
                    }
                }
            });
            } 
        else {
            alert('Please enter a task.');
        }
    });
}); //load end