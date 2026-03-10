import Todo from "./Todo.js";

export default class Project {
  static VALID_PRIORITIES = ["high", "medium", "low"];

  constructor(title, description) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.todos = {};
  }

  createTodo = ({ title, description, dueDate, priority } = {}) => {
    dueDate = this.formatDate(dueDate);
    const todo = new Todo({ title, description, dueDate, priority });

    this.todos[todo.id] = todo;
  };

  updateTodoTitle = ({ id, title } = {}) => {
    if (title && typeof title != "string")
      throw new Error("new title should be a string.");

    const todo = this.findTodo(id);

    todo.title = title;
  };

  updateTodoDescription = ({ id, newDescription } = {}) => {
    if (newDescription && typeof newDescription != "string")
      throw new Error("new description should be a string.");

    const todo = this.findTodo(id);

    todo.description = newDescription;
  };

  updateTodoDueDate = ({ id, newDate } = {}) => {
    if (newDate && isNaN(newDate.getTime()))
      throw new Error("new dueDate should be a valid date object.");

    const todo = this.findTodo(id);

    todo.dueDate = this.formatDate(newDate);
  };

  updateTodoPriority = ({ id, newPriority } = {}) => {
    const todo = this.findTodo(id);

    todo.priority = newPriority;
  };

  toggleTodoCompletion = (id) => {
    const todo = this.findTodo(id);

    todo.completed = !todo.completed;
  };

  updateTitle = ({ newProjectTitle } = {}) => {
    this.title = newProjectTitle;
  };

  updateDescription = ({ newDescription } = {}) => {
    this.description = newDescription
  };

  formatDate = (date) =>
    `${date.getFullYear()},${date.getMonth()},${date.getDate()}`;

  findTodo = (id) => {
    if (!this.todos[id]) throw new Error("Todo not found.");
    return this.todos[id];
  };
}
