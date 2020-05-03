import React from 'react';
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
    return (
        <div className="todolist">
            {   
                (props.todos.length > 0) ?
                    <ul className="list-group">
                        { props.todos.map((item, i) => {                            
                            return (
                                <TodoItem 
                                    key={i}
                                    item={item}
                                    completed={item.completed}
                                    markComplete={props.markComplete}
                                    deleteTodo={props.deleteTodo}
                                />
                            )
                        }) }
                    </ul> :
                (<div>No tasks</div>)
            }
        </div>
    )
}