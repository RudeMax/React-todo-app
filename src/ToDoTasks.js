 import React, { Component } from 'react';
 
 class ToDoTasks extends Component {
 
    render() { 
        return (
            this.props.todos.map(task => <div key={task.id} className={task.completed ? 'task-card complete' : 'task-card'}>
                <img className="check-img" onClick={() => this.props.onComplete(task.id)} src="https://icons-for-free.com/iconfiles/png/512/done+downloaded+icon-1320086210484717001.png"/>

                <img className="delete-img" onClick={() => this.props.onDeleteTask(task.id)} src="https://icons-for-free.com/iconfiles/png/512/Close+Remove+Circle+Cross+Delete-131983793801478052.png" />
                
                <p>{task.value}</p>
                </div>
            )
        )
    }
 }
  
 export default ToDoTasks;