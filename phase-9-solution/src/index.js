import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import MyApp from "./MyApp";
import { BrowserRouter } from 'react-router-dom';

render(<BrowserRouter><MyApp /></BrowserRouter>, document.getElementById("app"));
