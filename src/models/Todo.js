import { makeErrorMessage } from "../utils.js";

export default class Todo {
  static MAX_TITLE_LENGTH = 15;
  static MAX_DESCRIPTION_LENGTH = 20;
  static MAX_NOTE_LENGTH = 50;

  // ClASS FIELDS

  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #note;
  #complete;
  #createdAt;

  constructor(
    title = "",
    description = "",
    dueDate = null,
    priority = "",
    note = "",
  ) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#note = note;
    this.#complete = false;
    this.#createdAt = Date.now();
  }

  // GETTERS

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get note() {
    return this.#note;
  }

  get complete() {
    return this.#complete;
  }

  get createdAt() {
    return this.#createdAt;
  }

  //   MUTATORS
  set title(title) {
    const method = "Todo.title";
    let errorMsg = "";

    if (!title || typeof title !== "string" || !title.trim()) {
      errorMsg = `Expecting a non empty string got "${title}"`;
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    title = title.trim();

    if (title.length > Todo.MAX_TITLE_LENGTH) {
      errorMsg = `Expecting a title with characters less than ${Todo.MAX_TITLE_LENGTH}`;
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    this.#title = title;
  }

  set description(description) {
    const method = "Todo.description";
    let errorMsg = "";

    if (
      !description ||
      typeof description !== "string" ||
      !description.trim()
    ) {
      errorMsg = `Expecting a non empty string got "${description}"`;
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    description = description.trim();

    if (description.length > Todo.MAX_DESCRIPTION_LENGTH) {
      errorMsg = `Expecting a title with characters less than ${Todo.MAX_DESCRIPTION_LENGTH}`;
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    this.#description = description;
  }

  set dueDate(dueDate) {
    const method = "Todo.dueDate";
    let errorMsg = "";

    if (
      typeof dueDate !== "number" ||
      !Number.isInteger(dueDate) ||
      dueDate < 0
    ) {
      errorMsg = "Expecting a positive integer greater than or equal to zero.";
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    this.#dueDate = new Date(dueDate);
  }

  set priority(priority) {
    const validPriorities = ["low", "medium", "high"];
    const method = "Todo.priority";
    let errorMsg = "";

    if (
      !priority ||
      typeof priority !== "string" ||
      !validPriorities.includes(priority) ||
      !priority.trim()
    ) {
      errorMsg = `Expecting a valid priority string. Available priorities are: ${validPriorities.join(", ")}`;
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    priority = priority.trim();

    this.#priority = priority;
  }

  set note(note) {
    const method = "Todo.note";
    let errorMsg = "";

    if (
      !note ||
      typeof note !== "string" ||
      note.length > Todo.MAX_NOTE_LENGTH ||
      !note.trim()
    ) {
      errorMsg = `Expecting a string greater than ${Todo.MAX_NOTE_LENGTH}`;
      throw new Error(makeErrorMessage(method, errorMsg));
    }

    note = note.trim();

    this.#note = note;
  }

  markAsCompleted() {
    this.#complete = true;
  }

  unMarkAsCompleted() {
    this.#complete = false;
  }
}
