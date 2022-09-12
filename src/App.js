
import './App.css';
import ToDoForm from './ToDoForm';
import List from './List';
import { useReducer, useState} from 'react';
import ToDoFooter from './ToDoFooter';
import { endContext } from './EndContext';
import {startContext} from './StartContext';


function App() {
  const [end, setEnd] = useState(5)
  const [start, setStart] = useState(0)
  
  function reducer(state, action){
    if(action.type === 'add'){
      return([
        
        {
          id: Math.random(),
          text: action.payload.text,
          isCompleted: false,
        },
        ...state
      ])
    }else if(action.type === 'clear'){
      return(state.filter((todo) => !todo.isCompleted) )
    } else if(action.type === 'delete') {
      return state.filter((t)  => t.id !== action.payload.id);
    } else if(action.type === "update") {
      return state.map((todo, i) => {
        
           if(todo.id === action.payload.updatedTodo.id) {
          return action.payload.updatedTodo;
        }
        return todo;
      
       
      })
    
    }
  }
  const[todos, dispatch] = useReducer(reducer, [
    {
        id: Math.random(),
        text: 'to run',
        isCompleted: false,

    },
    {
        id: Math.random(),
        text: 'to swim',
        isCompleted: false,

    },
    {
        id: Math.random(),
        text: 'relax',
        isCompleted: false,

    }
 ] )
 
  return (
    
    <div className="App">
      <div className='todo'>
        <div className='todo__box'>
          <h1 className='todo__header'>todo list</h1>
          <ToDoForm onAdd={(text) => {
          dispatch({
            type: 'add',
            payload:{
              text:text
            }
          })
        }}/>
        <startContext.Provider value={[start, setStart]}>
          <endContext.Provider value={[end, setEnd]}>
            <List todos={todos} 
              onDelete={(todo) => {
                dispatch({
                  type: 'delete',
                  payload: {
                    id: todo.id
                  }
                });
              }}
              onChange={(newTodo) => {
                dispatch({
                  type: "update",
                  payload: {
                    updatedTodo: newTodo
                  }
                });
              }}/>
            <ToDoFooter todos={todos} onClear={() => {
              dispatch({
                type: 'clear',
                payload:{
                  id: todos.id,
                }
              }
                

              )
            }}/>
            </endContext.Provider>
          </startContext.Provider>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
