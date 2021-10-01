import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoTasks from './ToDoTasks';

class ToDoList extends React.Component {
    state = {
        tasks: [
            {id: 1, value: 'Study Frontend', completed: false},
            {id: 2, value: 'Become a Frontend Developer', completed: false},
            {id: 3, value: 'Buy a lot of cookies!', completed: false},
            {id: 4, value: 'Inspire Eric', completed: true},
        ]
    }

    handleAddTask = (newTask) => {
        this.setState({tasks: [...this.state.tasks, 
            {
                id: this.state.tasks.length + 1,
                value: newTask,
                completed: false
            }
        ]})
    };
    
    handleDeleteTask = (id) => {
        this.setState({tasks: [...this.state.tasks.filter((task) => task.id !== id)]})
    };
  
    handleComplete = (id) => {
        console.log('green');
        this.setState({tasks: [...this.state.tasks.map((task) => 
            task.id === id ? 
            {...task, completed: !task.completed} : 
            {...task})
        ]})
    };

    render() { 
        return <div className="todo-card">
            <p className="header">Just Do It!</p>
            <ToDoForm onAddTask={this.handleAddTask}/>
            <ToDoTasks onComplete={this.handleComplete} onDeleteTask={this.handleDeleteTask} todos={this.state.tasks}/>
        </div>;
    }
}
 
export default ToDoList;