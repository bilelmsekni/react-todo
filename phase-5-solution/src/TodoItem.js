import React from "react";

function TodoItem(props) {
    return (
        <li className={props.completed ? "completed" : null}>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" type="checkbox" checked={props.completed} onChange={props.updateItem} /> {props.title}
                    <i className="input-helper" />
                </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline" onClick={props.deleteItem} />
            {/* <i className="remove mdi mdi-close-circle-outline" onClick={() => props.deleteItem(props.id)} /> */}
        </li>
    );
}

export default TodoItem;
