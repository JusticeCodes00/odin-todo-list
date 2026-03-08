import Todo from "../models/Todo.js";

describe("Todo", () => {
  it("should store todo data", () => {
    const data = {
      title: "read a book",
      description: "I want to become a reader",
      dueDate: new Date(2026, 3, 20),
      priority: "high",
    };
    const todo = new Todo(data);

    expect(todo.title).toBe(data.title);
    expect(todo.description).toBe(data.description);
    expect(todo.dueDate).toBe(data.dueDate);
    expect(todo.priority).toBe(data.priority);
    expect(todo.completed).toBe(false);
  });
});
