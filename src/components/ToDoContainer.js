import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import InputGiven from "./InputToDo"
import { v4 as uuidv4 } from "uuid";
// UUIDs are generally used for identifying information that needs to be unique 
// uuid = universally unique identifier 
// Uuid is a React library or package that creates a UUID

class ToDoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "item 1",
                completed: true
              },
              {
                id: uuidv4(),
                title: "item 2",
                completed: false
              },
              {
                id: uuidv4(),
                title: "item 3",
                completed: false
              }
        ]
    }

    handleChange = (id) => (
        this.setState(prevState => (
                {
                    todos: prevState.todos.map(
                        todo => {
                            if (todo.id === id) {
                                return {
                                    ...todo, completed: !todo.completed,
                                  }
                            }
                            return todo
                            
                        }
        
                    )
                }
            ) 
        )
    ); 

    delToDo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                  return todo.id !== id;
                })
              ]
        })
    }

    addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
          };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render() {
        return(
            
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputGiven addTodoProps={this.addTodoItem}/>
                    <ToDoList 
                        todos = {this.state.todos} 
                        handleChangeProps = {this.handleChange} 
                        deleteTodoProps={this.delToDo}
                    />
                </div>
            </div>
        );
    }
}

export default ToDoContainer