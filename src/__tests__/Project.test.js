import Project from "../models/Project.js";

describe("Project", () => {
  const project = new Project();

  it("should create a todo", () => {
    const data = {
      title: "read a book",
      description: "I want to become a reader",
      dueDate: new Date(2026, 2, 20),
      priority: "high",
    };

    // Create todo in side a project
    project.createTodo(data);

    // Store new Todo Id
    const todoId = Object.keys(project.todos)[0];

    // Use new todo Id to get todo from project
    const todo = project.todos[todoId];

    expect(todo.title).toBe(data.title);
    expect(todo.description).toBe(data.description);
    expect(todo.dueDate).toBe("2026,2,20");
    expect(todo.priority).toBe(data.priority);
    expect(todo.completed).toBe(false);
  });

  it("should update todo title", () => {
    // Uses the todo create in the previous test "should create a todo"
    const todoId = Object.keys(project.todos)[0];

    const todo = project.todos[todoId];

    const newTitle = "Hacked!!!";

    project.updateTodoTitle({ id: todoId, title: newTitle });
    expect(todo.title).toBe(newTitle);
  });

  it("should update todo dueDate", () => {
    const todoId = Object.keys(project.todos)[0];

    const todo = project.todos[todoId];

    const newDueDate = new Date(2027, 1, 22);

    project.updateTodoDueDate({ id: todoId, newDate: newDueDate });

    expect(todo.dueDate).toStrictEqual("2027,1,22");
  });

  it("should update todo description", () => {
    const todoId = Object.keys(project.todos)[0];

    const todo = project.todos[todoId];

    const description = "Hacked real good!!!";

    project.updateTodoDescription({ id: todoId, newDescription: description });

    expect(todo.description).toBe(description);
  });

  it("should update todo priority", () => {
    const todoId = Object.keys(project.todos)[0];

    const todo = project.todos[todoId];

    const priority = "high";

    project.updateTodoPriority({ id: todoId, newPriority: priority });

    expect(todo.priority).toBe(priority);
  });

  it("should mark a todo as completed", () => {
    const todoId = Object.keys(project.todos)[0];

    const todo = project.todos[todoId];

    project.toggleTodoCompletion(todoId);

    expect(todo.completed).toBe(true);
  });

  it("should update it's title", () => {
    const title = "Hacked!!!";
    project.updateTitle({ newProjectTitle: title });
    expect(project.title).toBe(title);
  });

  it("should update it's description", () => {
    const description = "Hacked!!!";
    project.updateDescription({ newDescription: description });
    expect(project.description).toBe(description);
  });
});
