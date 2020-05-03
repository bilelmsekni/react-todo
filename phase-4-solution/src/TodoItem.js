import React from "react";
// import PropTypes from 'prop-types';

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

// TodoItem.propTypes = {
//     completed: PropTypes.boolean,
//     title: PropTypes.string,
//     test: PropTypes.number.isRequired
// }

// TodoItem.defaultProps = {
//     title: "default Title",
//     completed: false
// }

export default TodoItem;