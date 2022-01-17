import React from "react"
import ReactDOM from "react-dom"

import ToDoContainer from "./components/ToDoContainer"

import "./App.css"


// saying we want to render ToDoContainer in the root element of the document
ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>, 
  document.getElementById("root")
)
// ========================React.strictMode=========================== 
// React StrictMode helps to identify and detect various warnings/errors during the development phase.
// Since the StrictMode is a developer tool, it runs only in development mode. It does not affect the production build.


// const element = <h1>Hello from Create React App</h1>

// ReactDOM.render(element, document.getElementById("root"))
