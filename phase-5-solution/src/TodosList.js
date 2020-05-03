import React, { Component } from "react";
import TodoItem from "./TodoItem";
import data from "./data";

class TodosList extends Component {

    constructor() {
        super();
        this.state = {
            todos: data
        }
        // this.deleteItem = this.deleteItem.bind(this)
    }

    updateItem(id) {
        return () => this.setState(prev => ({
            todos: prev.todos.map(i => i.id !== id ? i : {
                ...i,
                completed: !i.completed
            })
        }))
    }

    deleteItem(id) {
        return () => this.setState(prev => ({ todos: prev.todos.filter(i => i.id !== id) }))
    }

    // deleteItem(id) {
    //     this.setState(prev =>
    //     ({todos: prev.todos.filter(t=> t.id !== id)})
    //     );
    //   }

    // deleteItem = id => {
    //   console.log(id)
    //   this.setState(prev => ({ todos: prev.todos.filter(t => t.id !== id) }));
    // }

    render() {
        const items = this.state.todos.map(d => <TodoItem
            key={d.id}
            title={d.title}
            completed={d.completed}
            deleteItem={this.deleteItem(d.id)}
            updateItem={this.updateItem(d.id)}
        // updateItem={this.updateItem}
        />);
        return (
            <div className="list-wrapper">
                <ul className="d-flex flex-column-reverse todo-list">
                    {items}
                </ul>
            </div>
        );
    }
}

export default TodosList;