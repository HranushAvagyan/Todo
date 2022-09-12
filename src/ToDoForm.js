import toDoForm from './toDoForm.css'
import {useState} from 'react'


function ToDoForm({onAdd}){

    const[text, setText] = useState('')
    return(
        
        <form className='form'onSubmit={(e) => {
            e.preventDefault()
            onAdd(text);
            setText('')
        }}>
            <input className='input-box' type='text' value={text} onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button className='btn'>Add</button>

        </form>
    )
}


export default ToDoForm