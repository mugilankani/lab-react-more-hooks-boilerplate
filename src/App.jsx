import { useState, useReducer, useRef } from 'react'
import './App.css'
import ListItem from './Compound/ListItem'

const reducer = (state, action) => {
  const {type , payload} = action
  switch(type){
    case "Add":
      return [...state, payload]
    default:
      return state
  }
}


function App() {
  const [input, setInput] = useState('')
 const [todos , dispatch] = useReducer(reducer, [])
  const inputRef = useRef()

  const handleChange =(e) => {
    setInput(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    dispatch({
      type : "Add",
      payload: input
    })
    setInput('')

  }
  const handleFocus = ()=> {
    inputRef.current.focus()
  }


  return (

    <div>
    <form onSubmit={handleSubmit} className="App">
      <input type="text" ref={inputRef} onChange={handleChange} value={input} />
    </form>
    <div>
      
        {todos.map((ele,index) => {
          return(

            <ListItem key={index} todo = {ele} />
            
          )

        })}
     
    </div>
    <div>
      <button onClick={handleFocus}>Go Back Writing</button>
    </div>

    </div>
  )
}

export default App
