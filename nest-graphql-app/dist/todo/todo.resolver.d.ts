import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';
import { AggregationsType } from './types/aggregations.type';
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(statusArgs: StatusArgs): Todo[];
    findOne(id: number): Todo;
    createTodo(createTodoInput: CreateTodoInput): Todo;
    updateTodo(updateTodoInput: UpdateTodoInput): Todo;
    removeTodo(id: number): Boolean;
    totalTodos(): number;
    pendingTodos(): number;
    completedTodos(): number;
    aggregations(): AggregationsType;
}
