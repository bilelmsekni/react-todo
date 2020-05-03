import React from "react";
import TodosList from "./TodosList";

export default () => (
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-lg-12">
                <div className="card px-3">
                    <div className="card-body">Awesome Todo list</div>
                    <TodosList />
                </div>
            </div>
        </div>
    </div>
);
