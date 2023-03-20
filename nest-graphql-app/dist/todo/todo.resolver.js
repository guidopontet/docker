"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const todo_service_1 = require("./todo.service");
const todo_entity_1 = require("./entity/todo.entity");
const dto_1 = require("./dto");
const aggregations_type_1 = require("./types/aggregations.type");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    findAll(statusArgs) {
        return this.todoService.findAll(statusArgs);
    }
    findOne(id) {
        return this.todoService.findOne(id);
    }
    createTodo(createTodoInput) {
        return this.todoService.create(createTodoInput);
    }
    updateTodo(updateTodoInput) {
        return this.todoService.update(updateTodoInput.id, updateTodoInput);
    }
    removeTodo(id) {
        return this.todoService.delete(id);
    }
    totalTodos() {
        return this.todoService.totalTodos;
    }
    pendingTodos() {
        return this.todoService.pendingTodos;
    }
    completedTodos() {
        return this.todoService.completedTodos;
    }
    aggregations() {
        return {
            completed: this.todoService.completedTodos,
            pending: this.todoService.pendingTodos,
            total: this.todoService.totalTodos,
            totalTodosCompleted: this.todoService.totalTodos,
        };
    }
};
__decorate([
    (0, graphql_1.Query)(() => [todo_entity_1.Todo], { name: 'todos' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.StatusArgs]),
    __metadata("design:returntype", Array)
], TodoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => todo_entity_1.Todo, { name: 'todo' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_entity_1.Todo, { name: 'createTodo' }),
    __param(0, (0, graphql_1.Args)('createTodoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTodoInput]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_entity_1.Todo, { name: 'updateTodo' }),
    __param(0, (0, graphql_1.Args)('updateTodoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateTodoInput]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoResolver.prototype, "removeTodo", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Int, { name: 'totalTodos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TodoResolver.prototype, "totalTodos", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Int, { name: 'pendingTodos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TodoResolver.prototype, "pendingTodos", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Int, { name: 'completedTodos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TodoResolver.prototype, "completedTodos", null);
__decorate([
    (0, graphql_1.Query)(() => aggregations_type_1.AggregationsType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", aggregations_type_1.AggregationsType)
], TodoResolver.prototype, "aggregations", null);
TodoResolver = __decorate([
    (0, graphql_1.Resolver)(() => todo_entity_1.Todo),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.resolver.js.map