
import './index.css';
import List from '../List';
import { Todo } from '../../types';


type Props = {
    id: string,
    name: string,
    done: boolean,
    onUpdateTodo: (id: string, done: boolean) => void;
    onDeleteToDoById: (id: string, done: boolean) => void;
};
export default function Item(props: Props) {
    const { id, name, done, onUpdateTodo, onDeleteToDoById } = props;

    const onChangeCheckedBox = () => {
        onUpdateTodo(id, done);
    };

    const onDeleteItem = () => {
        if (window.confirm('Are you sure?'))
            onDeleteToDoById(id, done);
    };
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={onChangeCheckedBox} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={onDeleteItem}>Delete</button>
        </li>
    );
}
// style={{ display: "none" }}

