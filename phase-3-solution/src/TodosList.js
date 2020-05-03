import React from "react";

function TodosList() {
    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                <li className="completed">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="checkbox" type="checkbox" defaultChecked /> Learn Angular <i className="input-helper" />
                        </label>
                    </div>
                    <i className="remove mdi mdi-close-circle-outline" />
                </li>

                <li>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Learn React <i className="input-helper" />
                        </label>
                    </div>
                    <i className="remove mdi mdi-close-circle-outline" />
                </li>
            </ul>
        </div>
    );
}

export default TodosList;
