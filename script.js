let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");

    li.innerHTML = `
      <div class="task-header">
        <img 
          src="images/${task.completed ? 'checked.png' : 'unchecked.png'}" 
          alt="${task.completed ? 'Checked' : 'Unchecked'}" 
          class="icon"
          onclick="toggleComplete(${index})"
        />
        <span class="task-text">${task.text}</span>
        <div class="task-controls">
          <img src="images/edit.png" alt="Edit" class="icon" onclick="editTask(${index})" />
          <img src="images/delete.png" alt="Delete" class="icon" onclick="deleteTaskAnimated(${index}, this)" />
        </div>
      </div>
      <small>
        <img src="images/calendar.png" alt="Due Date" /> ${task.due || 'No date'}
        &nbsp; | &nbsp;
        <img src="images/tag.png" alt="Category" /> ${task.category}
        &nbsp; | &nbsp;
        <img src="images/priority.png" alt="Priority" /> ${task.priority}
      </small>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const text = document.getElementById("task-input").value.trim();
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("category").value;
  const due = document.getElementById("due-date").value;

  if (text === "") {
    alert("Task can't be empty.");
    return;
  }

  tasks.push({ text, completed: false, priority, category, due });
  saveTasks();
  renderTasks();

  document.getElementById("task-input").value = "";
  document.getElementById("due-date").value = "";
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit task", tasks[index].text);
  if (newText && newText.trim()) {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

function deleteTaskAnimated(index, el) {
  const li = el.closest(".task");
  li.classList.add("fade-out");
  setTimeout(() => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }, 300);
}

function toggleTheme() {
  document.body.classList.toggle("light");

  const toggle = document.getElementById("toggle-mode");

  if (document.body.classList.contains("light")) {
    // Light mode active, show moon to switch to dark
    toggle.textContent = "🌙";
  } else {
    // Dark mode active, show sun to switch to light
    toggle.textContent = "🌞";
  }
}

// Initialize toggle icon on page load
window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-mode");
  if (document.body.classList.contains("light")) {
    toggle.textContent = "🌙";
  } else {
    toggle.textContent = "🌞";
  }
});

document.getElementById("add-btn").addEventListener("click", addTask);

renderTasks();
