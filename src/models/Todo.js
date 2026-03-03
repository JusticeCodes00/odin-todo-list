export default class Todo {
  MAX_PRIORITY_NUMBER = 3;
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.completed = false;
  }
}
