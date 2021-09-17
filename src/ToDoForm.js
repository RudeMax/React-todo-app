import React, { Component } from 'react';

class ToDoForm extends React.Component {

    state = {
        inputValue: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTask(this.state.inputValue);
        this.setState({inputValue: ''}); 
    };

    handleTextChange = (e) => {
        e.preventDefault();
        this.setState({inputValue: e.target.value})
    };


    render() { 
        
        return (
            <form className="input-form" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleTextChange}
                    className="input-field"
                    type="text"
                    placeholder="Do something useful..." 
                />
                <button  className="save-btn">Save</button>

            </form>
        )
    }
}
 
export default ToDoForm;