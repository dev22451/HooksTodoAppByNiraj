import React from 'react'
import { FcCheckmark, FcEmptyTrash, FcSupport } from "react-icons/fc";
import '../App.css'

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplte = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                } return item;

            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    return (
        <div>
            {todos.map((todo) => (
                <li key={todo.id} className="list-item">
                    <input type="checkbox" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />{todo.title}
                    <div>
                        <button onClick={() => handleComplte(todo)} className="button-complete task-button">
                            <FcCheckmark />
                        </button>
                        <button onClick={() => handleEdit(todo)} className="button-edit task-button">
                            <FcSupport />
                        </button>
                        <button onClick={() => handleDelete(todo)} className="button-delete task-button">
                            <FcEmptyTrash />
                        </button>
                    </div>
                </li>

            )
            )}
        </div>
    )
}

export default TodosList;
