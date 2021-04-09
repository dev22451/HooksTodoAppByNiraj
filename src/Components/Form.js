import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../App.css'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (id, title) => {
        // eslint-disable-next-line array-callback-return
        const newTodo = todos.map((todo) =>
            // eslint-disable-next-line no-unused-expressions
            todo.id === id ? { title, id } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]
    );


    const onInputChange = (event) => {
        setInput(event.target.value);
    }



    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, isChecked: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter Todo Items..." value={input} required onChange={onInputChange} className="task-input" />
            <button className="button-add" type="submit">
                {editTodo ? "UPDATE" : "ADD ITEM"}
            </button>
        </form>
    );
};

export default Form;
