import Todo from "./Todo.js";

export default class Project {
  // CLASS FIELDS

  #id;
  #title;
  #todos;
  #createdAt;

  constructor(title = "") {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#todos = {};
    this.#createdAt = Date.now();
  }

  // GETTERS

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get todos() {
    return this.#todos;
  }

  get createdAt() {
    return this.#createdAt;
  }

  // MUTATORS

  addTodo(...data) {
    const todo = new Todo(...data);
    this.#todos[todo.id] = todo;
  }
}
