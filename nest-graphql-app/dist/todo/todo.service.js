"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("./entity/todo.entity");
let TodoService = class TodoService {
    constructor() {
        this.todos = [
            { id: 1, description: 'Piedra del Alma', done: false },
            { id: 2, description: 'Piedra del Espacio', done: true },
            { id: 3, description: 'Piedra del Poder', done: false },
            { id: 4, description: 'Piedra del Tiempo', done: false },
            { id: 5, description: 'Piedra desde el contenedor', done: true },
        ];
    }
    get totalTodos() {
        return this.todos.length;
    }
    get pendingTodos() {
        return this.todos.filter(todo => todo.done === false).length;
    }
    get completedTodos() {
        return this.todos.filter(todo => todo.done === true).length;
    }
    findAll(statusArgs) {
        const { status } = statusArgs;
        if (status !== undefined)
            return this.todos.filter(todo => todo.done === status);
        return this.todos;
    }
    findOne(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo)
            throw new common_1.NotFoundException(`Todo with id ${id} not found`);
        return todo;
    }
    create(createTodoInput) {
        const todo = new todo_entity_1.Todo();
        todo.description = createTodoInput.description;
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
        this.todos.push(todo);
        return todo;
    }
    update(id, updateTodoInput) {
        const { description, done } = updateTodoInput;
        const todoToUpdate = this.findOne(id);
        if (description)
            todoToUpdate.description = description;
        if (done !== undefined)
            todoToUpdate.done = done;
        this.todos = this.todos.map(todo => {
            return (todo.id === id) ? todoToUpdate : todo;
        });
        return todoToUpdate;
    }
    delete(id) {
        const todo = this.findOne(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        return true;
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map