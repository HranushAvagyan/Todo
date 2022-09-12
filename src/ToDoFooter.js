 import toDoFooter from './toDoFooter.css'
 import {RiDeleteBinLine} from 'react-icons/ri'
 import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { useEffect, useState, useContext } from 'react';
import { endContext } from './EndContext';
import {startContext} from './StartContext';


 function ToDoFooter({todos, onClear}){
    const [todoLength, setTodoLength] = useState(false)
    useEffect(()=>{
        if(todos.length > 5){
            setTodoLength(true)
        }

    },[todos]);
    const [end, setEnd] = useContext(endContext)
    const [start, setStart] = useContext(startContext)
    const next = () => {
        if (end < todos.length) {
         setEnd(end + 5);
         setStart(start + 5);
        } 
      }
      const prev = () => {
       if(start > 0){
         setEnd(end - 5);
         setStart(start - 5);
       }
      }

    
    return(
        <div className='footer-box'>
            <span className='footer_span'>
            {todos.filter((todo) => todo.isCompleted).length}/{todos.length} Completed
            </span>
            <RiDeleteBinLine className="delete-item" onClick={onClear}/>
            <div className='arrow'>
                <IoIosArrowBack className={todoLength ? 'arrow-block' : 'arrow-none'}  onClick={prev}/>
                <IoIosArrowForward className={todoLength ? 'arrow-block' : 'arrow-none'} onClick={next}/>
            </div>
            
    
        </div>
    )
        
 }

 export default ToDoFooter