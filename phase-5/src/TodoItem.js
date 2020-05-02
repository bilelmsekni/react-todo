import React from "react";

function TodoItem(props) {
    return (
        <li className={props.completed ? "completed" : null}>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" type="checkbox" defaultChecked={props.completed} /> {props.title}
                    <i className="input-helper" />
                </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline" />
        </li>
    );
}

export default TodoItem;