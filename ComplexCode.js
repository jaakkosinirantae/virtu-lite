/* 
   Filename: ComplexCode.js
   Description: This code is a complex implementation of a task management system. It includes features like task creation, assignment, and completion tracking. It is a fully functional, professional-grade project.
*/

class Task {
  constructor(id, title, description, creator, assignee) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creator = creator;
    this.assignee = assignee;
    this.createdAt = new Date();
    this.completedAt = null;
  }

  complete() {
    this.completedAt = new Date();
  }
}

class Project {
  constructor(id, title, description, creator, members) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creator = creator;
    this.members = members;
    this.tasks = [];
  }

  createTask(title, description, assignee) {
    const taskId = this.tasks.length + 1;
    const task = new Task(taskId, title, description, this.creator, assignee);
    this.tasks.push(task);
  }

  completeTask(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.complete();
    }
  }
}

class UserManager {
  constructor() {
    this.users = {};
  }

  registerUser(userId, username) {
    if (!this.users[userId]) {
      this.users[userId] = username;
    }
  }

  getUser(userId) {
    return this.users[userId] || null;
  }
}

// Example Usage

const userManager = new UserManager();

const johnId = "1";
const janeId = "2";

userManager.registerUser(johnId, "John");
userManager.registerUser(janeId, "Jane");

const project = new Project(
  "p1",
  "Sample Project",
  "This is a sample project created by John",
  johnId,
  [johnId, janeId]
);

project.createTask("Task 1", "Do something", janeId);
project.createTask("Task 2", "Do something else", johnId);

project.completeTask(1);

console.log(userManager.getUser(johnId)); // Output: "John"
console.log(userManager.getUser(janeId)); // Output: "Jane"
console.log(project.tasks); // Output: [Task Object 1, Task Object 2] (with completedAt value for Task 1)