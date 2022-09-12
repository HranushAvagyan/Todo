import {AiOutlineClose} from 'react-icons/ai'
import list from './list.css'
import TodoItem from './ToDoItem'
import {useState, useContext} from "react";
import { endContext } from './EndContext';
import {startContext} from './StartContext';



function List({todos, onDelete , onChange}){
    const [end, setEnd] = useContext(endContext)
    const [start, setStart] = useContext(startContext)
    
    return(
        <div className='list'>
                {
                    todos.map((todo, i) => {
                        if(i >= start && i < end){
                        return (
                            
                            <TodoItem 
                                key={todo.id} 
                                todo={todo}
                                onChange={onChange}
                                onDelete={onDelete}
                            
                            
                            />
                        )}
                    })
                }
        </div>
    )
}

export default List
