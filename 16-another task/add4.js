// Список дел
let ToDoList = {
  tasks: [],

  // Метод для добавления новой задачи
  addTask: function (task) {
    this.tasks.push(task);
  },

  // Метод для удаления задачи по id
  deleteTask: function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  // Метод для обновления имени или приоритета по id
  updateTask: function (id, newName, newPriority) {
    this.tasks.forEach(task => {
      if (task.id === id) {
        if (newName) {
          task.title = newName;
        }
        if (newPriority) {
          task.priority = newPriority;
        }
      }
    });
  },

  // Метод для сортировки задач по приоритету
  sortByPriority: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};


const newTask = {
  id: 1,
  title: 'тест',
  description: 'описание',
  priority: 0
};

ToDoList.addTask(newTask);

ToDoList.deleteTask(1);

ToDoList.updateTask(1, 'новое имя', 1);

ToDoList.sortByPriority();



ToDoList.addTask({ 'title': 'Помыть посуду', id: 1, priority: 1 });
ToDoList.addTask({ 'title': 'Сделать покупки', id: 2, priority: 2 });
ToDoList.addTask({ 'title': 'Постирать белье', id: 3, priority: 3 });

console.log(ToDoList.tasks); 
ToDoList.updateTask(2, 'Сделать уборку', 1);
console.log(ToDoList.tasks); 
ToDoList.sortByPriority();
console.log(ToDoList.tasks);
ToDoList.deleteTask(2);
console.log(ToDoList.tasks);