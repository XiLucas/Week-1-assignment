/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/
class Todo {
  constructor() {
    this.todos = [];
  }

  // Method to add a new todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Method to remove a todo by its index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid index");
    }
  }

  // Method to update a todo by its index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Invalid index");
    }
  }

  // Method to get all todos
  getAll() {
    return this.todos;
  }

  // Method to get a specific todo by its index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.log("Invalid index");
      return null;
    }
  }

  // Method to clear all todos
  clear() {
    this.todos = [];
  }
}

// Example usage:
const myTodos = new Todo();
myTodos.add("Learn JavaScript");
myTodos.add("Build a todo app");
console.log(myTodos.getAll()); // Output: ["Learn JavaScript", "Build a todo app"]

myTodos.update(1, "Build a React app");
console.log(myTodos.get(1)); // Output: "Build a React app"

myTodos.remove(0);
console.log(myTodos.getAll()); // Output: ["Build a React app"]

myTodos.clear();
console.log(myTodos.getAll()); // Output: []

module.exports = Todo;
