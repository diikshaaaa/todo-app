import React from "react";

class InputGiven extends React.Component {
    state = {
        title: ""
    };

    onChange = e => {
    // in arrow function if we have only one parameter, we can skip the parentheses 
        this.setState({
        // To change a value in the state object, we use the this.setState() method
            title: e.target.value
          });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ""
          });
    };



    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" className="input-text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputGiven