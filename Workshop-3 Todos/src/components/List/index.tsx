import { Todo } from '../../types';
import Item from '../Item';

import './index.css';

type Props = {
    todos: Todo[],
    onUpdateTodo: (id: string, done: boolean) => void;
    onDeleteToDoById: (id: string, done: boolean) => void;

};

export default function List(props: Props) {

    const { todos, onUpdateTodo, onDeleteToDoById } = props;

    return (
        <ul className="todo-main">

            {todos.map((todo) =>
                <Item key={(todo.id)}
                    {...todo}
                    onUpdateTodo={onUpdateTodo}
                    onDeleteToDoById={onDeleteToDoById} />)}
        </ul>

    );
}
