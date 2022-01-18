import React from "react";
import Grid from '@material-ui/core/Grid';


class ToDoItem extends React.Component {

    render() {
        return (
            <li>
                <Grid>
                    <Grid>
                    <input 
                    type ="checkbox" 
                    checked = {this.props.todo.completed}
                    onChange= {() => this.props.handleChangeProps(this.props.todo.id)}
                    /> 
                    </Grid>

                    <Grid>
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                        Delete
                    </button>
                    </Grid>

                    <Grid>
                    {
                        this.props.todo.title
                    }
                    </Grid>
                </Grid>
            </li>
        );

    }
}

//functional component
// function ToDoItem(props) { // same name as the component class, we do not need a render method 

export default ToDoItem