const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const filterInput = document.getElementById('filter-input');
const themeBtn = document.getElementById('theme-btn');

// Carrega tarefas do localStorage ou dados fictícios se estiver vazio
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { text: 'Tarefa 1', completed: false },
    { text: 'Tarefa 2', completed: false },
    { text: 'Tarefa 3', completed: true },
  ];
  tasks.forEach(task => addTaskToList(task.text, task.completed));
};

// Atualiza o localStorage
const updateLocalStorage = () => {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      completed: li.querySelector('span').classList.contains('completed'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Adicionar tarefa à lista
const addTaskToList = (text, completed = false) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="${completed ? 'completed' : ''}">${text}</span>
    <span class="completed-message" style="display: ${completed ? 'inline-block' : 'none'};">Concluída</span>
    <div>
      <button class="complete-task">Concluir</button>
      <button class="remove-task">Remover</button>
    </div>
  `;
  taskList.appendChild(li);

  // Adicionar eventos aos botões
  li.querySelector('.complete-task').addEventListener('click', () => {
    li.querySelector('span').classList.add('completed'); // Marca como concluída
    li.querySelector('.completed-message').style.display = 'inline-block'; // Exibe a mensagem "Concluída"
    li.querySelector('div').style.display = 'none'; // Esconde os botões
    updateLocalStorage();
  });

  li.querySelector('.remove-task').addEventListener('click', () => {
    li.remove();
    updateLocalStorage();
  });

  if (completed) {
    li.querySelector('.completed-message').style.display = 'inline-block'; // Exibe a mensagem "Concluída" se já estiver concluída
    li.querySelector('div').style.display = 'none'; // Esconde os botões se a tarefa já estiver concluída
  }
};

// Filtrar tarefas
filterInput.addEventListener('input', () => {
  const filterValue = filterInput.value.toLowerCase();
  document.querySelectorAll('#task-list li').forEach(li => {
    const taskText = li.querySelector('span').textContent.toLowerCase();
    if (taskText.includes(filterValue)) {
      li.style.display = '';
    } else {
      li.style.display = 'none';
    }
  });
});

// Adicionar tarefa
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToList(taskText);
    taskInput.value = '';
    updateLocalStorage();
  }
});

// Carregar tema do localStorage
const loadTheme = () => {
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// Alternar tema
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Carregar tarefas e tema ao iniciar
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  loadTheme();
});