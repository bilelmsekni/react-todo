import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            isLoading: true,
            newTodo: ""
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => this.setState({ todos: data.slice(0, 4), isLoading: false }));
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

    updateNewTodo = event => {
        // const {target} = event;
        // const {value} = target;

        // const {target: {value}} = event;
        // console.log(value)

        this.setState({
            newTodo: event.target.value
        });
    };

    addTodo = () => {
        // const {target} = event;
        // const {value} = target;

        // const {target: {value}} = event;
        // console.log(value)
        const newTodo = {
            id: this.state.todos.length + 1,
            completed: false,
            title: this.state.newTodo
        };

        this.setState({
            todos: [newTodo, ...this.state.todos],
            newTodo: ""
        });
    };

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
            <>
                <div className="add-items d-flex">
                    <input
                        type="text"
                        className="form-control todo-list-input"
                        placeholder="What do you need to do today?"
                        onChange={this.updateNewTodo}
                        value={this.state.newTodo}
                    />
                    <button
                        className="add btn btn-primary font-weight-bold todo-list-add-btn"
                        onClick={this.addTodo}
                    >
                        Add
          </button>
                </div>
                <div className="list-wrapper">
                    {this.state.isLoading ? (
                        <div> Loading ..</div>
                    ) : (
                            <ul className="d-flex flex-column-reverse todo-list">{items}</ul>
                        )}
                </div>
            </>
        );
    }
}

export default TodosList;
