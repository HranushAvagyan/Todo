
import toDoItem from './toDoItem.css'
import {AiOutlineClose} from 'react-icons/ai' 

function TodoItem({todo, onChange, onDelete}) {
    
    
   
    return (
        <div className='todo__items'>
            <label>
                <input className="checkbox" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }}/>
                {todo.text}
                
            </label>
            
            <AiOutlineClose className='cancle' onClick={() =>{
                    onDelete(todo)}}/>
        </div>
    )
}

export default TodoItem;

