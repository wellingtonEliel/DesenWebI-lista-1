document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const filterInput = document.getElementById('filter');
    const themeToggleButton = document.getElementById('theme-toggle');
  
    // Carregar tarefas e tema do localStorage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => addTaskToList(task.text, task.completed));
    };
  
    const loadTheme = () => {
      const theme = localStorage.getItem('theme') || 'light-mode';
      document.body.className = theme;
    };
  
    // Adicionar tarefa à lista
    const addTaskToList = (text, completed = false) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="${completed ? 'completed' : ''}">${text}</span>
        <div>
          <button class="complete-task">Concluir</button>
          <button class="remove-task">Remover</button>
        </div>
      `;
      taskList.appendChild(li);
  
      // Adicionar eventos aos botões
      li.querySelector('.complete-task').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
        updateLocalStorage();
      });
  
      li.querySelector('.remove-task').addEventListener('click', () => {
        li.remove();
        updateLocalStorage();
      });
    };
  
    // Atualizar o localStorage
    const updateLocalStorage = () => {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(li => {
        const text = li.querySelector('span').textContent;
        const completed = li.querySelector('span').classList.contains('completed');
        tasks.push({ text, completed });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Adicionar nova tarefa
    addTaskButton.addEventListener('click', () => {
      const text = newTaskInput.value.trim();
      if (text) {
        addTaskToList(text);
        newTaskInput.value = '';
        updateLocalStorage();
      }
    });
  
    // Filtrar tarefas
    filterInput.addEventListener('input', () => {
      const filterText = filterInput.value.toLowerCase();
      taskList.querySelectorAll('li').forEach(li => {
        const text = li.querySelector('span').textContent.toLowerCase();
        li.style.display = text.includes(filterText) ? '' : 'none';
      });
    });
  
    // Alternar tema
    themeToggleButton.addEventListener('click', () => {
      const currentTheme = document.body.className;
      const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
      document.body.className = newTheme;
      localStorage.setItem('theme', newTheme);
    });
  
    // Inicializar
    loadTasks();
    loadTheme();
  });