import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { Todo } from './entity/todo.entity';
import { StatusArgs } from './dto/args/status.args';
export declare class TodoService {
    private todos;
    get totalTodos(): number;
    get pendingTodos(): number;
    get completedTodos(): number;
    findAll(statusArgs: StatusArgs): Todo[];
    findOne(id: number): Todo;
    create(createTodoInput: CreateTodoInput): Todo;
    update(id: number, updateTodoInput: UpdateTodoInput): Todo;
    delete(id: number): Boolean;
}
