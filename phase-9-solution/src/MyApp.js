import React from "react";
import TodosList from "./TodosList";
import { Route, Switch, Link } from "react-router-dom";

function MyApp() {
    const title = "Awesome Todo list";
    return (
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <Link to="/"> Home </Link>
                <div> *** *** ***</div>
                <Link to="/about"> About </Link>
                <div className="col-lg-12">
                    <div className="card px-3">
                        <div className="card-body">{title}</div>
                        <Switch>
                            <Route path="/" component={TodosList} exact />
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyApp;
