import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            isLoading: true
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => this.setState({ todos: data, isLoading: false }));
    }

    updateItem(id) {
        return () =>
            this.setState(prev => ({
                todos: prev.todos.map(i =>
                    i.id !== id
                        ? i
                        : {
                            ...i,
                            completed: !i.completed
                        }
                )
            }));
    }

    deleteItem(id) {
        return () =>
            this.setState(prev => ({ todos: prev.todos.filter(i => i.id !== id) }));
    }

    render() {
        const items = this.state.todos.map(d => (
            <TodoItem
                key={d.id}
                title={d.title}
                completed={d.completed}
                deleteItem={this.deleteItem(d.id)}
                updateItem={this.updateItem(d.id)}
            />
        ));
        return (
            <div className="list-wrapper">
                {this.state.isLoading ? <div> Loading ..</div> : <ul className="d-flex flex-column-reverse todo-list">{items}</ul>}
            </div>
        );
    }
}

export default TodosList;
