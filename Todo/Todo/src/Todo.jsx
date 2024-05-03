import { useState } from "react"


export default function Todo() {
    const [input, setInput] = useState('')
    function handleChange(event){
        setInput(event.target.value)            
    }
  return (
    <div className='border-4 border-red-500 p-4 '>
      <h1 >Todo</h1>
      
      <input type="text" className='p-1 border-2 rounded-md' placeholder='Enter Todos'
      value={input} 
        onChange={handleChange}
      />
      <button className='m-2'>Add Todo</button>
    </div>
  )
}
