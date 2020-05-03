import React from "react";
import TodosList from "./TodosList";

function MyApp() {
    const title = "Awesome Todo list";
    return (
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="card px-3">
                        <div className="card-body">{title}</div>
                        <TodosList />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyApp;
