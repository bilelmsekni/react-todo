import React from "react";
import TodoItem from "./TodoItem";
import data from "./data";

function TodosList() {
    const items = data.map(d => <TodoItem key={d.id} title={d.title} completed={d.completed} />);
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {items}
            </ul>
        </div>
    );
}

export default TodosList;
