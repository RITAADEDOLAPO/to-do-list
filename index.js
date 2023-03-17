let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function displayList() {
	let list = document.getElementById('todo-list');
	list.innerHTML = '';
	for (let i = todoList.length - 1; i >= 0; i--) {
		let item = todoList[i];
		let li = document.createElement('li');
		li.innerText = item;
		let removeButton = document.createElement('button');
		removeButton.innerText = 'Remove';
		removeButton.onclick = function() {
			removeItem(i);
		}
		let editButton = document.createElement('button');
		editButton.innerText = 'Edit';
		editButton.onclick = function() {
			editItem(i);
		}
		li.appendChild(removeButton);
		li.appendChild(editButton);
		list.appendChild(li);
	}
}

function addItem() {
	let newItemInput = document.getElementById('new-item');
	let newItem = newItemInput.value.trim();
	if (newItem === '') {
		return;
	}
	todoList.push(newItem);
	localStorage.setItem('todoList', JSON.stringify(todoList));
	newItemInput.value = '';
	displayList();
}

function removeItem(index) {
	todoList.splice(index, 1);
	localStorage.setItem('todoList', JSON.stringify(todoList));
	displayList();
}

function editItem(index) {
	let newItem = prompt('Enter the new value for this item:', todoList[index]);
	if (newItem === null) {
		return;
	}
	newItem = newItem.trim();
	if (newItem === '') {
		return;
	}
	todoList[index] = newItem;
	localStorage.setItem('todoList', JSON.stringify(todoList));
	displayList();
}

displayList();
