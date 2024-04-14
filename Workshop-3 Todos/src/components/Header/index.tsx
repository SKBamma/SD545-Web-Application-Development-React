import React, { KeyboardEvent } from 'react';
import { nanoid } from 'nanoid';
import './index.css';
import { Todo } from '../../types';

type Props = {
    onAddNewTodo: (todo: Todo) => void;
};
export default function Header(props: Props) {

    const { onAddNewTodo } = props;

    const addTodo = (e: KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (value.trim()) {
            if (e.key === 'Enter') {
                onAddNewTodo(
                    {
                        id: nanoid(),
                        name: value,
                        done: false
                    });
                e.currentTarget.value = '';
                e.currentTarget.focus();
            }
        } else {
            alert("Task Can not be added with empty estring");
        }
    };
    return (
        <div className="todo-header">
            <input type="text" placeholder="Enter task name" onKeyUp={addTodo} />
        </div>
    );
}
