let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
const deleteBtn = document.createElement("deleteBtn");

function loadEventListeners() {
	// DOM Load event
	document.addEventListener("DOMContentLoaded", getTasks);
}

// Get Tasks from LS
function getTasks() {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
}

// Function that adds div to container on click
addToDoButton.addEventListener("click", function () {
	if (inputField.value === "") {
		// Adds warning if input field is empty
		const warning = document.getElementById("warning");
		warning.style.display = "flex";
	} else {
		// If input field is not empty, warning disappears
		warning.style.display = "none";

		var paragraph = document.createElement("p");

		// Adds paragraph styling
		paragraph.classList.add("paragraph-styling");
		paragraph.innerText = inputField.value;

		// Stores event in LS
		storeTaskInLocalStorage(inputField.value);

		// Adds paragraph to container
		toDoContainer.appendChild(paragraph);

		// Changes input to an empty string
		inputField.value = "";

		// Adds functionality to task
		paragraph.addEventListener("click", function () {
			paragraph.style.textDecoration = "line-through";
		});
		paragraph.addEventListener("dblclick", function () {
			toDoContainer.removeChild(paragraph);
		});
	}
});

// Store Task
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	tasks.push(task);

	localStorage.setItem("tasks", JSON.stringify(tasks));
}
