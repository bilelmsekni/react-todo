import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodosList() {
    const [todos, setTodos] = useState({ value: [], isLoading: true });
    const [newTodo, setNewTodo] = useState("");

    // componentDidMount() {
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(response => response.json())
    //     .then(data => this.setState({ todos: data.slice(0,4), isLoading: false }));
    // }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setTodos({ value: data.slice(0, 4), isLoading: false }));
    }, []);

    const updateItem = id => {
        return () =>
            setTodos(prev => ({
                ...prev,
                value: prev.value.map(i =>
                    i.id !== id ? i : { ...i, completed: !i.completed }
                )
            }));
    };

    const deleteItem = id => {
        return () =>
            setTodos(prev => ({
                ...prev,
                value: prev.value.filter(i => i.id !== id)
            }));
    };

    const updateNewTodo = event => {
        // const {target} = event;
        // const {value} = target;

        // const {target: {value}} = event;
        // console.log(value)
        setNewTodo(event.target.value);
    };

    const addTodo = () => {
        // const {target} = event;
        // const {value} = target;

        // const {target: {value}} = event;
        // console.log(value)

        setTodos(prev => {
            const item = {
                id: prev.value.length + 1,
                completed: false,
                title: newTodo
            };
            return {
                value: [item, ...prev.value]
            };
        });
        setNewTodo("");
    };

    const items = todos.value.map(d => (
        <TodoItem
            key={d.id}
            title={d.title}
            completed={d.completed}
            deleteItem={deleteItem(d.id)}
            updateItem={updateItem(d.id)}
        />
    ));
    return (
        <>
            <div className="add-items d-flex">
                <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                    onChange={updateNewTodo}
                    value={newTodo}
                />
                <button
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    onClick={addTodo}
                >
                    Add
        </button>
            </div>
            <div className="list-wrapper">
                {todos.isLoading ? (
                    <div> Loading ..</div>
                ) : (
                        <ul className="d-flex flex-column-reverse todo-list">{items}</ul>
                    )}
            </div>
        </>
    );
}

export default TodosList;
