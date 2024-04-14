import React from 'react';

import { Todo } from '../../types';

import './index.css';


type Props = {
    todos: Todo[];
};

export default function Footer(props: Props) {
    const { todos } = props;
    const changeCheckBox = () => {

    };
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked={todos.filter(todo => todo.done).length === todos.length
                    && todos.length !== 0} onChange={changeCheckBox} />
            </label>
            <span>
                <span> Finished {todos.filter(todo => todo.done).length} </span> / total {todos.length}
            </span>
            <button className="btn btn-danger">Delete Finished Tasks</button>
        </div>
    );
}
