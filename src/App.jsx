import { useEffect, useState } from 'react'
import './App.css'
import { addToDo, deleteToDo, getAllToDo, updateToDo } from '../utils/HandleApi'
import ShowData from './components/ShowData'


function App() {

  const [ToDo, setToDo] = useState([])
  const [text, setText] =useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setTodoId] = useState("")
  
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id, text) =>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <>
      <div className="container">
        <div className="toparea">
          <h2>ToDo App</h2>
          <div className="field">
            <input type="text" placeholder='Enter the text' value={text} onChange={(e)=>setText(e.target.value)}/>
            
            <button onClick={
              isUpdating? () => updateToDo(toDoId,text, setToDo, setText, setIsUpdating) :
              ()=>addToDo(text, setText, setToDo)}>
              {isUpdating? "update" : "add"}
              </button>
          </div>
        </div>


        <div className="showdata">
          {ToDo.map((item) => <ShowData key={item._id} text={item.text}
          updateMode={() =>updateMode(item._id, item.text)} 
          deleteToDo={()=>deleteToDo(item._id, setToDo)}
          />)}

        </div>
      </div>
    </>
  )
}

export default App
