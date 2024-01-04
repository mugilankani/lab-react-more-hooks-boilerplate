import React from 'react'
import { useState, useReducer } from 'react'

export default function ListItem({todo}) {

    const [flag , setFlag] = useState(true)
    

  return (
    <div>
        <div>
            {
                flag ? <h3>{todo}</h3> : <h3>This content is hidden</h3>
            }
            
        </div>
        <div>
            <button onClick={() => setFlag(!flag)}>Toggle</button>
        </div>
      
    </div>
  )
}
