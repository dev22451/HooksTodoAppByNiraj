import React from 'react'
import { FcEmptyTrash, FcSupport } from "react-icons/fc";
import '../App.css'

const TodosList = ({ todos, setTodos, setEditTodo, setIsChecked, isChecked }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }


    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleOnCheck = (index) => {
        // console.log(isChecked);
        let refList = todos;
        if (!refList[index].isChecked)
            refList[index].isChecked = true
        else
            refList[index].isChecked = false

        setIsChecked(refList[index]);
    }
    return (
        <div>
            {todos.map((todo, index) => {
                const { isChecked } = todo
                return (
                    <span key={todo.id} className="list-item">
                        <input type="checkbox" checked={todo.isChecked} className="list" onChange={() => { handleOnCheck(index) }} />
                        {todo.title}
                        {isChecked === true && <span >Completed</span>}
                        <div>

                            <button onClick={() => handleEdit(todo)} className="button-edit task-button">
                                <FcSupport />
                            </button>
                            <button onClick={() => handleDelete(todo)} className="button-delete task-button">
                                <FcEmptyTrash />
                            </button>
                        </div>
                    </span>

                )
            }
            )}
        </div>
    )
}

export default TodosList;
